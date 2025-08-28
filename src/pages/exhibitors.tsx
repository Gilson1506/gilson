import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Building, Users, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import ExhibitorCard from "@/components/exhibitor-card";
import type { Exhibitor } from "@shared/schema";

const categories = ["Todas as Categorias", "Tecnologia", "Business Intelligence", "Segurança Digital", "Consultoria", "Fintech", "Healthcare"];

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

export default function Exhibitors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas as Categorias");

  const { data: exhibitors, isLoading } = useQuery<Exhibitor[]>({
    queryKey: ['/api/exhibitors', selectedCategory === "Todas as Categorias" ? '' : `?category=${selectedCategory}`],
  });

  const filteredExhibitors = exhibitors?.filter(exhibitor =>
    exhibitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exhibitor.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-background to-muted/50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-exhibitors-title">
            Expositores e Parceiros
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecte-se com líderes de mercado, empresas inovadoras e potenciais parceiros de negócio
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div className="mb-12" variants={itemVariants}>
          <Card className="p-6 shadow-lg">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex-1 relative" data-testid="search-exhibitors">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Buscar empresas por nome, descrição ou segmento..."
                    className="pl-10 pr-4 py-3 border-2 focus:border-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    data-testid="input-search-exhibitors"
                  />
                </div>
                <div className="min-w-[200px]">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full border-2 focus:border-primary" data-testid="select-exhibitor-category">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {(searchTerm || selectedCategory !== "Todas as Categorias") && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Todas as Categorias");
                    }}
                    className="whitespace-nowrap"
                  >
                    Limpar Filtros
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {[
            { icon: Building, count: filteredExhibitors.length, label: "Expositores" },
            { icon: Users, count: filteredExhibitors.reduce((sum, e) => sum + (e.employees || 0), 0), label: "Profissionais" },
            { icon: MapPin, count: new Set(filteredExhibitors.map(e => e.standLocation?.split(',')[0])).size, label: "Stands" },
            { icon: Globe, count: categories.length - 1, label: "Segmentos" }
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.count}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Exhibitors Grid */}
        <motion.div variants={containerVariants}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div 
                  key={index} 
                  className="bg-card rounded-xl shadow-lg border p-6 space-y-4" 
                  variants={itemVariants}
                  data-testid={`skeleton-exhibitor-${index}`}
                >
                  <div className="flex items-center">
                    <Skeleton className="h-12 w-12 rounded-lg mr-4" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-16 w-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 w-20" />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : filteredExhibitors && filteredExhibitors.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {filteredExhibitors.map((exhibitor) => (
                <motion.div
                  key={exhibitor.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExhibitorCard exhibitor={exhibitor} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16" 
              variants={itemVariants}
              data-testid="empty-exhibitors"
            >
              <div className="max-w-md mx-auto">
                <Building className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Nenhum expositor encontrado</h3>
                <p className="text-muted-foreground mb-6">
                  {searchTerm
                    ? `Não encontramos expositores para "${searchTerm}" na categoria ${selectedCategory}`
                    : "Não há expositores disponíveis na categoria selecionada no momento."
                  }
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Todas as Categorias");
                  }}
                  data-testid="button-clear-filters"
                  className="transform hover:scale-105 transition-all duration-200"
                >
                  Limpar Filtros
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        {filteredExhibitors && filteredExhibitors.length > 0 && (
          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Quer ser um Expositor?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se aos líderes do mercado e mostre seus produtos e serviços para milhares de visitantes qualificados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-medium transform hover:scale-105 transition-all duration-200"
                data-testid="button-become-exhibitor"
              >
                Tornar-se Expositor
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-3 font-medium transform hover:scale-105 transition-all duration-200"
                data-testid="button-view-all-exhibitors"
              >
                Ver Todos os Expositores
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
