import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Star, Users, ExternalLink } from "lucide-react";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import { GitHubStats, getGitHubStats } from "@/lib/github";

export default function Projects() {
  const projects: Project[] = projectsData as Project[];
  const [statsMap, setStatsMap] = useState<Record<string, GitHubStats>>({});

  useEffect(() => {
    projects.forEach((project) => {
      if (!project.github) return;

      getGitHubStats(project.github)
        .then((stats) =>
          setStatsMap((prev) => ({ ...prev, [project.id]: stats }))
        )
        .catch((err) =>
          console.error(`Erro ao buscar stats do ${project.id}:`, err)
        );
    });
  }, [projects]);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Code className="mx-auto h-12 w-12 text-primary mb-4" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Projetos Open Source
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explore os projetos desenvolvidos pela comunidade whiteStone_dev
                e descubra como contribuir.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const stats = statsMap[project.id] ?? {
                  stars: 0,
                  contributors: 0,
                };
                return (
                  <Card
                    key={project.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-48 w-full object-contain"
                      />
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl flex items-center">
                          <Code className="mr-2 h-5 w-5 text-primary" />
                          {project.name}
                        </CardTitle>
                        {project.status && (
                          <Badge
                            variant={
                              project.status === "Beta"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.status}
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Star className="mr-1 h-3 w-3" />{" "}
                        {stats.stars.toLocaleString()} estrelas
                        <Users className="ml-4 mr-1 h-3 w-3" />{" "}
                        {stats.contributors.toLocaleString()} contribuidores
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <Button variant="outline" className="flex-1" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button className="flex-1" asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver Demo <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
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
                Explore nossos repositórios no GitHub, reporte bugs, sugira
                novas features ou envie seu primeiro Pull Request!
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a
                    href="https://github.com/whitestonedev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Ver no GitHub
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
