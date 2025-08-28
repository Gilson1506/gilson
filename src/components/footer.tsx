import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-4" data-testid="text-footer-logo">
              <img 
                src="/logo.png" 
                alt="EventosPro Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4" data-testid="text-footer-description">
              Conectando negócios e criando oportunidades através de eventos corporativos de excelência.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-social-linkedin">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-social-instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-social-facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-social-twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-quick-links">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-events">Eventos</Link></li>
              <li><Link href="/exhibitors" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-exhibitors">Expositores</Link></li>
              <li><Link href="/tickets" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-tickets">Ingressos</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-news">Notícias</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-about">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-services">
              Serviços
            </h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-organization">Organização de Eventos</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-management">Gestão de Feiras</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-consulting">Consultoria</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-marketing">Marketing de Eventos</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-footer-support">Suporte Técnico</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-newsletter">
              Newsletter
            </h4>
            <p className="text-gray-300 mb-4 text-sm">
              Receba novidades sobre eventos e oportunidades de negócio.
            </p>
            <form className="space-y-3" onSubmit={handleNewsletterSubmit} data-testid="form-newsletter">
              <Input 
                type="email" 
                placeholder="Seu email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
                data-testid="button-newsletter-subscribe"
              >
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm" data-testid="text-footer-copyright">
            © 2024 EventosPro. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-footer-privacy">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-footer-terms">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors" data-testid="link-footer-cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
