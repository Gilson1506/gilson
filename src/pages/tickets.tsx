import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, QrCode } from "lucide-react";

export default function Tickets() {
  const ticketPlans = [
    {
      id: "visitor",
      name: "Visitante",
      description: "Acesso básico ao evento",
      price: 15000, // R$ 150.00
      features: [
        { name: "Acesso a todas as palestras", included: true },
        { name: "Área de networking", included: true },
        { name: "Coffee break incluso", included: true },
        { name: "Workshops premium", included: false },
        { name: "Almoço incluso", included: false },
        { name: "Kit de brindes", included: false },
      ],
      buttonText: "Comprar Ingresso",
      buttonVariant: "secondary" as const,
    },
    {
      id: "professional",
      name: "Profissional",
      description: "Experiência completa",
      price: 35000, // R$ 350.00
      popular: true,
      features: [
        { name: "Tudo do plano Visitante", included: true },
        { name: "Workshops premium", included: true },
        { name: "Almoço incluso", included: true },
        { name: "Kit de brindes", included: true },
        { name: "Área VIP exclusiva", included: false },
        { name: "Meet & Greet com palestrantes", included: false },
      ],
      buttonText: "Comprar Ingresso",
      buttonVariant: "default" as const,
    },
    {
      id: "vip",
      name: "VIP",
      description: "Acesso exclusivo",
      price: 65000, // R$ 650.00
      features: [
        { name: "Tudo do plano Profissional", included: true },
        { name: "Área VIP exclusiva", included: true },
        { name: "Meet & Greet com palestrantes", included: true },
        { name: "Jantar de gala incluso", included: true },
        { name: "Transporte executivo", included: true },
        { name: "Certificado especial", included: true },
      ],
      buttonText: "Comprar Ingresso",
      buttonVariant: "accent" as const,
    },
  ];

  const formatPrice = (priceInCents: number) => {
    return `R$ ${(priceInCents / 100).toFixed(0)}`;
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-tickets-title">
            Ingressos e Inscrições
          </h1>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para sua participação
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`p-8 hover:shadow-xl transition-shadow relative ${
                plan.popular ? 'shadow-xl border-2 border-primary' : 'shadow-lg border border-border'
              }`}
              data-testid={`card-ticket-${plan.id}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1" data-testid="badge-popular">
                    POPULAR
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" data-testid={`text-plan-name-${plan.id}`}>
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-plan-description-${plan.id}`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary" data-testid={`text-plan-price-${plan.id}`}>
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-muted-foreground">/pessoa</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center" data-testid={`feature-${plan.id}-${index}`}>
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold transition-colors ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : plan.buttonVariant === 'accent'
                      ? 'bg-accent hover:bg-accent/90 text-white'
                      : 'bg-muted hover:bg-border text-foreground'
                  }`}
                  data-testid={`button-buy-${plan.id}`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* QR Code Feature */}
        <div className="mt-16 bg-muted rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4" data-testid="text-qr-title">
                Check-in Rápido com QR Code
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Após a compra, você receberá um QR Code único para acesso rápido e seguro ao evento. 
                Sem filas, sem complicações.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <QrCode className="h-5 w-5 text-primary mr-3" />
                  <span>QR Code enviado por email e SMS</span>
                </div>
                <div className="flex items-center">
                  <QrCode className="h-5 w-5 text-primary mr-3" />
                  <span>Check-in em menos de 5 segundos</span>
                </div>
                <div className="flex items-center">
                  <QrCode className="h-5 w-5 text-primary mr-3" />
                  <span>100% seguro e verificado</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Card className="p-8 inline-block">
                <CardContent className="p-0">
                  {/* QR Code placeholder */}
                  <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4" data-testid="qr-code-example">
                    <QrCode className="h-16 w-16 text-gray-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">QR Code de exemplo</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Tem dúvidas sobre os ingressos?</h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco para esclarecimentos sobre tipos de ingresso, 
            formas de pagamento e política de cancelamento.
          </p>
          <Button variant="outline" className="px-8 py-3" data-testid="button-contact-tickets">
            Falar com Suporte
          </Button>
        </div>
      </div>
    </section>
  );
}
