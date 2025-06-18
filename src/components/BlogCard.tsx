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
        <div className="md:flex">
          <div className="md:w-1/2">
            {post.matter.thumb && (
              <img
                src={post.matter.thumb}
                alt={post.matter.title}
                className="h-64 w-full object-cover md:h-full"
              />
            )}
          </div>
          <div className="md:w-1/2">
            <CardHeader>
              
              <CardTitle className="text-2xl mb-2">
                {post.matter.title}
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>
                    {post.authorData?.map(a => a.name).join(' e ')}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{formatDateAndReadingTime(post.matter.date, post.content)}</span>
                </div>
              </div>
              <CardDescription className="text-base">
                {post.matter.short_description}
              </CardDescription>
              
            </CardHeader>
            <CardContent>
              {showTags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.matter.tags?.map((tag) => (
                    <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-colors">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
              <Button asChild>
                <Link to={`/blog/${post.slug}`}>
                  Ler Artigo <ArrowRight className="ml-2 h-4 w-4" />
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
              className="h-48 w-full object-cover"
            />
          )}
          <CardHeader>
            
            <CardTitle className="text-lg line-clamp-2">
              {post.matter.title}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              <div className="flex items-center">
                <User className="mr-1 h-3 w-3" />
                <span>
                  {post.authorData?.map(a => a.name).join(' e ')}
                </span>
              </div>
              
            </div>
            
            <CardDescription className="line-clamp-3">
              {post.matter.short_description}
            </CardDescription>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center mt-2">
                <Clock className="mr-1 h-3 w-3" />
                <span>{formatDateAndReadingTime(post.matter.date, post.content)}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {showTags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.matter.tags?.slice(0, maxTags).map((tag) => (
                  <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="outline"
                      className="text-xs cursor-pointer hover:bg-secondary/80 transition-colors"
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