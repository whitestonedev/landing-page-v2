
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Github, ExternalLink, Users, Star } from "lucide-react";

// Mock data for projects - in a real implementation, this would scan the projects folder
const projects = [
  {
    id: "event-manager",
    name: "Event Manager",
    shortDescription: "Sistema de gestão de eventos da comunidade, desenvolvido colaborativamente.",
    description: "Uma plataforma completa para gerenciar eventos da comunidade whiteStone_dev. Inclui cadastro de eventos, inscrições, check-in automático via QR Code, dashboard de analytics e integração com redes sociais.",
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    status: "Em desenvolvimento",
    stars: 42,
    contributors: 8,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    github: "https://github.com/whitestonedev/event-manager",
    demo: "https://events.whitestonedev.com.br"
  },
  {
    id: "tech-jobs-sc",
    name: "Tech Jobs SC",
    shortDescription: "Plataforma para divulgação de vagas de tecnologia em Santa Catarina.",
    description: "Marketplace de vagas focado no ecossistema tech de Santa Catarina. Conecta empresas locais com talentos, oferece filtros avançados por stack tecnológica e localização, e promove transparência salarial.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    status: "Beta",
    stars: 67,
    contributors: 12,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    github: "https://github.com/whitestonedev/tech-jobs-sc",
    demo: "https://jobs.whitestonedev.com.br"
  },
  {
    id: "community-hub",
    name: "Community Hub",
    shortDescription: "Portal da comunidade com integração de Discord, GitHub e redes sociais.",
    description: "Hub central da comunidade whiteStone_dev integrando Discord para chat em tempo real, GitHub para projetos open source, calendário de eventos, sistema de badges para contribuidores e feed de atividades.",
    tech: ["Vue.js", "Firebase", "Discord API", "GitHub API"],
    status: "Planejamento",
    stars: 23,
    contributors: 5,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    github: "https://github.com/whitestonedev/community-hub",
    demo: null
  },
  {
    id: "open-source-scanner",
    name: "Open Source Scanner",
    shortDescription: "Ferramenta para descobrir projetos open source brasileiros e oportunidades de contribuição.",
    description: "Scanner automatizado que identifica projetos open source brasileiros, analisa issues marcadas como 'good first issue', mapeia tecnologias utilizadas e sugere oportunidades de contribuição baseadas no perfil do desenvolvedor.",
    tech: ["Python", "FastAPI", "MongoDB", "Docker"],
    status: "Em desenvolvimento",
    stars: 89,
    contributors: 15,
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
    github: "https://github.com/whitestonedev/oss-scanner",
    demo: "https://scanner.whitestonedev.com.br"
  }
];

export default function Projetos() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Code className="mx-auto h-12 w-12 text-primary mb-4" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Projetos Open Source
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Iniciativas colaborativas desenvolvidas pela nossa comunidade. Participe, contribua e ajude a construir o futuro da tecnologia em Santa Catarina.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="h-48 w-full object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center">
                        <Code className="mr-2 h-5 w-5 text-primary" />
                        {project.name}
                      </CardTitle>
                      <Badge variant={project.status === "Beta" ? "default" : project.status === "Em desenvolvimento" ? "secondary" : "outline"}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3" />
                        {project.stars}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-3 w-3" />
                        {project.contributors} contribuidores
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-3 w-3" />
                          GitHub
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" asChild className="flex-1">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Quer Contribuir?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Todos os nossos projetos são open source e estão abertos para contribuições. 
                Desde documentação até novas funcionalidades, sua ajuda é sempre bem-vinda!
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="https://github.com/whitestonedev" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    Ver no GitHub
                  </a>
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
