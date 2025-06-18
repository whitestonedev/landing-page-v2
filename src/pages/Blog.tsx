import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { BookOpen, X } from "lucide-react";
import { useMDXPosts } from "@/hooks/useMDX";
import { BlogCard } from "@/components/BlogCard";

export default function Blog() {
  const { posts: blogPosts, loading } = useMDXPosts("blogs");
  const [searchParams] = useSearchParams();
  const tagFilters = searchParams.getAll("tag");
  const authorFilter = searchParams.get("author");

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

  // Filtrar posts por tag e/ou autor
  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = tagFilters.length > 0
      ? tagFilters.some(tag => post.matter.tags?.some(t => t.toLowerCase() === tag.toLowerCase()))
      : true;
    const matchesAuthor = authorFilter
      ? post.authorData?.some(author => author.name.toLowerCase() === authorFilter.toLowerCase())
      : true;
    return matchesTag && matchesAuthor;
  });

  // Se não há posts com o filtro aplicado
  if ((tagFilters.length > 0 || authorFilter) && filteredPosts.length === 0) {
    const filterType = tagFilters.length > 0 && authorFilter ? 'autor e tags' : tagFilters.length > 0 ? 'tags' : 'autor';
    const filterValue = tagFilters.length > 0 && authorFilter
      ? `${authorFilter} + ${tagFilters.join(', ')}`
      : tagFilters.length > 0
        ? tagFilters.join(', ')
        : authorFilter;
    
    return (
      <div className="min-h-screen bg-background">
        <main>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                Nenhum post encontrado para {filterType} "{filterValue}"
              </h1>
              <p className="text-muted-foreground mb-8">
                Não encontramos posts com esse(s) {filterType}. Tente outro filtro ou veja todos os posts.
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

  // Header dinâmico para filtros
  function renderDynamicHeader() {
    // Encontrar informações do autor se houver filtro
    const authorInfo = authorFilter
      ? blogPosts.find(post =>
          post.authorData?.some(author =>
            author.name.toLowerCase() === authorFilter.toLowerCase()
          )
        )?.authorData?.find(author =>
          author.name.toLowerCase() === authorFilter.toLowerCase()
        )
      : null;

    return (
      <section className="py-10 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center justify-between gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full">
              {authorInfo?.image && (
                <img
                  src={authorInfo.image}
                  alt={authorInfo.name}
                  className="h-40 w-40 sm:h-20 sm:w-20 rounded-full object-cover mb-2 sm:mb-0"
                />
              )}
              <div className="text-center sm:text-left w-full">
                {/* Nome do autor, se houver */}
                {authorFilter && (
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                    {authorInfo?.name || authorFilter}
                  </h1>
                )}
                {/* Cargo/empresa do autor, se houver */}
                {authorFilter && authorInfo?.position && (
                  <p className="mt-1 sm:mt-2 text-base sm:text-lg text-muted-foreground">
                    {authorInfo.position}
                    {authorInfo.company && (
                      <>
                        <br className="sm:hidden" />
                        {` @ ${authorInfo.company}`}
                      </>
                    )}
                  </p>
                )}
                {/* Todas as tags, se houver */}
                {tagFilters.length > 0 && (
                  <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                    {tagFilters.map(tag => (
                      <span key={tag} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-base sm:text-lg font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                {/* Contador de posts */}
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
                  {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <Button variant="outline" asChild className="mt-4 sm:mt-0 w-full sm:w-auto">
              <Link to="/blog">
                <X className="mr-2 h-4 w-4" />
                Limpar Filtro
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Se há filtro por tag ou autor, mostrar header dinâmico
  if (tagFilters.length > 0 || authorFilter) {
    return (
      <div className="min-h-screen bg-background">
        <main>
          {renderDynamicHeader()}

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
