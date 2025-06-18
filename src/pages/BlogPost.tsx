import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Github, Linkedin } from "lucide-react";
import { useMDXPost } from "@/hooks/useMDX";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

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
          <div className="mx-auto max-w-7xl px-6 lg:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                {matter.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(matter.date).toLocaleDateString("pt-BR")}
                </div>
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>
                    {authorData?.map(a => a.name).join(' e ')}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {matter.tags?.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              {matter.thumb && (
                <img
                  src={matter.thumb}
                  alt={matter.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
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
                <div className="mt-16 flex flex-col items-center">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Sobre o{authorData.length > 1 ? 's Autores' : ' Autor'}
                  </h3>
                  <div className="flex flex-row justify-center gap-6 w-full">
                    {authorData.map((author) => (
                      <Card key={author.name} className="flex flex-row items-center gap-3 px-4 py-2 shadow-none border border-muted-foreground/10 bg-muted/40">
                        <img
                          src={author.image}
                          alt={author.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div className="flex flex-col justify-center">
                          <span className="font-medium text-base leading-tight">{author.name}</span>
                          <span className="text-xs text-muted-foreground leading-tight">
                            {author.position}{author.company && ` @ ${author.company}`}
                          </span>
                          <div className="flex gap-1 mt-1">
                            {author.github && (
                              <Button variant="ghost" size="icon" className="h-6 w-6 p-0" asChild>
                                <a
                                  href={author.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                            {author.linkedin && (
                              <Button variant="ghost" size="icon" className="h-6 w-6 p-0" asChild>
                                <a
                                  href={author.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
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
