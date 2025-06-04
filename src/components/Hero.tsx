
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Users, Code, MapPin, Coffee, Mic, Heart, Globe } from "lucide-react";

export function Hero() {
  const features = [
    {
      icon: MapPin,
      title: "Pedra Branca",
      description: "Eventos presenciais na região continental",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Networking e troca de conhecimento",
      delay: "0.1s"
    },
    {
      icon: Calendar,
      title: "Eventos Regulares",
      description: "Palestras, workshops e coffee break",
      delay: "0.2s"
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Projetos colaborativos e código aberto",
      delay: "0.3s"
    },
    {
      icon: Coffee,
      title: "Coffee Break",
      description: "Networking descontraído com café gratuito",
      delay: "0.4s"
    },
    {
      icon: Mic,
      title: "Palestras",
      description: "Conteúdo técnico de qualidade",
      delay: "0.5s"
    },
    {
      icon: Heart,
      title: "Inclusão",
      description: "Ambiente acolhedor e diverso",
      delay: "0.6s"
    },
    {
      icon: Globe,
      title: "Acesso Livre",
      description: "Eventos 100% gratuitos para todos",
      delay: "0.7s"
    }
  ];

  // Dividir em duas fileiras para o carrossel
  const row1 = features.slice(0, 4);
  const row2 = features.slice(4, 8);

  return (
    <>
      <style>{`
        @keyframes slide-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
        
        @keyframes slide-left {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      
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
              <div className="space-y-4 overflow-hidden">
                {/* Primeira fileira - deslizando para a direita */}
                <div className="animate-[slide-right_20s_linear_infinite] flex gap-4 whitespace-nowrap">
                  {[...row1, ...row1].map((feature, index) => (
                    <Card key={`row1-${index}`} className="flex-shrink-0 w-80 animate-fade-in hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Segunda fileira - deslizando para a esquerda */}
                <div className="animate-[slide-left_25s_linear_infinite] flex gap-4 whitespace-nowrap">
                  {[...row2, ...row2].map((feature, index) => (
                    <Card key={`row2-${index}`} className="flex-shrink-0 w-80 animate-fade-in hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
