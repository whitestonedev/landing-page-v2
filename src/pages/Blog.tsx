import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { BookOpen, X } from "lucide-react";
import { useMDXPosts } from "@/hooks/useMDX";
import { BlogCard } from "@/components/BlogCard";

export default function Blog() {
  const { posts: blogPosts, loading } = useMDXPosts("blogs");
  const [searchParams] = useSearchParams();
  const tagFilter = searchParams.get("tag");

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <p className="text-muted-foreground">Carregando posts...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                Nenhum post encontrado
              </h1>
              <p className="text-muted-foreground">
                Ainda não há posts disponíveis. Volte em breve!
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Filtrar posts por tag se houver filtro
  const filteredPosts = tagFilter 
    ? blogPosts.filter(post => 
        post.matter.tags?.some(tag => 
          tag.toLowerCase() === tagFilter.toLowerCase()
        )
      )
    : blogPosts;

  // Se não há posts com a tag filtrada
  if (tagFilter && filteredPosts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                Nenhum post encontrado para a tag "{tagFilter}"
              </h1>
              <p className="text-muted-foreground mb-8">
                Não encontramos posts com essa tag. Tente outra tag ou veja todos os posts.
              </p>
              <Button asChild>
                <Link to="/blog">
                  Ver Todos os Posts
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Se há filtro por tag, mostrar apenas os posts filtrados em grade
  if (tagFilter) {
    return (
      <div className="min-h-screen bg-background">
        <main>
          {/* Header com título da tag */}
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                    #{tagFilter}
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/blog">
                    <X className="mr-2 h-4 w-4" />
                    Limpar Filtro
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Posts filtrados em grade de 3 colunas */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Fique por Dentro das Novidades
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Receba notificações sobre novos posts e eventos da comunidade
                </p>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <a
                      href="https://links.whitestonedev.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Participar da Comunidade
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

  // Layout original quando não há filtro
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <BookOpen className="mx-auto h-12 w-12 text-primary mb-4" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Blog da Comunidade
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Artigos técnicos, tutoriais, reflexões sobre tecnologia e
                novidades do mundo do desenvolvimento de software escritos pela
                nossa comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Post em Destaque
              </h2>
              <BlogCard post={featuredPost} variant="featured" />
            </div>
          </section>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Posts Recentes
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Fique por Dentro das Novidades
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Receba notificações sobre novos posts e eventos da comunidade
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a
                    href="https://links.whitestonedev.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Participar da Comunidade
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
