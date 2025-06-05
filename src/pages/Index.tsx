import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Code, Users, ExternalLink } from "lucide-react";
import { useMDXPosts } from "@/hooks/useMDX";
import projectsData from '@/data/projects.json';
import { Project } from '@/types';

// Adjust the import if projects.json is not imported directly as an array
const projects: Project[] = (projectsData as any).default || projectsData as Project[]; // Handle potential default export

export default function Index() {
  const { posts: allUpcomingEvents, loading: eventsLoading } = useMDXPosts('events');
  const { posts: allRecentPosts, loading: postsLoading } = useMDXPosts('blogs');
  
  // Filter and limit projects from JSON
  const featuredProjects = projects
    .slice(0, 4);

  const upcomingEvents = allUpcomingEvents ? allUpcomingEvents.slice(0, 4) : [];
  const recentPosts = allRecentPosts ? allRecentPosts.slice(0, 4) : [];

  const loading = eventsLoading || postsLoading;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
            <p className="text-muted-foreground">Carregando conteúdo...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Próximos Eventos */}
        {upcomingEvents && upcomingEvents.length > 0 && (
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
                  <Card key={event.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {event.matter.banner_link && (
                      <img 
                        src={event.matter.banner_link} 
                        alt={event.matter.title}
                        className="h-48 w-full object-cover"
                      />
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        {event.matter.date && event.matter.time && (
                          <Badge variant="secondary" className="mb-2">
                            <Calendar className="mr-1 h-3 w-3" />
                            {new Date(event.matter.date).toLocaleDateString('pt-BR')} às {event.matter.time}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl">{event.matter.title}</CardTitle>
                      {event.matter.location && (
                        <CardDescription>
                          📍 {event.matter.location}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      {event.matter.short_description && (
                         <p className="text-muted-foreground mb-4">{event.matter.short_description}</p>
                      )}
                     
                      {event.matter.tags && event.matter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.matter.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      )}
                      <Button className="w-full" asChild>
                        <Link to={`/eventos/${event.slug}`}>
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
        )}

        {/* Posts Recentes */}
        {recentPosts && recentPosts.length > 0 && (
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
                  <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                     {post.matter.banner_link && (
                      <img 
                        src={post.matter.banner_link} 
                        alt={post.matter.title}
                        className="h-48 w-full object-cover"
                      />
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.matter.title}</Link>
                      </CardTitle>
                      {(post.matter.author || post.matter.date) && (
                        <CardDescription>
                          {post.matter.author && `Por ${post.matter.author}`} {post.matter.date && `• ${new Date(post.matter.date).toLocaleDateString('pt-BR')}`}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      {post.matter.excerpt && (
                        <p className="text-muted-foreground">{post.matter.excerpt}</p>
                      )}
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
        )}

        {/* Projetos Open Source */}
         {featuredProjects && featuredProjects.length > 0 && (
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
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="h-48 w-full object-cover"
                      />
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl flex items-center">
                          <Code className="mr-2 h-5 w-5 text-primary" />
                          {project.name}
                        </CardTitle>
                        {project.status && (
                          <Badge variant={project.status === "Beta" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {project.shortDescription && (
                        <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                      )}
                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech: string) => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      )}
                      <Button variant="outline" className="w-full" asChild>
                        {/* Link to project details or external repo */}
                        <a href={project.github || project.demo || "#"} target="_blank" rel="noopener noreferrer">
                           Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
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
         )}

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
