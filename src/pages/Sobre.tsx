import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Target, Heart } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl  tracking-tight text-foreground sm:text-5xl">
              Sobre a white<span className="font-bold">Stone</span>
              <span className="italic">_dev</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Conheça nossa história, missão e valores que guiam nossa
              comunidade tech
            </p>
          </div>

          {/* Quem Somos */}
          <section className="mt-16">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  Quem Somos
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  A <strong className="text-foreground">whiteStone_dev</strong>{" "}
                  nasceu para quebrar a barreira de acesso aos eventos de
                  tecnologia na região continental da Grande Florianópolis.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Localização Estratégica
                        </h4>
                        <p className="text-sm">
                          Sediada na Pedra Branca 📍, facilitando o acesso para
                          a comunidade continental
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Inclusão e Networking
                        </h4>
                        <p className="text-sm">
                          Eventos focados em conectar pessoas e promover a troca
                          de conhecimento
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="h-5 w-5 text-primary mt-1 flex-shrink-0">
                        ☕
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Coffee Break Gratuito
                        </h4>
                        <p className="text-sm">
                          Momentos de networking regados a café e conversas
                          inspiradoras
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="h-5 w-5 text-primary mt-1 flex-shrink-0">
                        🎥
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Conteúdo Acessível
                        </h4>
                        <p className="text-sm">
                          Palestras gravadas e disponibilizadas para toda a
                          comunidade
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Badge
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      Eventos Gratuitos
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Badge
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      Presenciais
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Badge
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      Open Source
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Badge
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      Acessibilidade
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Nossa Missão */}
          <section className="mt-12">
            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Target className="mr-3 h-6 w-6 text-teal-500" />
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Conectar Pessoas
                    </h4>
                    <p className="text-muted-foreground">
                      Conectar pessoas apaixonadas por tecnologia de forma
                      acessível e inclusiva, promovendo um ambiente acolhedor
                      para todos os níveis de experiência.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Fomentar Conhecimento
                    </h4>
                    <p className="text-muted-foreground">
                      Fomentar o conhecimento técnico, o open source, e a
                      diversidade no ecossistema tech brasileiro através de
                      eventos educativos e colaborativos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Por que Acreditamos */}
          <section className="mt-12">
            <Card className="border-l-4 border-l-coral-500">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Heart className="mr-3 h-6 w-6 text-coral-500" />
                  Por que Acreditamos no Que Fazemos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Democratizar o Acesso
                    </h4>
                    <p className="text-muted-foreground">
                      Os eventos visam democratizar o acesso ao conhecimento
                      tecnológico, removendo barreiras geográficas e financeiras
                      que muitas vezes impedem a participação em eventos na
                      região central.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Impulsionar Talentos
                    </h4>
                    <p className="text-muted-foreground">
                      Acreditamos no poder da comunidade para impulsionar
                      talentos locais, proporcionando oportunidades de
                      aprendizado, crescimento profissional e desenvolvimento de
                      soft skills.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Ponte para Oportunidades
                    </h4>
                    <p className="text-muted-foreground">
                      Atuamos como ponte entre desenvolvedores talentosos e
                      empresas inovadoras, criando um ecossistema onde talentos
                      e oportunidades se encontram naturalmente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Nossos Valores */}
          <section className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Nossos Valores
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Inclusão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eventos acessíveis a todos, independente do nível de
                    experiência, background ou condição socioeconômica.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-teal-500 text-xl">🤝</div>
                  </div>
                  <CardTitle>Colaboração</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fomentamos o espírito de colaboração através de projetos
                    open source e iniciativas comunitárias.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-coral-500/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-coral-500 text-xl">💡</div>
                  </div>
                  <CardTitle>Inovação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Promovemos o pensamento inovador e a adoção de novas
                    tecnologias através de conteúdo de qualidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
