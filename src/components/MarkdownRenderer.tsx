import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("json", json);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", html);

interface CodeProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const markdownComponents = {
  h1: ({ node, ...props }) => (
    <h1 className="text-4xl font-bold my-6" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-3xl font-semibold my-5" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-2xl font-semibold my-4" {...props} />
  ),
  h4: ({ node, ...props }) => (
    <h4 className="text-xl font-semibold my-4" {...props} />
  ),
  h5: ({ node, ...props }) => (
    <h5 className="text-lg font-semibold my-3" {...props} />
  ),
  h6: ({ node, ...props }) => (
    <h6 className="text-base font-semibold my-3" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="my-4 text-foreground leading-relaxed" {...props} />
  ),
  a: ({ node, ...props }) => (
    <a
      className="text-primary underline underline-offset-2 hover:text-primary/80"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: ({ node, ...props }) => {
    const isNested = node?.position?.start?.column > 1 || node?.depth > 1 || node?.parent?.type === 'listItem';
    return (
      <ul
        className={
          isNested
            ? "list-disc my-2 pl-8"
            : "list-disc my-4 pl-4"
        }
        {...props}
      />
    );
  },
  ol: ({ node, ...props }) => {
    const isNested = node?.position?.start?.column > 1 || node?.depth > 1 || node?.parent?.type === 'listItem';
    return (
      <ol
        className={
          isNested
            ? "list-decimal my-2 pl-8"
            : "list-decimal my-4 pl-4"
        }
        {...props}
      />
    );
  },
  li: ({ node, ...props }) => <li className="my-1 leading-relaxed" {...props} />,
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-muted pl-4 italic text-muted-foreground my-4"
      {...props}
    />
  ),
  pre: ({ node, ...props }) => (
    <pre
      className="bg-muted p-4 rounded-lg overflow-x-auto my-4 border-none"
      {...props}
    />
  ),
  code: ({ node, inline, className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline ? (
      <code className={className} {...props}>
        {children}
      </code>
    ) : (
      <code
        className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-pink-500"
        {...props}
      >
        {children}
      </code>
    );
  },
  table: ({ node, ...props }) => {
    const isSponsorTable = node?.children?.[0]?.children?.some((td) =>
      td.children?.[0]?.properties?.src?.includes("/img/sponsors")
    );

    return (
      <div className="overflow-x-auto">
        <table
          className={
            isSponsorTable ? "sponsor-table" : "w-full border-collapse"
          }
          {...props}
        />
      </div>
    );
  },
  td: ({ node, ...props }) => {
    const isSponsor =
      node?.children?.[0]?.properties?.src?.includes("/img/sponsors");
    return (
      <td
        className={isSponsor ? "sponsor-cell" : "border px-4 py-2"}
        {...props}
      />
    );
  },
  img: ({ node, ...props }) => {
    const isSponsor = props.src?.includes("/img/sponsors");
    return (
      <img
        className={
          isSponsor ? "sponsor-img" : "my-4 rounded-md max-w-full h-auto"
        }
        {...props}
        loading="lazy"
      />
    );
  },
};

export const MarkdownRenderer = ({ content }: { content: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeHighlight, rehypeRaw]}
    components={markdownComponents}
  >
    {content}
  </ReactMarkdown>
);
