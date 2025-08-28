import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início", active: location === "/" },
    { href: "/events", label: "Eventos", active: location.startsWith("/events") },
    { href: "/exhibitors", label: "Expositores", active: location === "/exhibitors" },
    { href: "/news", label: "Notícias", active: location === "/news" },
    { href: "/about", label: "Sobre", active: location === "/about" },
    { href: "/contact", label: "Contato", active: location === "/contact" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+244 933 333 333</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Luanda, Angola</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-white shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0" data-testid="link-logo">
                <img 
                  src="/logo.png" 
                  alt="EventosPro Logo" 
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      item.active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted-foreground hover:text-primary"
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    item.active
                      ? "text-primary bg-primary/10 border-l-4 border-l-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5 border-l-4 border-l-transparent"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
