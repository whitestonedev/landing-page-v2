import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = {
  main: [
    { name: "Sobre", href: "/sobre" },
    { name: "Eventos", href: "/eventos" },
    { name: "Blog", href: "/blog" },
    { name: "Projetos", href: "/projetos" },
    { name: "Como Ajudar", href: "/como-ajudar" },
    {
      name: "Contato",
      href: "https://links.whitestonedev.com.br",
    },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/whitestonedev", icon: Github },
    {
      name: "Instagram",
      href: "https://www.instagram.com/whitestonedev",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/whitestone-dev/",
      icon: Linkedin,
    },
    {
      name: "WhatsApp",
      href: "https://links.whitestonedev.com.br/#/whatsapp",
      icon: MessageCircle,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="icon"
              asChild
              className="h-10 w-10"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-wrap justify-center space-x-6 md:justify-start">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-muted-foreground md:text-left">
            &copy; 2024 whiteStone_dev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
