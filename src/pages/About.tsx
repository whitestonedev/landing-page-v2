
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
  MapPin, 
  Users, 
  Target, 
  Heart, 
  Coffee, 
  Calendar,
  Video,
  Globe,
  Trophy,
  Building,
  ArrowRight,
  Zap,
  CheckCircle,
  Lightbulb
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              O que é a white<span className="text-primary">Stone</span>
              <span className="italic">_dev</span>? 🤔
            </h1>
            <div className="mt-8 text-xl text-muted-foreground space-y-4">
              <p className="font-semibold text-2xl text-foreground">
                whiteStone_dev: Uma Comunidade Open Source 🚀 
              </p>
              <p className="text-lg">
                Impulsionando a Tecnologia e Conectando Desenvolvedores 🤝
              </p>
            </div>
          </div>

          {/* Origin Story */}
          <section className="mt-20">
            <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl">
                  <Lightbulb className="mr-3 h-8 w-8 text-primary" />
                  Nossa História
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    A <strong className="text-foreground">whiteStone_dev</strong> nasceu de uma{" "}
                    <strong className="text-primary">dor real da comunidade de desenvolvedores</strong>{" "}
                    da região continental da Grande Floripa: a dificuldade de acesso a eventos de tecnologia.
                  </p>
                  
                  <p>
                    Localizados próximos à capital, Florianópolis, sofríamos porque{" "}
                    <strong className="text-foreground">quase todos os eventos tech se concentravam na ilha</strong> 🏝️,
                    tornando a participação inviável para muitos.
                  </p>

                  <div className="bg-muted/50 rounded-lg p-6">
                    <p className="mb-4">
                      Para <strong className="text-foreground">desenvolvedores, estudantes e entusiastas de tecnologia</strong>{" "}
                      que enfrentavam:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Longos deslocamentos após o expediente</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Orçamento limitado para transporte 💸</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Custos de alimentação fora de casa</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">Tempo de viagem excessivo</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-6">
                    <p className="text-lg font-semibold text-foreground mb-2">
                      Foi assim que a whiteStone_dev surgiu:
                    </p>
                    <p>
                      Para <strong className="text-primary">criar eventos de tecnologia acessíveis a todos</strong>,
                      especialmente àqueles fora do centro da ilha. Nosso objetivo é{" "}
                      <strong className="text-foreground">conectar mentes criativas e apaixonadas por tecnologia</strong>{" "}
                      da região, <strong className="text-primary">quebrando barreiras geográficas 🗺️ e financeiras 💰</strong>{" "}
                      para o acesso ao conhecimento e ao networking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Quem Somos */}
          <section className="mt-16">
            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 h-6 w-6 text-teal-500" />
                  Quem Somos 👥
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg text-muted-foreground space-y-6">
                  <p>
                    Somos um grupo de desenvolvedores que se reúne periodicamente,{" "}
                    <strong className="text-foreground">regularmente na Pedra Branca 📍 como local de encontro</strong>,
                    para facilitar o acesso àqueles que residem fora da ilha.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Explorar as Últimas Tendências Tecnológicas
                          </h4>
                          <p className="text-sm">
                            Mergulhamos em temas relevantes como desenvolvimento web e mobile, 
                            inteligência artificial, cloud computing e muito mais.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Compartilhar Conhecimento
                          </h4>
                          <p className="text-sm">
                            Palestras e workshops com experts, transmitindo conhecimento aplicável,{" "}
                            <strong>sempre com entrada franca e coffee break gratuito ☕</strong>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Promover Networking Inclusivo
                          </h4>
                          <p className="text-sm">
                            Ambiente ideal para expandir sua rede de contatos,{" "}
                            <strong>independentemente de sua condição financeira ou localização</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Trocar Projetos e Experiências
                          </h4>
                          <p className="text-sm">
                            Valorizamos a colaboração e o aprendizado mútuo,{" "}
                            <strong>construindo um ambiente de apoio e crescimento coletivo</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Nossos Eventos */}
          <section className="mt-16">
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="mr-3 h-6 w-6 text-purple-500" />
                  Nossos Eventos 🎉
                </CardTitle>
                <CardDescription className="text-base">
                  O coração da whiteStone_dev e nosso compromisso com acessibilidade, 
                  compartilhamento de conhecimento e networking inclusivo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Target className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Eventos Temáticos</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Temporadas focadas em temas específicos para aprofundar conhecimento
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Palestras Práticas</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Conteúdo de alta qualidade com foco em aplicação prática
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Networking Tech</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ambiente propício para conhecer profissionais e expandir contatos
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Coffee className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Coffee Break ☕</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Delicioso coffee break gratuito para networking energizante
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Heart className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Eventos Gratuitos 🆓</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Totalmente gratuitos e abertos, eliminando barreiras financeiras
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Video className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Conteúdo Acessível 📹</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Gravações, transmissões ao vivo e materiais publicados no blog
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Gratuito</Badge>
                  <Badge variant="secondary">Inclusivo</Badge>
                  <Badge variant="secondary">Acessível</Badge>
                  <Badge variant="secondary">Transmissão ao Vivo</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Por Que Apoiar */}
          <section className="mt-16">
            <Card className="border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 dark:from-orange-950/20 to-background">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Heart className="mr-3 h-6 w-6 text-orange-500" />
                  Por Que Apoiar a whiteStone_dev? ❤️
                </CardTitle>
                <CardDescription className="text-base">
                  Uma iniciativa sem fins lucrativos mantida pela comunidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Para continuarmos a <strong className="text-foreground">quebrar barreiras e oferecer eventos gratuitos, 
                    acessíveis e de alta qualidade</strong>, <strong className="text-primary">precisamos do seu apoio!</strong> 🙏
                  </p>

                  <div className="bg-primary/10 rounded-lg p-6">
                    <p className="font-semibold text-foreground mb-4">
                      Ao apoiar a whiteStone_dev, você estará investindo diretamente na inclusão 
                      e no crescimento da comunidade tecnológica brasileira 🇧🇷:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-foreground text-sm">Democratizar o Acesso</h5>
                          <p className="text-sm text-muted-foreground">
                            Eventos gratuitos independente de localização ou condição financeira
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-foreground text-sm">Fortalecer o Ecossistema</h5>
                          <p className="text-sm text-muted-foreground">
                            Desenvolvimento de profissionais capacitados e comunidade vibrante
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-foreground text-sm">Promover Inovação</h5>
                          <p className="text-sm text-muted-foreground">
                            Compartilhamento de conhecimento e cultura open source
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Trophy className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-foreground text-sm">Conectar com Talentos</h5>
                          <p className="text-sm text-muted-foreground">
                            Networking com público diverso e engajado da área tech
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Benefícios para Patrocinadores */}
          <section className="mt-16">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Trophy className="mr-3 h-6 w-6 text-green-500" />
                  Benefícios para Patrocinadores
                </CardTitle>
                <CardDescription className="text-base">
                  Em reconhecimento ao seu apoio fundamental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Target className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Divulgação da Marca com Propósito
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Sua marca divulgada em todos os materiais, associada a valores 
                          de inclusão e desenvolvimento da comunidade
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Building className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Logotipo em Destaque
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Logo destacado em materiais, website e redes sociais, 
                          reforçando seu compromisso com a democratização tech
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Heart className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Agradecimento Público
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Reconhecimento especial durante abertura e encerramento, 
                          destacando seu apoio crucial para a comunidade
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Networking Privilegiado
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Interação direta com comunidade engajada, contribuindo 
                          para um ecossistema tech mais justo e inclusivo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="mt-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-2xl p-12">
            <div className="text-center">
              <Heart className="mx-auto h-16 w-16 text-primary mb-6" />
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                Junte-se à whiteStone_dev 👋
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-muted-foreground">
                  Seja você desenvolvedor(a), empresa ou entusiasta da tecnologia que acredita em{" "}
                  <strong className="text-primary">acessibilidade, inclusão e no poder da comunidade</strong>,{" "}
                  <strong className="text-foreground">junte-se à whiteStone_dev e vamos construir juntos 
                  um futuro da tecnologia mais forte, diverso e para todos!</strong> 🚀
                </p>
                
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">Entre em contato conosco</strong> para saber mais e como 
                  podemos trabalhar juntos para impulsionar a tecnologia e o conhecimento,{" "}
                  <strong className="text-primary">tornando o ecossistema tech mais acessível e inclusivo para todos!</strong> ✨
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/contribuir">
                    <Heart className="mr-3 h-6 w-6" />
                    Como Apoiar
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <a
                    href="https://links.whitestonedev.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-3 h-6 w-6" />
                    Onde nos Encontrar 📍
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
