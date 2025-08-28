import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Play, Users, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&h=800",
    title: "Conectando Negócios",
    subtitle: "Criando Oportunidades",
    description: "A maior plataforma de eventos corporativos do Brasil",
    primaryAction: { text: "Próximos Eventos", link: "/events" },
    secondaryAction: { text: "Inscreva-se Agora", link: "/tickets" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&h=800",
    title: "Tecnologia e Inovação",
    subtitle: "Transformando o Futuro",
    description: "Eventos que conectam startups, investidores e grandes corporações",
    primaryAction: { text: "Eventos Tech", link: "/events" },
    secondaryAction: { text: "Ver Expositores", link: "/exhibitors" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&h=800",
    title: "Networking Premium",
    subtitle: "Conexões que Importam",
    description: "Encontre parceiros, clientes e oportunidades de negócio",
    primaryAction: { text: "Fazer Networking", link: "/events" },
    secondaryAction: { text: "Contato", link: "/contact" }
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img 
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-5xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4" 
                data-testid="text-hero-title"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {heroSlides[currentSlide].title}<br/>
                <span className="text-accent bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl mb-8 text-gray-200" 
                data-testid="text-hero-subtitle"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              {/* Stats removidos */}
              
              {/* CTA removidos */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controles de navegação removidos */}

      {/* Indicadores removidos */}

      {/* Play/Pause removido */}
    </section>
  );
}
