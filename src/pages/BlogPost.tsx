import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { User, ArrowLeft } from "lucide-react";
import { useMDXPost } from "@/hooks/useMDX";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { formatDateAndReadingTime } from "@/utils/dateTime";
import { AuthorSection } from "@/components/AuthorCard";
import React from "react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading } = useMDXPost("blogs", slug || "");

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-muted-foreground">Carregando post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Post não encontrado
          </h1>
          <p className="text-muted-foreground mb-8">
            O post que você está procurando não existe ou foi removido.
          </p>
          <Button asChild className="mt-8 mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const { matter, content, authorData } = post;

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="pt-16 pb-4 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                {matter.title}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4 px-4">
                <div className="flex items-center">
                  <User className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  {authorData?.map((a, idx) => (
                    <React.Fragment key={a.name}>
                      <Link
                        to={`/blog?author=${encodeURIComponent(a.name.trim())}`}
                        className="text-xs sm:text-sm hover:text-primary transition-colors cursor-pointer"
                      >
                        {a.name.trim()}
                      </Link>
                      {idx < authorData.length - 1 && (
                        <span>&nbsp;e&nbsp;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="text-xs sm:text-sm">
                    {formatDateAndReadingTime(matter.date, content)}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 px-4">
                {matter.tags?.map((tag: string) => (
                  <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer hover:bg-secondary/80 transition-colors text-xs sm:text-sm px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
              {matter.thumb && (
                <div className="px-4">
                  <img
                    src={matter.thumb}
                    alt={matter.title}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-pink-500 prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:rounded-lg prose-pre:shadow-sm prose-pre:overflow-x-auto prose-pre:not-prose prose-pre:my-4 prose-pre:p-0 prose-pre:before:content-none prose-pre:after:content-none prose-pre:code:bg-transparent prose-pre:code:p-0 prose-pre:code:text-foreground prose-pre:code:before:content-none prose-pre:code:after:content-none prose-table:border prose-table:border-border prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm prose-th:bg-muted prose-th:text-foreground prose-th:font-semibold prose-th:p-4 prose-td:p-4 prose-td:border-t prose-td:border-border prose-td:text-muted-foreground">
                <MarkdownRenderer content={content} />
              </article>

              {/* Author Cards */}
              {authorData && authorData.length > 0 && (
                <AuthorSection authors={authorData} />
              )}

              {/* Back to Blog Button */}
              <div className="mt-8 mb-8 text-center">
                <Button variant="outline" asChild>
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar ao Blog
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
