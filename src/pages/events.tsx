import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search, Filter, Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import EventCard from "@/components/event-card";
import type { Event } from "@shared/schema";

const categories = ["Todos", "Negócios", "Tecnologia", "Educação", "Cultura"];

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

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events', selectedCategory === "Todos" ? '' : `?category=${selectedCategory}`],
  });

  // Filter events by search term
  const filteredEvents = events?.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-muted/50 to-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-events-title">
            Próximos Eventos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra oportunidades únicas de networking, aprendizado e crescimento profissional
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div className="mb-12 space-y-6" variants={itemVariants}>
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar eventos por nome, descrição ou localização..."
                className="pl-10 pr-4 py-3 w-full border-2 focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-search-events"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center" data-testid="filters-event-categories">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category 
                      ? "bg-primary text-white shadow-lg" 
                      : "bg-muted text-muted-foreground hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div variants={containerVariants}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-4" 
                  variants={itemVariants}
                  data-testid={`skeleton-event-${index}`}
                >
                  <Skeleton className="h-48 w-full rounded-t-xl" />
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-16 w-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-10 w-24" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : filteredEvents && filteredEvents.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="col-span-full text-center py-16" 
              variants={itemVariants}
              data-testid="empty-events"
            >
              <div className="max-w-md mx-auto">
                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Nenhum evento encontrado</h3>
                <p className="text-muted-foreground mb-6">
                  {searchTerm 
                    ? `Não encontramos eventos para "${searchTerm}" na categoria ${selectedCategory.toLowerCase()}`
                    : "Não há eventos disponíveis na categoria selecionada no momento."
                  }
                </p>
                <div className="space-y-3">
                  {searchTerm && (
                    <Button 
                      variant="outline"
                      onClick={() => setSearchTerm("")}
                      data-testid="button-clear-search"
                    >
                      Limpar Busca
                    </Button>
                  )}
                  <Button 
                    onClick={() => {
                      setSelectedCategory("Todos");
                      setSearchTerm("");
                    }}
                    data-testid="button-view-all-events"
                  >
                    Ver Todos os Eventos
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Load More */}
        {filteredEvents && filteredEvents.length > 0 && (
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Button 
              variant="secondary"
              className="bg-muted hover:bg-border text-foreground px-8 py-3 font-medium transform hover:scale-105 transition-all duration-200"
              data-testid="button-load-more"
            >
              Carregar Mais Eventos
            </Button>
          </motion.div>
        )}

        {/* Statistics */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {[
            { icon: Calendar, count: filteredEvents?.length || 0, label: "Eventos Disponíveis" },
            { icon: MapPin, count: new Set(events?.map(e => e.location)).size || 0, label: "Locais Diferentes" },
            { icon: Users, count: events?.reduce((sum, e) => sum + (e.capacity || 0), 0) || 0, label: "Vagas Totais" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-card p-6 rounded-xl shadow-lg text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">{stat.count}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
