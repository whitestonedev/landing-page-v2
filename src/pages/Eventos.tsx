
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "React 19 e as Novas Features",
    date: "2024-07-15",
    time: "19:00",
    location: "Pedra Branca Tech Park",
    description: "Explorando as novidades do React 19 e como aplicá-las em projetos reais. Vamos ver as Server Components, Actions e muito mais!",
    speaker: "João Silva",
    speakerRole: "Senior Frontend Developer",
    tags: ["React", "Frontend", "JavaScript"],
    status: "Inscrições Abertas",
    attendees: 45,
    maxAttendees: 80
  },
  {
    id: 2,
    title: "DevOps com Docker e Kubernetes",
    date: "2024-07-22",
    time: "19:00",
    location: "Pedra Branca Tech Park",
    description: "Workshop prático sobre containerização e orquestração de aplicações. Traga seu notebook para codar junto!",
    speaker: "Carlos Ferreira",
    speakerRole: "DevOps Engineer",
    tags: ["DevOps", "Docker", "Kubernetes"],
    status: "Inscrições Abertas",
    attendees: 32,
    maxAttendees: 60
  }
];

const pastEvents = [
  {
    id: 3,
    title: "Introdução ao TypeScript",
    date: "2024-06-10",
    time: "19:00",
    location: "Pedra Branca Tech Park",
    description: "Uma introdução completa ao TypeScript para desenvolvedores JavaScript.",
    speaker: "Maria Santos",
    speakerRole: "Full Stack Developer",
    tags: ["TypeScript", "JavaScript", "Frontend"],
    attendees: 67,
    videoUrl: "https://youtube.com/watch?v=example1",
    materialsUrl: "https://github.com/whitestone-dev/typescript-intro"
  },
  {
    id: 4,
    title: "Arquitetura de Software Moderna",
    date: "2024-05-20",
    time: "19:00",
    location: "Pedra Branca Tech Park",
    description: "Discussão sobre padrões e práticas modernas de arquitetura de software.",
    speaker: "Ana Costa",
    speakerRole: "Software Architect",
    tags: ["Arquitetura", "Software", "Boas Práticas"],
    attendees: 54,
    videoUrl: "https://youtube.com/watch?v=example2",
    materialsUrl: "https://github.com/whitestone-dev/software-architecture"
  }
];

export default function Eventos() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Eventos whiteStone_dev
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Encontros presenciais gratuitos com foco em tecnologia, networking e troca de conhecimento
            </p>
          </div>

          {/* Tabs para eventos */}
          <div className="mt-12">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="upcoming">Próximos Eventos</TabsTrigger>
                <TabsTrigger value="past">Eventos Passados</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            {event.status}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            {event.attendees}/{event.maxAttendees}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription>
                          por {event.speaker} • {event.speakerRole}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            {new Date(event.date).toLocaleDateString('pt-BR', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-2 h-4 w-4 text-primary" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            {event.location}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1">
                            Inscrever-se
                          </Button>
                          <Button variant="outline">
                            Detalhes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="past" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">
                            Realizado
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            {event.attendees} participantes
                          </div>
                        </div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription>
                          por {event.speaker} • {event.speakerRole}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            {new Date(event.date).toLocaleDateString('pt-BR', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            {event.location}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" className="flex-1" asChild>
                            <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Assistir
                            </a>
                          </Button>
                          <Button variant="outline" className="flex-1" asChild>
                            <a href={event.materialsUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Materiais
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-teal-500/10 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Quer Palestrar na whiteStone_dev?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Estamos sempre em busca de palestrantes apaixonados por tecnologia. 
                  Compartilhe seu conhecimento com nossa comunidade!
                </p>
                <Button size="lg">
                  Propor Palestra
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
