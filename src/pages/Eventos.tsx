
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";

// Mock data for events - in a real implementation, this would come from MDX files
const upcomingEvents = [
  {
    id: 1,
    title: "React 19 e as Novas Features",
    slug: "react-19-novas-features",
    date: "2024-07-15",
    time: "19:00",
    location: "Pedra Branca Tech Park",
    description: "Explorando as novidades do React 19 e como aplicá-las em projetos reais.",
    tags: ["React", "Frontend", "JavaScript"],
    speaker: "João Silva",
    attendees: 32,
    maxAttendees: 50,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "DevOps com Docker e Kubernetes",
    slug: "devops-docker-kubernetes",
    date: "2024-07-22",
    time: "19:00",
    location: "Pedra Branca Tech Park",
    description: "Workshop prático sobre containerização e orquestração de aplicações.",
    tags: ["DevOps", "Docker", "Kubernetes"],
    speaker: "Carlos Ferreira",
    attendees: 28,
    maxAttendees: 40,
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop"
  }
];

const pastEvents = [
  {
    id: 3,
    title: "Introdução ao TypeScript",
    date: "2024-06-10",
    location: "Pedra Branca Tech Park",
    description: "Primeiros passos com TypeScript para desenvolvedores JavaScript.",
    tags: ["TypeScript", "JavaScript"],
    speaker: "Maria Santos",
    attendees: 45,
    recording: "https://youtube.com/watch?v=example",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Git e GitHub para Iniciantes",
    date: "2024-05-20",
    location: "Pedra Branca Tech Park",
    description: "Workshop sobre controle de versão e colaboração em projetos.",
    tags: ["Git", "GitHub", "Workflow"],
    speaker: "Ana Costa",
    attendees: 38,
    recording: "https://youtube.com/watch?v=example2",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop"
  }
];

export default function Eventos() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Eventos da Comunidade
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Participe dos nossos encontros presenciais gratuitos. Palestras, workshops, networking e muito aprendizado na região da Grande Florianópolis.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Próximos Eventos</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="mb-2">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}
                      </Badge>
                      <Badge variant="outline">
                        {event.maxAttendees - event.attendees} vagas
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Users className="mr-1 h-3 w-3" />
                      <span>Palestrante: {event.speaker}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link to={`/eventos/${event.slug}`}>
                        Ver Detalhes e Inscrever-se <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Eventos Anteriores</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(event.date).toLocaleDateString('pt-BR')}
                      </Badge>
                      <Badge variant="secondary">
                        {event.attendees} participantes
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3" />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Users className="mr-1 h-3 w-3" />
                      <span>Palestrante: {event.speaker}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    {event.recording && (
                      <Button variant="outline" className="w-full" asChild>
                        <a href={event.recording} target="_blank" rel="noopener noreferrer">
                          Assistir Gravação <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Fique por Dentro
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Não perca nenhum evento! Conecte-se conosco e receba atualizações sobre novos eventos e atividades da comunidade.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="https://links.whitestonedev.com.br" target="_blank" rel="noopener noreferrer">
                    <Users className="mr-2 h-5 w-5" />
                    Entrar na Comunidade
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
