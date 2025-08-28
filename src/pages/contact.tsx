import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Building, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simular envio
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-contact-title">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para tornar seu próximo evento um sucesso. Fale conosco agora!
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {[
            { icon: Users, value: "24/7", label: "Suporte Disponível" },
            { icon: Building, value: "500+", label: "Eventos Organizados" },
            { icon: MessageCircle, value: "< 2h", label: "Tempo de Resposta" }
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-xl border hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold" data-testid="text-form-title">
                    Envie sua Mensagem
                  </h2>
                </div>
                <motion.form 
                  className="space-y-6" 
                  onSubmit={handleSubmit} 
                  data-testid="form-contact"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
                    <div>
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        className="border-2 focus:border-primary transition-all duration-200"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        className="border-2 focus:border-primary transition-all duration-200"
                        data-testid="input-contact-email"
                      />
                    </div>
                  </motion.div>
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Nome da empresa"
                        className="border-2 focus:border-primary transition-all duration-200"
                        data-testid="input-contact-company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="border-2 focus:border-primary transition-all duration-200"
                        data-testid="input-contact-phone"
                      />
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="subject">Assunto *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="border-2 focus:border-primary" data-testid="select-contact-subject">
                        <SelectValue placeholder="Selecione um assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="informacoes-eventos">Informações sobre eventos</SelectItem>
                        <SelectItem value="parceria-comercial">Parceria comercial</SelectItem>
                        <SelectItem value="suporte-tecnico">Suporte técnico</SelectItem>
                        <SelectItem value="evento-personalizado">Organização de evento personalizado</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descreva como podemos ajudá-lo"
                      className="border-2 focus:border-primary transition-all duration-200 resize-none"
                      data-testid="textarea-contact-message"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-semibold transform hover:scale-105 transition-all duration-200 disabled:transform-none"
                      disabled={isSubmitted}
                      data-testid="button-contact-submit"
                    >
                      {isSubmitted ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Information */}
            <Card className="shadow-xl border hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold" data-testid="text-contact-info-title">
                    Informações de Contato
                  </h3>
                </div>
                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {[
                    {
                      icon: MapPin,
                      bg: "bg-primary",
                      label: "Endereço",
                      content: "Av. Paulista, 1578 - Bela Vista\nSão Paulo, SP - 01310-200",
                      testId: "address"
                    },
                    {
                      icon: Phone,
                      bg: "bg-accent",
                      label: "Telefone",
                      content: "(11) 3456-7890",
                      testId: "phone"
                    },
                    {
                      icon: Mail,
                      bg: "bg-blue-500",
                      label: "Email",
                      content: "contato@eventospro.com.br",
                      testId: "email"
                    },
                    {
                      icon: Clock,
                      bg: "bg-green-500",
                      label: "Horário de Funcionamento",
                      content: "Segunda a Sexta: 8h às 18h\nSábado: 9h às 12h",
                      testId: "hours"
                    }
                  ].map((item, index) => (
                    <motion.div key={index} className="flex items-start group" variants={itemVariants}>
                      <div className={`${item.bg} p-3 rounded-lg mr-4 mt-1 transform group-hover:scale-110 transition-transform duration-200`}>
                        <item.icon className="text-white h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1" data-testid={`text-${item.testId}-label`}>
                          {item.label}
                        </div>
                        <div className="text-muted-foreground whitespace-pre-line" data-testid={`text-${item.testId}-content`}>
                          {item.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            {/* Interactive Map Placeholder */}
            <Card className="shadow-xl border hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Building className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold" data-testid="text-map-title">
                    Nossa Localização
                  </h3>
                </div>
                <motion.div 
                  className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center hover:from-primary/5 hover:to-accent/5 transition-all duration-300" 
                  data-testid="map-placeholder"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center text-muted-foreground">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                    </motion.div>
                    <p className="font-medium">Mapa Interativo</p>
                    <p className="text-sm">Av. Paulista, São Paulo</p>
                    <Button variant="outline" className="mt-4 hover:scale-105 transition-transform">
                      Ver no Google Maps
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Chatbot Feature */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl p-8 text-center text-white"
          variants={itemVariants}
        >
          <div className="max-w-3xl mx-auto">
            <motion.h3 
              className="text-3xl font-bold mb-4" 
              data-testid="text-chatbot-title"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Precisa de Ajuda Rápida?
            </motion.h3>
            <motion.p 
              className="text-xl mb-6 text-white/90" 
              data-testid="text-chatbot-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Nosso assistente virtual está disponível 24/7 para responder suas dúvidas sobre eventos, ingressos e muito mais.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold shadow-lg"
                data-testid="button-start-chat"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Iniciar Chat
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div className="mt-16" variants={itemVariants}>
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4" 
              data-testid="text-faq-title"
              variants={itemVariants}
            >
              Perguntas Frequentes
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg"
              variants={itemVariants}
            >
              Respostas para as dúvidas mais comuns sobre nossos eventos
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {[
              {
                question: "Como posso adquirir ingressos para os eventos?",
                answer: "Os ingressos podem ser adquiridos diretamente em nossa plataforma online, com diversas opções de pagamento e entrega de QR Code instantânea.",
                testId: "faq-1"
              },
              {
                question: "Posso cancelar minha inscrição?",
                answer: "Sim, cancelamentos podem ser feitos até 48 horas antes do evento, com reembolso integral conforme nossa política.",
                testId: "faq-2"
              },
              {
                question: "Vocês organizam eventos personalizados?",
                answer: "Sim, oferecemos serviços completos de organização de eventos corporativos sob medida para empresas de todos os portes.",
                testId: "faq-3"
              },
              {
                question: "Como me tornar um expositor?",
                answer: "Entre em contato conosco através do formulário acima ou telefone para conhecer nossas oportunidades de exposição e patrocínio.",
                testId: "faq-4"
              }
            ].map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2 flex items-center" data-testid={`text-${faq.testId}-question`}>
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground text-sm" data-testid={`text-${faq.testId}-answer`}>
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
