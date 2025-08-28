import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Ticket, Users, Building, Star, Clock } from "lucide-react";
import { Link } from "wouter";
import HeroSection from "@/components/hero-section";
import EventCard from "@/components/event-card";
import { motion } from "framer-motion";
import type { Event, News } from "@shared/schema";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Featured News Component
function FeaturedNews({ news }: { news: News[] }) {
  return (
    <motion.div 
      className="w-full"
      variants={containerVariants}
    >
      {/* Mobile Carousel */}
      <div className="lg:hidden w-full overflow-x-auto scrollbar-hide carousel-container">
        <div className="flex gap-4 w-max px-4 pb-4">
          {news.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="w-80 flex-shrink-0 carousel-item"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <img 
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      DESTAQUE
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4 mr-2" />
                    {new Date(item.publishDate).toLocaleDateString('pt-BR')}
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {item.content}
                  </p>
                  <Link href={`/news/${item.id}`}>
                    <Button variant="outline" className="w-full text-sm">
                      Ler Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Desktop Grid - Melhorado */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <motion.div 
            key={item.id} 
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg">
              <div className="relative h-64">
                <img 
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white text-sm px-3 py-1">
                    DESTAQUE
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  {new Date(item.publishDate).toLocaleDateString('pt-BR')}
                </div>
                <h3 className="text-2xl font-bold mb-4 line-clamp-2 text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 text-base leading-relaxed">
                  {item.content}
                </p>
                <Link href={`/news/${item.id}`}>
                  <Button variant="outline" className="w-full text-base py-3 hover:bg-primary hover:text-white transition-all duration-300">
                    Ler Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Team Section Component
function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "CEO & Fundadora",
      image: "/team/ana-silva.jpg",
      description: "Especialista em networking corporativo com mais de 15 anos de experiência.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Diretor de Eventos",
      image: "/team/carlos-santos.jpg",
      description: "Responsável pela organização e execução de eventos de alta qualidade.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "Mariana Costa",
      role: "Head de Marketing",
      image: "/team/mariana-costa.jpg",
      description: "Estratégias inovadoras para conectar empresas e profissionais.",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Roberto Lima",
      role: "Diretor de Tecnologia",
      image: "/team/roberto-lima.jpg",
      description: "Desenvolvimento de soluções digitais para networking eficiente.",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <motion.div 
      className="w-full"
      variants={containerVariants}
    >
      {/* Mobile Carousel */}
      <div className="lg:hidden w-full overflow-x-auto scrollbar-hide carousel-container">
        <div className="flex gap-4 w-max px-4 pb-4">
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants} className="w-64 flex-shrink-0 carousel-item">
              <Card className="text-center p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-full">
                      <Star className="h-3 w-3" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2 text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-3">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-2">
                      <Users className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-2">
                      <Building className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={itemVariants}>
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full">
                    <Star className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    <Users className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    <Building className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { data: allEvents, isLoading: isLoadingAllEvents } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // Mock data for news
  const featuredNews: News[] = [
    {
      id: "1",
      title: "Networking Digital: O Futuro das Conexões Profissionais",
      content: "Descubra como a tecnologia está revolucionando a forma como nos conectamos e construímos relacionamentos profissionais no mundo digital.",
      imageUrl: "/news/networking-digital.jpg",
      publishDate: new Date().toISOString(),
      author: "Equipe Editorial",
      category: "Tecnologia"
    },
    {
      id: "2",
      title: "Eventos Híbridos: A Nova Era dos Encontros Corporativos",
      content: "A combinação de eventos presenciais e virtuais está criando experiências únicas e acessíveis para todos os participantes.",
      imageUrl: "/news/eventos-hibridos.jpg",
      publishDate: new Date(Date.now() - 86400000).toISOString(),
      author: "Equipe Editorial",
      category: "Eventos"
    },
    {
      id: "3",
      title: "Como Construir uma Rede de Contatos Eficiente",
      content: "Estratégias comprovadas para desenvolver e manter relacionamentos profissionais que impulsionam sua carreira.",
      imageUrl: "/news/rede-contatos.jpg",
      publishDate: new Date(Date.now() - 172800000).toISOString(),
      author: "Equipe Editorial",
      category: "Carreira"
    }
  ];

  const upcomingEvents = allEvents?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Quick Actions - Responsive Grid */}
      <motion.div 
        className="relative -mt-16 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            <motion.div variants={itemVariants}>
              <div className="w-20 h-20 sm:w-auto sm:h-auto p-2 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-primary text-white rounded-lg flex flex-col justify-center items-center text-center sm:items-start sm:text-left" style={{background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'}}>
                <div className="bg-white/20 p-1.5 sm:p-3 rounded-lg mb-1 sm:mb-3 transform hover:rotate-3 transition-transform">
                  <Calendar className="text-white text-xs sm:text-xl" />
                </div>
                <h3 className="text-xs sm:text-xl font-semibold text-white mb-1 sm:mb-3">Próximos Eventos</h3>
                <div className="hidden sm:block">
                  <p className="text-white/90 mb-4 text-sm">Descubra as melhores oportunidades de networking e negócios.</p>
                  <Link href="/events">
                    <Button variant="link" className="p-0 text-white hover:text-white/80 font-medium group text-sm">
                      Ver todos os eventos →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="w-20 h-20 sm:w-auto sm:h-auto p-2 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-accent text-white rounded-lg flex flex-col justify-center items-center text-center sm:items-start sm:text-left" style={{background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)'}}>
                <div className="bg-white/20 p-1.5 sm:p-3 rounded-lg mb-1 sm:mb-3 transform hover:rotate-3 transition-transform">
                  <Ticket className="text-white text-xs sm:text-xl" />
                </div>
                <h3 className="text-xs sm:text-xl font-semibold text-white mb-1 sm:mb-3">Inscrições Abertas</h3>
                <div className="hidden sm:block">
                  <p className="text-white/90 mb-4 text-sm">Garanta sua vaga nos eventos mais procurados do mercado.</p>
                  <Link href="/tickets">
                    <Button variant="link" className="p-0 text-white hover:text-white/80 font-medium group text-sm">
                      Inscrever-se →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="w-20 h-20 sm:w-auto sm:h-auto p-2 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-green-500 text-white rounded-lg flex flex-col justify-center items-center text-center sm:items-start sm:text-left" style={{background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'}}>
                <div className="bg-white/20 p-1.5 sm:p-3 rounded-lg mb-1 sm:mb-3 transform hover:rotate-3 transition-transform">
                  <Users className="text-white text-xs sm:text-xl" />
                </div>
                <h3 className="text-xs sm:text-xl font-semibold text-white mb-1 sm:mb-3">Seja um Parceiro</h3>
                <div className="hidden sm:block">
                  <p className="text-white/90 mb-4 text-sm">Conecte-se com nossa rede de empresas e profissionais.</p>
                  <Link href="/contact">
                    <Button variant="link" className="p-0 text-white hover:text-white/80 font-medium group text-sm">
                      Fale conosco →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Featured News Section - Altura intercalada (esquerda maior) */}
      <motion.div 
        className="mt-12 sm:mt-16 py-16 sm:py-20 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/section1.jpg')" }}
        />
        {/* Overlay com altura intercalada */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/80 clip-path-triangle-left" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" 
                variants={itemVariants}
              >
                Notícias em Destaque
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Fique por dentro das últimas tendências e novidades do mundo corporativo
              </motion.p>
            </div>
            
            <FeaturedNews news={featuredNews} />
            
            <motion.div className="text-center mt-8 sm:mt-12" variants={itemVariants}>
              <Link href="/news">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-200">
                  Ver Todas as Notícias
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Team Section - Altura intercalada (direita maior) */}
      <motion.div 
        className="mt-12 sm:mt-16 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 clip-path-triangle-right"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" 
              variants={itemVariants}
            >
              Nossa Equipa
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Conheça os profissionais dedicados que fazem a diferença
            </motion.p>
          </div>

          <TeamSection />
        </div>
      </motion.div>

      {/* Upcoming Events Section - Altura intercalada (esquerda maior) */}
      <motion.div 
        className="mt-12 sm:mt-16 py-8 sm:py-12 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/section2.jpg')" }}
        />
        {/* Overlay com altura intercalada */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/80 clip-path-triangle-left" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" 
              variants={itemVariants}
            >
              Próximos Eventos
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Não perca as melhores oportunidades de networking
            </motion.p>
          </div>

        {isLoadingAllEvents ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-xl" />
                <div className="p-4 sm:p-6 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Mobile Carousel */}
            <div className="lg:hidden w-full overflow-x-auto scrollbar-hide carousel-container mb-8">
              <div className="flex gap-4 w-max px-4 pb-4">
                {upcomingEvents.map((event) => (
                  <motion.div 
                    key={event.id} 
                    className="w-80 flex-shrink-0 carousel-item"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <motion.div 
              className="hidden lg:grid lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {upcomingEvents.map((event) => (
                <motion.div 
                  key={event.id} 
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        <motion.div className="text-center mt-6 sm:mt-8" variants={itemVariants}>
          <Link href="/events">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-200"
              data-testid="button-all-events"
            >
              Ver Todos os Eventos
            </Button>
          </Link>
        </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="mt-16 sm:mt-20 bg-gradient-to-r from-primary via-accent to-primary py-12 sm:py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Pronto para Transformar seu Negócio?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90"
            variants={itemVariants}
          >
            Junte-se a milhares de profissionais que já descobriram o poder do networking estratégico
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="/events">
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                data-testid="button-cta-events"
              >
                Explorar Eventos
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                data-testid="button-cta-contact"
              >
                Falar com Especialista
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
