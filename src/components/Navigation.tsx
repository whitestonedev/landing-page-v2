import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Github, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Eventos", href: "/eventos" },
  { name: "Blog", href: "/blog" },
  { name: "Projetos", href: "/projetos" },
  { name: "Como Ajudar", href: "/como-ajudar" },
  {
    name: "Contato",
    href: "https://links.whitestonedev.com.br",
    external: true,
  },
];

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              src="https://statics.whitestonedev.com.br/site/wsd_logo.png"
              alt="whiteStone_dev logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-['Roboto']">
              white<span className="font-bold">Stone</span>
              <span className="italic">_dev</span>
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <div className="flex gap-x-2">
            {socialLinks.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9"
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                  <span className="sr-only">{item.name}</span>
                </a>
              </Button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-0 overflow-y-auto bg-background">
            <div className="flex min-h-full flex-col">
              <div className="flex items-center justify-between p-4">
                <Link
                  to="/"
                  className="-m-1.5 p-1.5 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img
                    src="https://statics.whitestonedev.com.br/site/wsd_logo.png"
                    alt="whiteStone_dev logo"
                    className="h-6 w-auto"
                  />
                  <span className="text-xl font-['Roboto']">
                    white<span className="font-bold">Stone</span>
                    <span className="italic">_dev</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 px-4 pb-4">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={cn(
                          "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent",
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-x-2">
                      {socialLinks.map((item) => (
                        <Button
                          key={item.name}
                          variant="ghost"
                          size="icon"
                          asChild
                          className="h-9 w-9"
                        >
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <item.icon className="h-4 w-4" />
                            <span className="sr-only">{item.name}</span>
                          </a>
                        </Button>
                      ))}
                    </div>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
