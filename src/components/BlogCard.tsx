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
import { User, ArrowRight, Clock } from "lucide-react";
import { formatDateAndReadingTime } from "@/utils/dateTime";

interface BlogCardProps {
  post: {
    slug: string;
    matter: {
      title: string;
      short_description: string;
      date: string;
      thumb?: string;
      tags?: string[];
    };
    content: string;
    authorData?: Array<{
      name: string;
    }>;
  };
  variant?: 'default' | 'featured';
  showTags?: boolean;
  maxTags?: number;
}

export function BlogCard({ post, variant = 'default', showTags = true, maxTags = 2 }: BlogCardProps) {
  const isFeatured = variant === 'featured';
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {isFeatured ? (
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            {post.matter.thumb && (
              <img
                src={post.matter.thumb}
                alt={post.matter.title}
                className="h-48 w-full object-cover lg:h-full"
              />
            )}
          </div>
          <div className="lg:w-1/2">
            <CardHeader className="p-4 lg:p-6">
              
              <CardTitle className="text-xl lg:text-2xl mb-2 line-clamp-2">
                {post.matter.title}
              </CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <User className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                  <Link 
                    to={`/blog?author=${encodeURIComponent(post.authorData?.[0]?.name || '')}`}
                    className="text-xs lg:text-sm hover:text-primary transition-colors cursor-pointer"
                  >
                    {post.authorData?.map(a => a.name).join(' e ')}
                  </Link>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                  <span className="text-xs lg:text-sm">{formatDateAndReadingTime(post.matter.date, post.content)}</span>
                </div>
              </div>
              <CardDescription className="text-sm lg:text-base line-clamp-3">
                {post.matter.short_description}
              </CardDescription>
              
            </CardHeader>
            <CardContent className="p-4 lg:p-6 pt-0">
              {showTags && (
                <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-4">
                  {post.matter.tags?.map((tag) => (
                    <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-colors text-xs lg:text-sm px-2 py-1">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
              <Button asChild className="w-full sm:w-auto">
                <Link to={`/blog/${post.slug}`}>
                  Ler Artigo <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </div>
      ) : (
        <>
          {post.matter.thumb && (
            <img
              src={post.matter.thumb}
              alt={post.matter.title}
              className="h-40 sm:h-48 w-full object-cover"
            />
          )}
          <CardHeader className="p-4">
            
            <CardTitle className="text-base lg:text-lg line-clamp-2 mb-2">
              {post.matter.title}
            </CardTitle>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-2">
              <div className="flex items-center">
                <User className="mr-1 h-3 w-3" />
                <Link 
                  to={`/blog?author=${encodeURIComponent(post.authorData?.[0]?.name || '')}`}
                  className="text-xs lg:text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  {post.authorData?.map(a => a.name).join(' e ')}
                </Link>
              </div>
              
            </div>
            
            <CardDescription className="line-clamp-3 text-sm lg:text-base mb-2">
              {post.matter.short_description}
            </CardDescription>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                <span className="text-xs lg:text-sm">{formatDateAndReadingTime(post.matter.date, post.content)}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            {showTags && (
              <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-4">
                {post.matter.tags?.slice(0, maxTags).map((tag) => (
                  <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="outline"
                      className="text-xs cursor-pointer hover:bg-secondary/80 transition-colors px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full"
            >
              <Link to={`/blog/${post.slug}`}>
                Ler Mais <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </>
      )}
    </Card>
  );
} 