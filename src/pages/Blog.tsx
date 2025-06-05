import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { useMDXPosts } from "@/hooks/useMDX";

export default function Blog() {
  const { posts: blogPosts, loading } = useMDXPosts('blogs');

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <p className="text-muted-foreground">Carregando posts...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Nenhum post encontrado</h1>
              <p className="text-muted-foreground">Ainda não há posts disponíveis. Volte em breve!</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <BookOpen className="mx-auto h-12 w-12 text-primary mb-4" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Blog da Comunidade
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Artigos técnicos, tutoriais, reflexões sobre tecnologia e novidades do mundo do desenvolvimento de software escritos pela nossa comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Post em Destaque</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.matter.banner_link} 
                      alt={featuredPost.matter.title}
                      className="h-64 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {new Date(featuredPost.matter.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          {featuredPost.matter.author}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{featuredPost.matter.title}</CardTitle>
                      <CardDescription className="text-base">
                        {featuredPost.matter.short_description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredPost.matter.tags?.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      <Button asChild>
                        <Link to={`/blog/${featuredPost.slug}`}>
                          Ler Artigo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Posts Recentes</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={post.matter.banner_link} 
                      alt={post.matter.title}
                      className="h-48 w-full object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {new Date(post.matter.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-3 w-3" />
                          {post.matter.author}
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{post.matter.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.matter.short_description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.matter.tags?.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to={`/blog/${post.slug}`}>
                          Ler Mais <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Fique por Dentro das Novidades
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Receba notificações sobre novos posts e eventos da comunidade
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="https://links.whitestonedev.com.br" target="_blank" rel="noopener noreferrer">
                    Participar da Comunidade
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
