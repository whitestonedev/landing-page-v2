
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  ArrowRight
} from "lucide-react";

const supportTypes = [
  {
    icon: Coffee,
    title: "Patrocínio Financeiro",
    description: "Apoie com recursos para espaço, estrutura e coffee break",
    benefits: [
      "Logo em destaque no site",
      "Reconhecimento nos eventos",
      "Menção nas redes sociais",
      "Networking com a comunidade"
    ],
    color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
  },
  {
    icon: Star,
    title: "Patrocínio Plus",
    description: "Apoio premium com bebidas, brindes e palestrantes renomados",
    benefits: [
      "Todos os benefícios do patrocínio financeiro",
      "Logo premium em materiais",
      "Espaço para apresentação da empresa",
      "Co-criação de eventos temáticos",
      "Acesso VIP para representantes"
    ],
    color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800"
  },
  {
    icon: Megaphone,
    title: "Divulgação",
    description: "Ajude compartilhando nossos eventos e conteúdos",
    benefits: [
      "Ampliação do alcance",
      "Fortalecimento da comunidade",
      "Reconhecimento como apoiador",
      "Participação em ações especiais"
    ],
    color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
  },
  {
    icon: Handshake,
    title: "Eventos Temáticos",
    description: "Co-criação de eventos personalizados com sua empresa",
    benefits: [
      "Evento sob medida",
      "Branding da empresa",
      "Acesso direto a talentos",
      "Fortalecimento da marca empregadora"
    ],
    color: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800"
  }
];

const sponsors = [
  {
    name: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    tier: "Premium",
    website: "https://techcorp.com"
  },
  {
    name: "DevTools Inc",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop",
    tier: "Gold",
    website: "https://devtools.com"
  },
  {
    name: "Cloud Innovations",
    logo: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&h=100&fit=crop",
    tier: "Silver",
    website: "https://cloudinnovations.com"
  },
  {
    name: "StartupHub",
    logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=100&fit=crop",
    tier: "Bronze",
    website: "https://startuphub.com"
  }
];

const impactStats = [
  { number: "500+", label: "Participantes em eventos" },
  { number: "25+", label: "Eventos realizados" },
  { number: "50+", label: "Palestrantes voluntários" },
  { number: "10+", label: "Empresas apoiadoras" }
];

export default function ComoAjudar() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Heart className="mx-auto h-12 w-12 text-primary mb-4" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Como Apoiar a Comunidade
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Sua contribuição ajuda a manter nossa comunidade ativa e acessível para todos. 
                Descubra como fazer parte desta iniciativa que está transformando o ecossistema tech em Florianópolis.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Nosso Impacto na Comunidade
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Types */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Formas de Apoio
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Escolha a modalidade que melhor se adequa à sua empresa ou interesse pessoal
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {supportTypes.map((type, index) => (
                <Card key={index} className={`${type.color} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <type.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link to="/contato">
                  <Handshake className="mr-2 h-5 w-5" />
                  Quero Apoiar
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits for Sponsors */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <Trophy className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Benefícios para Patrocinadores
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Conecte sua marca a uma comunidade engajada e apaixonada por tecnologia
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <Building className="mx-auto h-8 w-8 text-primary mb-2" />
                  <CardTitle>Visibilidade da Marca</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Logotipo em destaque no site, redes sociais, materiais de eventos e reconhecimento público
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Users className="mx-auto h-8 w-8 text-primary mb-2" />
                  <CardTitle>Networking Qualificado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acesso direto a uma comunidade tech engajada e profissionais qualificados da região
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Heart className="mx-auto h-8 w-8 text-primary mb-2" />
                  <CardTitle>Propósito e Impacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Associe sua marca a propósito, inclusão, inovação e desenvolvimento do ecossistema tech
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Empresas que Já Apoiam
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Organizações que acreditam no poder da comunidade para transformar o cenário tech
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {sponsors.map((sponsor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="h-16 w-full object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="font-semibold text-foreground mb-1">{sponsor.name}</h3>
                    <Badge variant="secondary" className="mb-3">{sponsor.tier}</Badge>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                        Visitar Site <ArrowRight className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
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
                Vamos Construir Juntos
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Seja parte desta iniciativa que está democratizando o acesso ao conhecimento tech em Florianópolis
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Button size="lg" asChild>
                  <Link to="/contato">
                    <Heart className="mr-2 h-5 w-5" />
                    Começar Apoio
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/sobre">Conhecer Mais</Link>
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
