
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Code, Users } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "React 19 e as Novas Features",
    date: "2024-07-15",
    time: "19:00",
    location: "Pedra Branca Tech Park",
    description: "Explorando as novidades do React 19 e como aplicá-las em projetos reais.",
    tags: ["React", "Frontend", "JavaScript"]
  },
  {
    id: 2,
    title: "DevOps com Docker e Kubernetes",
    date: "2024-07-22",
    time: "19:00",
    location: "Pedra Branca Tech Park",
    description: "Workshop prático sobre containerização e orquestração de aplicações.",
    tags: ["DevOps", "Docker", "Kubernetes"]
  }
];

const recentPosts = [
  {
    id: 1,
    title: "Como iniciamos a whiteStone_dev",
    excerpt: "A história por trás da criação da nossa comunidade tech em Florianópolis.",
    date: "2024-06-20",
    author: "João Silva"
  },
  {
    id: 2,
    title: "Primeiros passos com TypeScript",
    excerpt: "Guia completo para desenvolvedores que querem começar com TypeScript.",
    date: "2024-06-15",
    author: "Maria Santos"
  }
];

const featuredProjects = [
  {
    id: 1,
    name: "Event Manager",
    description: "Sistema de gestão de eventos da comunidade, desenvolvido colaborativamente.",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "Em desenvolvimento"
  },
  {
    id: 2,
    name: "Tech Jobs SC",
    description: "Plataforma para divulgação de vagas de tecnologia em Santa Catarina.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    status: "Beta"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Próximos Eventos */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Próximos Eventos
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Participe dos nossos encontros presenciais e conecte-se com a comunidade tech
              </p>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="mb-2">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>
                      📍 {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link to="/eventos">
                        Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/eventos">Ver Todos os Eventos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Posts Recentes */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Blog da Comunidade
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Artigos técnicos, tutoriais e novidades do mundo da tecnologia
              </p>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {recentPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      <Link to="/blog">{post.title}</Link>
                    </CardTitle>
                    <CardDescription>
                      Por {post.author} • {new Date(post.date).toLocaleDateString('pt-BR')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/blog">Ver Todos os Posts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projetos Open Source */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Projetos Open Source
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Iniciativas colaborativas desenvolvidas pela nossa comunidade
              </p>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center">
                        <Code className="mr-2 h-5 w-5 text-primary" />
                        {project.name}
                      </CardTitle>
                      <Badge variant={project.status === "Beta" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/projetos">
                        Ver Projeto <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/projetos">Ver Todos os Projetos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Faça Parte da Comunidade
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Conecte-se com desenvolvedores, participe de eventos e contribua para projetos open source
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Button size="lg" asChild>
                  <a href="https://links.whitestonedev.com.br" target="_blank" rel="noopener noreferrer">
                    <Users className="mr-2 h-5 w-5" />
                    Junte-se a Nós
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/como-ajudar">Como Apoiar</Link>
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
