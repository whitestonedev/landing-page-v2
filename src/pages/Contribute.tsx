import { useRef, useState, useEffect, useCallback } from "react";
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
import {
  Heart,
  Coffee,
  Megaphone,
  Handshake,
  Star,
  Users,
  Trophy,
  Building,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Globe,
  Lightbulb,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import sponsorsData from "@/data/sponsors.json";
import { cn } from "@/lib/utils";

const supportTypes = [
  {
    icon: Coffee,
    title: "Patrocínio Financeiro (Essencial)",
    description: "Apoie com recursos para espaço e coffee break nos eventos",
    details: [
      "Espaço para eventos adequado",
      "Coffee break de qualidade",
      "Infraestrutura necessária",
      "Ambiente propício para networking",
    ],
    color:
      "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
  },
  {
    icon: Star,
    title: "Patrocínio Plus (Opcional, Mas Incrível!)",
    description: "Apoio premium com bebidas, palestrantes renomados e brindes",
    details: [
      "Chop/bebidas para happy hour",
      "Palestrantes de destaque",
      "Itens para sorteio",
      "Materiais promocionais personalizados",
    ],
    color:
      "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
  },
  {
    icon: Megaphone,
    title: "Apoio em Divulgação",
    description: "Ajude compartilhando nossos eventos em suas redes",
    details: [
      "Divulgação em redes sociais",
      "Compartilhamento em canais internos",
      "Indicação para network pessoal",
      "Fortalecimento da comunidade",
    ],
    color:
      "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
  },
  {
    icon: Handshake,
    title: "Eventos Temáticos Exclusivos",
    description: "Eventos personalizados sob medida para sua empresa",
    details: [
      "Tema focado na sua tecnologia",
      "Palestras customizadas",
      "Workshops específicos",
      "Branding exclusivo da empresa",
    ],
    color:
      "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Divulgação da Marca",
    description:
      "Sua marca será amplamente divulgada em todos os materiais de eventos, online e offline",
  },
  {
    icon: Trophy,
    title: "Logotipo em Destaque",
    description:
      "Logo estampado em materiais, websites e redes sociais da whiteStone_dev",
  },
  {
    icon: Heart,
    title: "Agradecimento Público",
    description:
      "Reconhecimento especial durante abertura e encerramento dos eventos",
  },
  {
    icon: Users,
    title: "Networking Privilegiado",
    description:
      "Oportunidade de interagir diretamente com a comunidade tech engajada",
  },
];

const whySupport = [
  {
    icon: Zap,
    title: "Inovação e Tecnologia",
    description: "Apoie uma comunidade na vanguarda da tecnologia",
  },
  {
    icon: Globe,
    title: "Open Source e Colaboração",
    description:
      "Associe-se a valores de transparência e desenvolvimento aberto",
  },
  {
    icon: Building,
    title: "Desenvolvimento da Comunidade Tech",
    description: "Contribua para a formação de profissionais capacitados",
  },
  {
    icon: Lightbulb,
    title: "Visibilidade e Networking",
    description: "Conecte-se com talentos e profissionais qualificados",
  },
];

export default function Contribute() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const emblaRef = useRef<EmblaCarouselType | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaRef.current) return;
    setSelectedIndex(emblaRef.current.selectedScrollSnap());
  }, []);

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false, // nunca para por interação
      stopOnMouseEnter: false, // nunca para ao passar o mouse
    })
  );

  const handleDotClick = (index: number) => {
    emblaRef.current?.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaRef.current) return;
    const embla = emblaRef.current;
    setScrollSnaps(embla.scrollSnapList());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [onSelect]);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Heart className="mx-auto h-16 w-16 text-primary mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Apoie a whiteStone_dev
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Seja um Patrocinador e Colaborador
              </p>
              <div className="mt-8 max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground">
                  A <strong className="text-primary">whiteStone_dev</strong> é
                  uma comunidade open source que respira tecnologia e inovação.
                  Nossos eventos são totalmente gratuitos e abertos a todos que
                  desejam aprender, compartilhar e se conectar. Para
                  continuarmos a impulsionar a comunidade tech,{" "}
                  <strong>precisamos do seu apoio!</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Sponsors - Carousel Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <Trophy className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                Empresas que já confiaram e apoiaram a whiteStone_dev
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Organizações que acreditam no poder da comunidade para
                transformar o cenário tech
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <Carousel
                setApi={(api) => {
                  emblaRef.current = api;
                  setSelectedIndex(api.selectedScrollSnap());
                  setScrollSnaps(api.scrollSnapList());

                  api.on("select", () => {
                    setSelectedIndex(api.selectedScrollSnap());
                  });
                }}
                plugins={[plugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: false,
                  containScroll: "trimSnaps",
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {sponsorsData.sponsors.map((sponsor, index) => (
                    <CarouselItem
                      key={`${sponsor.name}-${index}`}
                      className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20 h-full">
                        <CardHeader className="text-center pb-4">
                          <div className="h-20 flex items-center justify-center mb-4">
                            <img
                              src={sponsor.thumb}
                              alt={sponsor.name}
                              className="max-h-16 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <CardTitle className="text-xl">
                            {sponsor.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                          <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">
                            {sponsor.description}
                          </p>
                          <div className="text-center">
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={sponsor.sponsor_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs"
                              >
                                Conhecer Empresa
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
              <div className="flex justify-center mt-6">
                <div className="flex space-x-2">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300",
                        index === selectedIndex
                          ? "bg-foreground"
                          : "bg-muted-foreground/30"
                      )}
                      aria-label={`Ir para o slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Support */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Por Que Patrocinar a whiteStone_dev?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ao apoiar a whiteStone_dev, sua empresa estará investindo
                diretamente no crescimento da comunidade tecnológica brasileira
                e se conectando com um público altamente qualificado
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {whySupport.map((item, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <item.icon className="mx-auto h-10 w-10 text-primary mb-3" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Types */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Como Você Pode Colaborar?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Existem diversas formas de apoiar a whiteStone_dev
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {supportTypes.map((type, index) => (
                <Card
                  key={index}
                  className={`${type.color} hover:shadow-xl transition-all duration-300 border-2`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <type.icon className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">
                            {type.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {type.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {type.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits for Sponsors */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <Star className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Benefícios para Patrocinadores
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Em reconhecimento ao seu apoio, sua empresa terá
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <benefit.icon className="mx-auto h-10 w-10 text-primary mb-3" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
              Junte-se a Nós
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Seja um patrocinador ou colaborador da{" "}
              <strong className="text-primary">whiteStone_dev</strong> e faça
              parte da construção de uma comunidade tech cada vez mais forte e
              vibrante!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <a
                  href="https://links.whitestonedev.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="mr-3 h-6 w-6" />
                  Entre em Contato
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-6"
              >
                <Link to="/sobre">
                  <ArrowRight className="mr-3 h-6 w-6" />
                  Conhecer Mais
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
