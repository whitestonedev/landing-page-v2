import { useState, useEffect } from "react";
import matter from "gray-matter";
import authorsData from "@/data/authors.json";

export interface Author {
  name: string;
  position: string;
  company: string;
  image: string;
  linkedin?: string;
  github?: string;
}

export interface MDXMatter {
  title: string;
  date: string;
  author?: string;
  authors?: string[];
  tags: string[];
  thumb?: string;
  short_description: string;
  [key: string]: any;
}

export interface MDXPost {
  slug: string;
  matter: MDXMatter;
  content: string | null;
  authorData?: Author[];
}

// Permite importar tanto .md quanto .mdx (caso queira migrar para MDX no futuro)
const modules = import.meta.glob<string>("/src/content/**/*.{md,mdx}", {
  eager: true,
  query: "?raw",
  import: "default",
});

export const useMDXPosts = (folder: "blogs" | "events" | "projects") => {
  const [posts, setPosts] = useState<MDXPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allEntries = Object.entries(modules).filter(([path]) =>
      path.includes(`/src/content/${folder}/`)
    );

    const list = allEntries.map(([path, raw]) => {
      const { data, content } = matter(raw);
      const filename = path.split("/").pop() || "";
      const slug = filename.replace(/\.(md|mdx)$/, "");

      // Suporte para múltiplos autores
      const authorNames = data.authors || [data.author];
      const authorData = authorNames
        .map((name: string) => 
          authorsData.authors.find((a) => a.name === name)
        )
        .filter((author): author is Author => author !== undefined);

      return {
        slug,
        matter: data as MDXMatter,
        content,
        authorData,
      } as MDXPost;
    });

    list.sort(
      (a, b) =>
        new Date(b.matter.date).getTime() - new Date(a.matter.date).getTime()
    );

    setPosts(list);
    setLoading(false);
  }, [folder]);

  return { posts, loading };
};

export const useMDXPost = (
  folder: "blogs" | "events" | "projects",
  slug: string
) => {
  const [post, setPost] = useState<MDXPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const keyMd = `/src/content/${folder}/${slug}.md`;
    const keyMdx = `/src/content/${folder}/${slug}.mdx`;
    const raw = modules[keyMd] || modules[keyMdx];

    if (!raw) {
      console.error(`Post not found in build modules: ${keyMd} or ${keyMdx}`);
      setPost(null);
      setLoading(false);
      return;
    }

    const { data, content } = matter(raw);
    
    // Suporte para múltiplos autores
    const authorNames = data.authors || [data.author];
    const authorData = authorNames
      .map((name: string) => 
        authorsData.authors.find((a) => a.name === name)
      )
      .filter((author): author is Author => author !== undefined);

    setPost({
      slug,
      matter: data as MDXMatter,
      content,
      authorData,
    });
    setLoading(false);
  }, [folder, slug]);

  return { post, loading };
};
