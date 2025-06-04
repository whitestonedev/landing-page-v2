
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

// Mock data for blog posts - in a real implementation, this would come from MDX files
const blogPosts = [
  {
    id: 1,
    title: "Como iniciamos a whiteStone_dev",
    slug: "como-iniciamos-whitestone-dev",
    date: "2024-06-20",
    author: "João Silva",
    tags: ["Comunidade", "História", "Open Source"],
    shortDescription: "A história por trás da criação da nossa comunidade tech em Florianópolis e os desafios que enfrentamos.",
    bannerLink: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Primeiros passos com TypeScript",
    slug: "primeiros-passos-typescript",
    date: "2024-06-15",
    author: "Maria Santos",
    tags: ["TypeScript", "JavaScript", "Tutorial"],
    shortDescription: "Guia completo para desenvolvedores que querem começar com TypeScript e suas principais vantagens.",
    bannerLink: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "DevOps: Automatizando deployments com GitHub Actions",
    slug: "devops-github-actions",
    date: "2024-06-10",
    author: "Carlos Ferreira",
    tags: ["DevOps", "CI/CD", "GitHub"],
    shortDescription: "Como configurar pipelines de deploy automatizado usando GitHub Actions para seus projetos.",
    bannerLink: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "React Server Components: O futuro do React",
    slug: "react-server-components",
    date: "2024-06-05",
    author: "João Silva",
    tags: ["React", "Frontend", "Performance"],
    shortDescription: "Explorando os React Server Components e como eles podem revolucionar a forma de desenvolver aplicações.",
    bannerLink: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  }
];

const featuredPost = blogPosts[0];
const recentPosts = blogPosts.slice(1);

export default function Blog() {
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
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Post em Destaque</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.bannerLink} 
                    alt={featuredPost.title}
                    className="h-64 w-full object-cover md:h-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        {featuredPost.author}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base">
                      {featuredPost.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
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

        {/* Recent Posts */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Posts Recentes</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={post.bannerLink} 
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
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
                  <Link to="/contato">
                    Participar da Comunidade
                  </Link>
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
