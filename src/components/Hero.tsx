
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Users, Code, MapPin } from "lucide-react";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                Nova temporada de eventos
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Conectando a comunidade{" "}
            <span className="gradient-text">tech</span> de Florianópolis
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A whiteStone_dev promove eventos gratuitos e presenciais de tecnologia, 
            focados em inclusão, networking e troca de conhecimento na Grande Florianópolis.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link to="/eventos">Próximos Eventos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/sobre">
                Saiba mais <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Pedra Branca</h3>
                      <p className="text-sm text-muted-foreground">
                        Eventos presenciais na região continental
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Comunidade</h3>
                      <p className="text-sm text-muted-foreground">
                        Networking e troca de conhecimento
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Eventos Regulares</h3>
                      <p className="text-sm text-muted-foreground">
                        Palestras, workshops e coffee break
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Open Source</h3>
                      <p className="text-sm text-muted-foreground">
                        Projetos colaborativos e código aberto
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
