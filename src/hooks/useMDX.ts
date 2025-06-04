
import { useState, useEffect } from 'react';
import matter from 'gray-matter';

export interface MDXMatter {
  title: string;
  date: string;
  author: string;
  tags: string[];
  banner_link?: string;
  short_description: string;
  [key: string]: any;
}

export interface MDXPost {
  slug: string;
  matter: MDXMatter;
  content: string;
}

export const useMDXPosts = (folder: 'blogs' | 'events') => {
  const [posts, setPosts] = useState<MDXPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Get all MDX files from the folder
        const modules = import.meta.glob('/src/content/**/*.mdx', { as: 'raw' });
        const postPromises = Object.entries(modules)
          .filter(([path]) => path.includes(`/${folder}/`))
          .map(async ([path, loadContent]) => {
            const content = await loadContent();
            const { data, content: markdownContent } = matter(content);
            const slug = path.split('/').pop()?.replace('.mdx', '') || '';
            
            return {
              slug,
              matter: data as MDXMatter,
              content: markdownContent
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
        const content = await import(`/src/content/${folder}/${slug}.mdx?raw`);
        const { data, content: markdownContent } = matter(content.default);
        
        setPost({
          slug,
          matter: data as MDXMatter,
          content: markdownContent
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
