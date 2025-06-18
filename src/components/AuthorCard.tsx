import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

interface Author {
  name: string;
  image: string;
  position?: string;
  company?: string;
  github?: string;
  linkedin?: string;
}

interface AuthorCardProps {
  author: Author;
  variant?: 'default' | 'compact';
}

export function AuthorCard({ author, variant = 'default' }: AuthorCardProps) {
  const isCompact = variant === 'compact';
  
  return (
    <Link 
      to={`/blog?author=${encodeURIComponent(author.name)}`}
      className="block hover:bg-muted/60 transition-colors rounded-lg"
    >
      <Card className={`flex flex-row items-center gap-3 px-4 py-2 shadow-none border border-muted-foreground/10 bg-muted/40 w-full sm:w-auto min-h-[90px] ${isCompact ? 'text-sm' : ''} hover:bg-muted/60 transition-colors`}>
        <img
          src={author.image}
          alt={author.name}
          className={`${isCompact ? 'h-8 w-8' : 'h-12 w-12'} rounded-full object-cover`}
        />
        <div className="flex flex-col justify-center">
          <span className={`font-medium leading-tight ${isCompact ? 'text-sm' : 'text-base'}`}>
            {author.name}
          </span>
          <span className={`text-muted-foreground leading-tight ${isCompact ? 'text-xs' : 'text-xs'}`}>
            {author.position}{author.company && ` @ ${author.company}`}
          </span>
          <div className="flex gap-1 mt-1" onClick={(e) => e.stopPropagation()}>
            {author.github && (
              <Button variant="ghost" size="icon" className={`${isCompact ? 'h-5 w-5' : 'h-6 w-6'} p-0`} asChild>
                <a
                  href={author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${author.name}`}
                >
                  <Github className={`${isCompact ? 'h-3 w-3' : 'h-4 w-4'}`} />
                </a>
              </Button>
            )}
            {author.linkedin && (
              <Button variant="ghost" size="icon" className={`${isCompact ? 'h-5 w-5' : 'h-6 w-6'} p-0`} asChild>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${author.name}`}
                >
                  <Linkedin className={`${isCompact ? 'h-3 w-3' : 'h-4 w-4'}`} />
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}

interface AuthorSectionProps {
  authors: Author[];
  variant?: 'default' | 'compact';
  showTitle?: boolean;
}

export function AuthorSection({ authors, variant = 'default', showTitle = true }: AuthorSectionProps) {
  if (!authors || authors.length === 0) return null;
  
  return (
    <div className="mt-16 flex flex-col items-center">
      {showTitle && (
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary text-xs font-bold">
              {authors.length > 1 ? authors.length : '1'}
            </span>
          </span>
          Sobre o{authors.length > 1 ? 's Autores' : ' Autor'}
        </h3>
      )}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full">
        {authors.map((author) => (
          <AuthorCard key={author.name} author={author} variant={variant} />
        ))}
      </div>
    </div>
  );
} 