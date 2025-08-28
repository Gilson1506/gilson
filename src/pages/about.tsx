import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Calendar, Building, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Calendar, value: "150+", label: "Eventos Realizados" },
    { icon: Users, value: "50K+", label: "Participantes" },
    { icon: Building, value: "500+", label: "Empresas Parceiras" },
    { icon: Award, value: "15", label: "Anos de Experiência" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-about-title">
              Sobre a EventosPro
            </h1>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description">
              Há mais de 15 anos conectando empresas, profissionais e oportunidades através de eventos corporativos de excelência. 
              Somos líderes na organização de feiras, congressos e conferências que impulsionam negócios e transformam mercados.
            </p>
            
            {/* Mission, Vision, Values */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center" data-testid="text-mission-title">
                  <Target className="text-primary mr-3 h-6 w-6" />
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground" data-testid="text-mission-content">
                  Criar experiências únicas que conectem pessoas, empresas e ideias, 
                  impulsionando inovação e crescimento nos negócios.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center" data-testid="text-vision-title">
                  <Eye className="text-primary mr-3 h-6 w-6" />
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground" data-testid="text-vision-content">
                  Ser a principal plataforma de eventos corporativos da América Latina, 
                  reconhecida pela excelência e inovação.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center" data-testid="text-values-title">
                  <Heart className="text-primary mr-3 h-6 w-6" />
                  Nossos Valores
                </h3>
                <p className="text-muted-foreground" data-testid="text-values-content">
                  Excelência, inovação, sustentabilidade e compromisso com o sucesso 
                  de nossos clientes e parceiros.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Equipe profissional em escritório moderno" 
              className="rounded-lg shadow-lg"
              data-testid="img-team"
            />
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Grande conferência ou feira expo" 
              className="rounded-lg shadow-lg mt-8"
              data-testid="img-conference"
            />
            <img 
              src="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Cerimônia de premiação" 
              className="rounded-lg shadow-lg"
              data-testid="img-awards"
            />
            <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Evento de networking empresarial" 
              className="rounded-lg shadow-lg mt-8"
              data-testid="img-networking"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 shadow-lg border" data-testid={`card-stat-${index}`}>
                <CardContent className="p-0 text-center">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Story */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-story-title">Nossa História</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma jornada de crescimento, inovação e sucesso no mercado de eventos corporativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary mb-2" data-testid="text-milestone-2009">2009</div>
                <h4 className="font-semibold mb-2">Fundação</h4>
                <p className="text-muted-foreground text-sm">
                  Início das atividades com foco em eventos de pequeno porte na região sudeste.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary mb-2" data-testid="text-milestone-2015">2015</div>
                <h4 className="font-semibold mb-2">Expansão Nacional</h4>
                <p className="text-muted-foreground text-sm">
                  Crescimento para todo território nacional e parcerias com grandes empresas.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary mb-2" data-testid="text-milestone-2020">2020</div>
                <h4 className="font-semibold mb-2">Transformação Digital</h4>
                <p className="text-muted-foreground text-sm">
                  Pioneirismo em eventos híbridos e soluções tecnológicas inovadoras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 bg-muted rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-team-title">Nossa Equipe</h2>
            <p className="text-muted-foreground text-lg">
              Profissionais experientes e apaixonados por criar experiências memoráveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h4 className="font-semibold mb-2" data-testid="text-team-leadership">Liderança Experiente</h4>
              <p className="text-muted-foreground text-sm">
                Executivos com mais de 20 anos de experiência no mercado de eventos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="h-12 w-12 text-accent" />
              </div>
              <h4 className="font-semibold mb-2" data-testid="text-team-specialists">Especialistas Dedicados</h4>
              <p className="text-muted-foreground text-sm">
                Profissionais especializados em cada área: logística, marketing e tecnologia.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2" data-testid="text-team-passion">Paixão pelo Que Fazemos</h4>
              <p className="text-muted-foreground text-sm">
                Comprometimento genuíno com o sucesso de cada evento e cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
