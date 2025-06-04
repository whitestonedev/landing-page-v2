
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowLeft, ExternalLink } from "lucide-react";

// Mock data for events - in a real implementation, this would come from MDX files
const eventsData = {
  "react-19-novas-features": {
    title: "React 19 e as Novas Features",
    date: "2024-07-15",
    time: "19:00",
    duration: "2h",
    location: "Pedra Branca Tech Park",
    address: "Av. Luiz Boiteux Piazza, 1302 - Cachoeira do Bom Jesus, Florianópolis - SC",
    description: "Explorando as novidades do React 19 e como aplicá-las em projetos reais. Neste evento, vamos mergulhar nas principais funcionalidades que chegaram com o React 19, incluindo Server Components, novas APIs de concorrência e melhorias de performance.",
    tags: ["React", "Frontend", "JavaScript"],
    speaker: {
      name: "João Silva",
      position: "Senior Frontend Developer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    agenda: [
      { time: "19:00", activity: "Coffee & Networking" },
      { time: "19:30", activity: "Abertura e Apresentação da Comunidade" },
      { time: "19:45", activity: "Palestra: React 19 - Novidades e Breaking Changes" },
      { time: "20:30", activity: "Demo prática: Implementando Server Components" },
      { time: "20:50", activity: "Q&A com a audiência" },
      { time: "21:00", activity: "Networking final" }
    ],
    maxAttendees: 50,
    currentAttendees: 32,
    registrationUrl: "https://links.whitestonedev.com.br",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    materials: [
      { name: "Slides da apresentação", url: "#" },
      { name: "Código de exemplo", url: "#" },
      { name: "Documentação React 19", url: "https://react.dev" }
    ]
  },
  "devops-docker-kubernetes": {
    title: "DevOps com Docker e Kubernetes",
    date: "2024-07-22",
    time: "19:00",
    duration: "2h30",
    location: "Pedra Branca Tech Park",
    address: "Av. Luiz Boiteux Piazza, 1302 - Cachoeira do Bom Jesus, Florianópolis - SC",
    description: "Workshop prático sobre containerização e orquestração de aplicações. Aprenda desde os conceitos básicos do Docker até deploy em produção com Kubernetes.",
    tags: ["DevOps", "Docker", "Kubernetes"],
    speaker: {
      name: "Carlos Ferreira",
      position: "DevOps Engineer",
      company: "CloudTech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    agenda: [
      { time: "19:00", activity: "Coffee & Networking" },
      { time: "19:30", activity: "Introdução ao DevOps e Containers" },
      { time: "20:00", activity: "Hands-on: Criando imagens Docker" },
      { time: "20:30", activity: "Kubernetes na prática" },
      { time: "21:00", activity: "Deploy de aplicação completa" },
      { time: "21:20", activity: "Q&A e encerramento" }
    ],
    maxAttendees: 40,
    currentAttendees: 28,
    registrationUrl: "https://links.whitestonedev.com.br",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
    materials: [
      { name: "Dockerfile de exemplo", url: "#" },
      { name: "Manifests Kubernetes", url: "#" },
      { name: "Guia de comandos Docker", url: "#" }
    ]
  }
};

export default function EventoDetalhes() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? eventsData[slug as keyof typeof eventsData] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Evento não encontrado</h1>
              <p className="text-muted-foreground mb-8">O evento que você está procurando não existe ou foi removido.</p>
              <Button asChild>
                <Link to="/eventos">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar aos Eventos
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const spotsLeft = event.maxAttendees - event.currentAttendees;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative">
          <img 
            src={event.image} 
            alt={event.title}
            className="h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
              <Button variant="ghost" asChild className="mb-4 text-white hover:text-white hover:bg-white/20">
                <Link to="/eventos">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar aos Eventos
                </Link>
              </Button>
              <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Speaker */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Palestrante
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={event.speaker.image} 
                      alt={event.speaker.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{event.speaker.name}</h3>
                      <p className="text-muted-foreground">{event.speaker.position}</p>
                      <p className="text-sm text-muted-foreground">{event.speaker.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Agenda */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Agenda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="text-sm font-mono text-muted-foreground w-16">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{item.activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Materials */}
              {event.materials.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Materiais do Evento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {event.materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">{material.name}</span>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={material.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Evento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-3 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">
                        {new Date(event.date).toLocaleDateString('pt-BR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-muted-foreground">{event.time} - Duração: {event.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-sm">
                    <MapPin className="mr-3 h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">{event.location}</p>
                      <p className="text-muted-foreground">{event.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Users className="mr-3 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{event.currentAttendees}/{event.maxAttendees} inscritos</p>
                      <p className="text-muted-foreground">
                        {spotsLeft > 0 ? `${spotsLeft} vagas restantes` : 'Evento lotado'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Registration */}
              <Card>
                <CardHeader>
                  <CardTitle>Participar do Evento</CardTitle>
                  <CardDescription>
                    {spotsLeft > 0 
                      ? 'Inscreva-se gratuitamente para participar' 
                      : 'Entre na lista de espera'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    asChild
                    disabled={spotsLeft === 0}
                  >
                    <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                      {spotsLeft > 0 ? 'Inscrever-se Gratuitamente' : 'Lista de Espera'}
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Evento 100% gratuito • Coffee break incluso
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
