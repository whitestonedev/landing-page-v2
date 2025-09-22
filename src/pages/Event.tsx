import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { useMDXPosts } from "@/hooks/useMDX";
import { formatShortDatePtBR } from "@/utils/dateTime";

export default function Events() {
  const { posts: events, loading } = useMDXPosts("events");

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-muted-foreground">Carregando eventos...</p>
        </div>
      </div>
    );
  }

  const currentDate = new Date();
  const upcomingEvents = events.filter(
    (event) => new Date(event.matter.date) >= currentDate
  );
  const pastEvents = events.filter(
    (event) => new Date(event.matter.date) < currentDate
  );

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Eventos da Comunidade
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Participe dos nossos encontros presenciais gratuitos. Palestras,
                workshops, networking e muito aprendizado na região da Grande
                Florianópolis.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Próximos Eventos
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.slug}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={event.matter.thumb}
                      alt={event.matter.title}
                      className="h-48 w-full object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="mb-2">
                          <Calendar className="mr-1 h-3 w-3" />
                          {formatShortDatePtBR(event.matter.date)} às{" "}
                          {event.matter.time}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">
                        {event.matter.title}
                      </CardTitle>
                      <CardDescription className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {event.matter.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {event.matter.short_description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.matter.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full" asChild>
                        <Link to={`/eventos/${event.slug}`}>
                          Ver Detalhes e Inscrever-se{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Eventos Anteriores
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {pastEvents.map((event) => (
                  <Card
                    key={event.slug}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={event.matter.thumb}
                      alt={event.matter.title}
                      className="h-48 w-full object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">
                          <Calendar className="mr-1 h-3 w-3" />
                          {formatShortDatePtBR(event.matter.date)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">
                        {event.matter.title}
                      </CardTitle>
                      <CardDescription className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {event.matter.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {event.matter.short_description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.matter.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/eventos/${event.slug}`}>
                          Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Fique por Dentro
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Não perca nenhum evento! Conecte-se conosco e receba
                atualizações sobre novos eventos e atividades da comunidade.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a
                    href="https://links.whitestonedev.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Entrar na Comunidade
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
