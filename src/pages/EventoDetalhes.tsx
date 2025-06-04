
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { useMDXPost } from "@/hooks/useMDX";

export default function EventoDetalhes() {
  const { slug } = useParams<{ slug: string }>();
  const { post: event, loading } = useMDXPost('events', slug || '');

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <p className="text-muted-foreground">Carregando evento...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  const spotsLeft = event.matter.max_attendees && event.matter.current_attendees 
    ? event.matter.max_attendees - event.matter.current_attendees 
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative">
          <img 
            src={event.matter.banner_link} 
            alt={event.matter.title}
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
              <h1 className="text-4xl font-bold text-white mb-4">{event.matter.title}</h1>
              <div className="flex flex-wrap gap-2">
                {event.matter.tags.map((tag) => (
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
                <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {event.content}
                </div>
              </div>

              {/* Speaker */}
              {event.matter.speaker_name && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Palestrante
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      {event.matter.speaker_image && (
                        <img 
                          src={event.matter.speaker_image} 
                          alt={event.matter.speaker_name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold text-lg">{event.matter.speaker_name}</h3>
                        {event.matter.speaker_position && (
                          <p className="text-muted-foreground">{event.matter.speaker_position}</p>
                        )}
                        {event.matter.speaker_company && (
                          <p className="text-sm text-muted-foreground">{event.matter.speaker_company}</p>
                        )}
                      </div>
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
                        {new Date(event.matter.date).toLocaleDateString('pt-BR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-muted-foreground">
                        {event.matter.time}
                        {event.matter.duration && ` - Duração: ${event.matter.duration}`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-sm">
                    <MapPin className="mr-3 h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">{event.matter.location}</p>
                      {event.matter.address && (
                        <p className="text-muted-foreground">{event.matter.address}</p>
                      )}
                    </div>
                  </div>
                  
                  {event.matter.max_attendees && event.matter.current_attendees && (
                    <div className="flex items-center text-sm">
                      <Users className="mr-3 h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{event.matter.current_attendees}/{event.matter.max_attendees} inscritos</p>
                        <p className="text-muted-foreground">
                          {spotsLeft && spotsLeft > 0 ? `${spotsLeft} vagas restantes` : 'Evento lotado'}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Registration */}
              <Card>
                <CardHeader>
                  <CardTitle>Participar do Evento</CardTitle>
                  <CardDescription>
                    {spotsLeft && spotsLeft > 0 
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
                    <a href={event.matter.registration_url || "https://links.whitestonedev.com.br"} target="_blank" rel="noopener noreferrer">
                      {spotsLeft && spotsLeft > 0 ? 'Inscrever-se Gratuitamente' : 'Lista de Espera'}
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
