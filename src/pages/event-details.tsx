import { useState } from "react";
import { useParams } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Users, Calendar, QrCode } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { TicketSchema } from "@/lib/schema";
import type { Event, Ticket } from "@/lib/schema";

export default function EventDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [ticketData, setTicketData] = useState({
    attendeeName: "",
    attendeeEmail: "",
    ticketType: "visitor"
  });

  const { data: event, isLoading } = useQuery<Event>({
    queryKey: ['/api/events', id],
    enabled: !!id,
  });

  const purchaseTicketMutation = useMutation({
    mutationFn: async (data: typeof ticketData) => {
      const ticketPrice = getTicketPrice(data.ticketType);
      const ticketInfo = {
        eventId: id!,
        attendeeName: data.attendeeName,
        attendeeEmail: data.attendeeEmail,
        ticketType: data.ticketType,
        price: ticketPrice,
      };
      
      const validatedData = TicketSchema.parse(ticketInfo);
      const response = await apiRequest('POST', '/api/tickets', validatedData);
      return response.json();
    },
    onSuccess: (ticket: Ticket) => {
      toast({
        title: "Ingresso adquirido com sucesso!",
        description: `QR Code: ${ticket.qrCode}`,
      });
      queryClient.invalidateQueries({ queryKey: ['/api/events', id] });
      setTicketData({ attendeeName: "", attendeeEmail: "", ticketType: "visitor" });
    },
    onError: () => {
      toast({
        title: "Erro ao adquirir ingresso",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const getTicketPrice = (type: string): number => {
    switch (type) {
      case "professional":
        return event ? (event.price || 0) + 20000 : 35000; // Add $200
      case "vip":
        return event ? (event.price || 0) + 30000 : 65000; // Add $300
      default:
        return event ? (event.price || 0) + 15000 : 15000;
    }
  };

  const formatPrice = (priceInCents: number) => {
    if (priceInCents === 0) return "Gratuito";
    return `R$ ${(priceInCents / 100).toFixed(0)}`;
  };

  const handleTicketPurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketData.attendeeName || !ticketData.attendeeEmail) {
      toast({
        title: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }
    purchaseTicketMutation.mutate(ticketData);
  };

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Skeleton className="h-64 w-full rounded-xl" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-64 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Evento não encontrado</h1>
          <p className="text-muted-foreground">O evento que você procura não existe ou foi removido.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Event Header */}
        <div className="mb-12">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-64 sm:h-96 object-cover rounded-xl shadow-lg"
            data-testid="img-event-header"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Event Details */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-4" data-testid={`badge-event-category`}>
                {event.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4" data-testid="text-event-title">
                {event.title}
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-event-description">
                {event.description}
              </p>
            </div>

            {/* Event Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Informações do Evento</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium mr-2">Data:</span>
                    <span data-testid="text-event-date">{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium mr-2">Horário:</span>
                    <span data-testid="text-event-time">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium mr-2">Local:</span>
                    <span data-testid="text-event-location">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium mr-2">Participantes:</span>
                    <span data-testid="text-event-attendees">
                      {event.attendees || 0} / {event.capacity || "∞"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Program */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Programação</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold">09:00 - 10:00</div>
                    <div className="text-muted-foreground">Credenciamento e Welcome Coffee</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold">10:00 - 12:00</div>
                    <div className="text-muted-foreground">Palestras Principais</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold">12:00 - 14:00</div>
                    <div className="text-muted-foreground">Almoço e Networking</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold">14:00 - 17:00</div>
                    <div className="text-muted-foreground">Workshops e Demos</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold">17:00 - 18:00</div>
                    <div className="text-muted-foreground">Encerramento e Happy Hour</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ticket Purchase */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Adquirir Ingresso</h3>
                <form onSubmit={handleTicketPurchase} className="space-y-4" data-testid="form-ticket-purchase">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={ticketData.attendeeName}
                      onChange={(e) => setTicketData({...ticketData, attendeeName: e.target.value})}
                      placeholder="Seu nome completo"
                      data-testid="input-attendee-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={ticketData.attendeeEmail}
                      onChange={(e) => setTicketData({...ticketData, attendeeEmail: e.target.value})}
                      placeholder="seu@email.com"
                      data-testid="input-attendee-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="ticket-type">Tipo de Ingresso</Label>
                    <Select 
                      value={ticketData.ticketType} 
                      onValueChange={(value) => setTicketData({...ticketData, ticketType: value})}
                    >
                      <SelectTrigger data-testid="select-ticket-type">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visitor">Visitante - {formatPrice(getTicketPrice("visitor"))}</SelectItem>
                        <SelectItem value="professional">Profissional - {formatPrice(getTicketPrice("professional"))}</SelectItem>
                        <SelectItem value="vip">VIP - {formatPrice(getTicketPrice("vip"))}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="text-center pt-4 border-t">
                    <div className="text-2xl font-bold text-primary mb-4" data-testid="text-ticket-price">
                      Total: {formatPrice(getTicketPrice(ticketData.ticketType))}
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      disabled={purchaseTicketMutation.isPending}
                      data-testid="button-purchase-ticket"
                    >
                      {purchaseTicketMutation.isPending ? "Processando..." : "Comprar Ingresso"}
                    </Button>
                  </div>
                </form>

                {/* QR Code Info */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center mb-2">
                    <QrCode className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">Check-in Digital</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Após a compra, você receberá um QR Code para acesso rápido ao evento.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
