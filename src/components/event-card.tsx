import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";
import { Link } from "wouter";
import type { Event } from "@shared/schema";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatPrice = (priceInCents: number) => {
    if (priceInCents === 0) return "Gratuito";
    return `R$ ${(priceInCents / 100).toFixed(0)}`;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'negócios':
        return 'bg-accent/10 text-accent';
      case 'tecnologia':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'educação':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <Card className="rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-event-${event.id}`}>
      <img 
        src={event.imageUrl} 
        alt={event.title} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className={getCategoryColor(event.category)} data-testid={`badge-category-${event.id}`}>
            {event.category}
          </Badge>
          <span className="text-muted-foreground text-sm" data-testid={`text-date-${event.id}`}>
            {formatDate(event.date)}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2" data-testid={`text-title-${event.id}`}>
          {event.title}
        </h3>
        <p className="text-muted-foreground mb-4" data-testid={`text-description-${event.id}`}>
          {event.description.length > 100 ? `${event.description.substring(0, 100)}...` : event.description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Clock className="h-4 w-4 mr-2" />
            {new Date(event.date).toLocaleDateString('pt-BR')}
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Users className="h-4 w-4 mr-2" />
            {event.maxParticipants || 0} participantes
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary" data-testid={`text-price-${event.id}`}>
            {formatPrice(event.price)}
          </span>
          <Link href={`/events/${event.id}`}>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 font-medium transition-colors"
              data-testid={`button-register-${event.id}`}
            >
              Inscrever-se
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
