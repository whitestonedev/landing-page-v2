import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import authorsData from '@/data/authors.json';

export interface Author {
  id: string;
  name: string;
  position: string;
  linkedin: string;
  github: string;
  image: string;
}

export interface MDXMatter {
  title: string;
  date: string;
  author: string;
  author_id: string;
  tags: string[];
  banner_link?: string;
  short_description: string;
  [key: string]: any;
}

export interface MDXPost {
  slug: string;
  matter: MDXMatter;
  content: string;
  authorData?: Author;
}

export const useMDXPosts = (folder: 'blogs' | 'events' | 'projects') => {
  const [posts, setPosts] = useState<MDXPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Get all MD files from the folder
        const modules = import.meta.glob('/src/content/**/*.md', { 
          query: '?raw',
          import: 'default'
        });
        const postPromises = Object.entries(modules)
          .filter(([path]) => path.includes(`/${folder}/`))
          .map(async ([path, loadContent]) => {
            const content = await loadContent() as string;
            const { data } = matter(content);
            const slug = path.split('/').pop()?.replace('.md', '') || '';
            
            // Find author data
            const authorData = authorsData.authors.find(
              (author) => author.id === data.author_id
            );
            
            return {
              slug,
              matter: data as MDXMatter,
              content: null, // We don't need the content for the list view
              authorData
            };
          });

        const loadedPosts = await Promise.all(postPromises);
        
        // Sort by date (newest first)
        loadedPosts.sort((a, b) => new Date(b.matter.date).getTime() - new Date(a.matter.date).getTime());
        
        setPosts(loadedPosts);
      } catch (error) {
        console.error(`Error loading ${folder}:`, error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [folder]);

  return { posts, loading };
};

export const useMDXPost = (folder: 'blogs' | 'events', slug: string) => {
  const [post, setPost] = useState<MDXPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Import the raw markdown content
        const rawModule = await import(/* @vite-ignore */ `/src/content/${folder}/${slug}.md?raw`);
        const { data, content } = matter(rawModule.default);
        
        // Find author data
        const authorData = authorsData.authors.find(
          (author) => author.id === data.author_id
        );
        
        setPost({
          slug,
          matter: data as MDXMatter,
          content,
          authorData
        });
      } catch (error) {
        console.error(`Error loading ${folder}/${slug}:`, error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [folder, slug]);

  return { post, loading };
};
