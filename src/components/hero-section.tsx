import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/backgraund.jpg",
      title: "Conectando Profissionais",
      subtitle: "A maior plataforma de networking corporativo de Angola",
      description: "Participe de eventos exclusivos e conecte-se com líderes da indústria"
    },
    {
      id: 2,
      image: "/section1.jpg",
      title: "Eventos de Qualidade",
      subtitle: "Conferências e workshops de alto nível",
      description: "Aprenda com especialistas e expanda sua rede profissional"
    },
    {
      id: 3,
      image: "/section2.jpg",
      title: "Networking Estratégico",
      subtitle: "Construa relacionamentos duradouros",
      description: "Encontre parceiros de negócio e oportunidades únicas"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl mb-4 text-primary-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {slides[currentSlide].subtitle}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {slides[currentSlide].description}
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={togglePause}
          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          data-testid="button-play-pause"
        >
          {isPaused ? <Play className="h-6 w-6" /> : <Pause className="h-6 w-6" />}
        </button>
      </div>
    </section>
  );
}
