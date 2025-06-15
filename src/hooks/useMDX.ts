import { useState, useEffect } from "react";
import matter from "gray-matter";
import authorsData from "@/data/authors.json";

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
  content: string | null;
  authorData?: Author;
}

const modules = import.meta.glob<string>("/src/content/**/*.md", {
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
      const { data } = matter(raw);
      const filename = path.split("/").pop() || "";
      const slug = filename.replace(/\.md$/, "");

      const authorData = authorsData.authors.find(
        (a: Author) => a.id === data.author_id
      );

      return {
        slug,
        matter: data as MDXMatter,
        content: null,
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
    const key = `/src/content/${folder}/${slug}.md`;
    const raw = modules[key];

    if (!raw) {
      console.error(`Post not found in build modules: ${key}`);
      setPost(null);
      setLoading(false);
      return;
    }

    const { data, content } = matter(raw);
    const authorData = authorsData.authors.find(
      (a: Author) => a.id === data.author_id
    );

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
