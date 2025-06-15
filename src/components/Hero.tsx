import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Code,
  MapPin,
  Coffee,
  Mic,
  Heart,
  Globe,
} from "lucide-react";

export function Hero() {
  const features = [
    {
      icon: MapPin,
      title: "Pedra Branca",
      description: "Eventos presenciais na região continental",
      delay: "0s",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Networking e troca de conhecimento",
      delay: "0.1s",
    },
    {
      icon: Calendar,
      title: "Eventos Regulares",
      description: "Palestras, workshops e coffee break",
      delay: "0.2s",
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Projetos colaborativos e código aberto",
      delay: "0.3s",
    },
    {
      icon: Coffee,
      title: "Coffee Break",
      description: "Networking descontraído com café gratuito",
      delay: "0.4s",
    },
    {
      icon: Mic,
      title: "Palestras",
      description: "Conteúdo técnico de qualidade",
      delay: "0.5s",
    },
    {
      icon: Heart,
      title: "Inclusão",
      description: "Ambiente acolhedor e diverso",
      delay: "0.6s",
    },
    {
      icon: Globe,
      title: "Acesso Livre",
      description: "Eventos 100% gratuitos para todos",
      delay: "0.7s",
    },
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-10">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center flex-1 w-full">
              <div className="flex justify-center">
                <Link to="/" className="inline-flex items-center gap-4">
                  <img
                    src="https://statics.whitestonedev.com.br/site/wsd_logo.png"
                    alt="whiteStone_dev logo"
                    className="h-56"
                  />
                </Link>
              </div>
              <h1 className="text-4xl tracking-tight text-foreground sm:text-7xl -mt-2 text-center">
                white<span className="font-bold">Stone</span>
                <span className="italic">_dev</span>
              </h1>
              <p className=" sm:text-3xl leading-7 text-muted-foreground text-center max-w-xl">
                Open Source, Open Minds, Open Tech.
              </p>

              <div className="mt-8 w-full max-w-5xl">
                <div className="space-y-3 overflow-hidden relative">
                  {/* Gradiente para fade nas extremidades */}
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden lg:block" />
                  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden lg:block" />

                  {/* Primeira fileira - deslizando para a direita */}
                  <div className="animate-[slide-right_20s_linear_infinite] flex gap-3 whitespace-nowrap">
                    {[...row1, ...row1].map((feature, index) => (
                      <Card
                        key={`row1-${index}`}
                        className="flex-shrink-0 min-w-[16rem] max-w-[20rem] hover:shadow-lg transition-shadow duration-300"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-2">
                            <div className="flex-shrink-0 mt-1">
                              <feature.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-semibold truncate">
                                {feature.title}
                              </h3>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Segunda fileira - deslizando para a esquerda */}
                  <div className="animate-[slide-left_25s_linear_infinite] flex gap-3 whitespace-nowrap">
                    {[...row2, ...row2].map((feature, index) => (
                      <Card
                        key={`row2-${index}`}
                        className="flex-shrink-0 min-w-[16rem] max-w-[20rem] hover:shadow-lg transition-shadow duration-300"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-2">
                            <div className="flex-shrink-0 mt-1">
                              <feature.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-semibold truncate">
                                {feature.title}
                              </h3>
                              <p className="text-xs text-muted-foreground line-clamp-2">
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
      </div>
    </>
  );
}
