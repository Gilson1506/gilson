import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Laptop, TrendingUp, Shield } from "lucide-react";
import type { Exhibitor } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

interface ExhibitorCardProps {
  exhibitor: Exhibitor;
}

export default function ExhibitorCard({ exhibitor }: ExhibitorCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'tecnologia':
        return <Laptop className="text-white text-xl" />;
      case 'business intelligence':
        return <TrendingUp className="text-white text-xl" />;
      case 'segurança digital':
        return <Shield className="text-white text-xl" />;
      default:
        return <Laptop className="text-white text-xl" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'tecnologia':
        return 'bg-primary';
      case 'business intelligence':
        return 'bg-accent';
      case 'segurança digital':
        return 'bg-green-500';
      default:
        return 'bg-primary';
    }
  };

  return (
    <Card className="rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-shadow" data-testid={`card-exhibitor-${exhibitor.id}`}>
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs">
            {exhibitor.industry}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {exhibitor.industry}
          </Badge>
        </div>
        <div className="flex items-center mb-4">
          <div className={`${getCategoryColor(exhibitor.category)} p-3 rounded-lg mr-4`}>
            {getCategoryIcon(exhibitor.category)}
          </div>
          <div>
            <h3 className="text-xl font-bold" data-testid={`text-name-${exhibitor.id}`}>
              {exhibitor.name}
            </h3>
            <span className="text-muted-foreground" data-testid={`text-category-${exhibitor.id}`}>
              {exhibitor.category}
            </span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4" data-testid={`text-description-${exhibitor.id}`}>
          {exhibitor.description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-2" />
            {exhibitor.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Users className="h-4 w-4 mr-2" />
            {exhibitor.industry} • {exhibitor.location}
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 font-medium transition-colors flex-1"
            data-testid={`button-schedule-${exhibitor.id}`}
          >
            Agendar Reunião
          </Button>
          <Button 
            variant="outline"
            className="border border-border hover:bg-muted text-foreground px-4 py-2 font-medium transition-colors"
            data-testid={`button-profile-${exhibitor.id}`}
          >
            Ver Perfil
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
