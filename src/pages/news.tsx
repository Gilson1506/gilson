import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { News } from "@shared/schema";

export default function News() {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ['/api/news'],
  });

  const { data: featuredNews } = useQuery<News[]>({
    queryKey: ['/api/news?featured=true'],
  });

  const formatDate = (date: Date | null | undefined) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'tendências':
        return 'bg-primary/10 text-primary';
      case 'inovação':
        return 'bg-accent/10 text-accent';
      case 'sustentabilidade':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'networking':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const featuredArticle = featuredNews?.[0];
  const regularNews = news?.filter(article => !article.featured);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-news-title">
            Notícias e Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Fique por dentro das últimas tendências e inovações do setor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <Card className="rounded-xl shadow-lg border overflow-hidden">
                <Skeleton className="w-full h-64" />
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </Card>
            ) : featuredArticle ? (
              <Card className="rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-featured-${featuredArticle.id}`}>
                <img 
                  src={featuredArticle.imageUrl} 
                  alt={featuredArticle.title} 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Badge className={`${getCategoryColor(featuredArticle.category)} mr-3`} data-testid={`badge-featured-category`}>
                      {featuredArticle.category}
                    </Badge>
                    <span className="text-muted-foreground text-sm" data-testid="text-featured-date">
                      {new Date(featuredArticle.publishDate).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4" data-testid="text-featured-title">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6" data-testid="text-featured-excerpt">
                    {featuredArticle.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary hover:text-accent font-medium" data-testid="button-read-featured">
                    Ler artigo completo →
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-xl shadow-lg border p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Nenhum artigo em destaque</h3>
                <p className="text-muted-foreground">Confira os artigos mais recentes abaixo.</p>
              </Card>
            )}
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="rounded-xl shadow-lg border p-6" data-testid={`skeleton-news-${index}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </Card>
              ))
            ) : regularNews && regularNews.length > 0 ? (
              regularNews.slice(0, 3).map((article) => (
                <Card key={article.id} className="rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow" data-testid={`card-news-${article.id}`}>
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <Badge className={`${getCategoryColor(article.category)} text-xs mr-2`} data-testid={`badge-category-${article.id}`}>
                        {article.category}
                      </Badge>
                      <span className="text-muted-foreground text-sm" data-testid={`text-date-${article.id}`}>
                        {new Date(article.publishDate).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-2" data-testid={`text-title-${article.id}`}>
                      {article.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3" data-testid={`text-excerpt-${article.id}`}>
                      {article.excerpt}
                    </p>
                    <Button variant="link" className="p-0 text-primary hover:text-accent text-sm font-medium" data-testid={`button-read-${article.id}`}>
                      Ler mais →
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="rounded-xl shadow-lg border p-6 text-center">
                <h4 className="font-bold mb-2">Nenhum artigo disponível</h4>
                <p className="text-muted-foreground text-sm">Novos artigos serão publicados em breve.</p>
              </Card>
            )}
          </div>
        </div>

        {/* All Articles Grid */}
        {regularNews && regularNews.length > 3 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Mais Artigos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.slice(3).map((article) => (
                <Card key={article.id} className="rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-more-news-${article.id}`}>
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(article.category)} data-testid={`badge-more-category-${article.id}`}>
                        {article.category}
                      </Badge>
                      <span className="text-muted-foreground text-sm" data-testid={`text-more-date-${article.id}`}>
                        {new Date(article.publishDate).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" data-testid={`text-more-title-${article.id}`}>
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4" data-testid={`text-more-excerpt-${article.id}`}>
                      {article.excerpt}
                    </p>
                    <Button variant="link" className="p-0 text-primary hover:text-accent font-medium" data-testid={`button-read-more-${article.id}`}>
                      Ler mais →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-medium"
            data-testid="button-view-all-news"
          >
            Ver Todas as Notícias
          </Button>
        </div>
      </div>
    </section>
  );
}
