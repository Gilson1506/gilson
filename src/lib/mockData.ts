import type { Event, News } from "./schema";

export const mockNews: News[] = [
  {
    id: 1,
    title: "Networking Digital: O Futuro das Conexões Profissionais",
    content: "Descubra como a tecnologia está revolucionando a forma como nos conectamos e construímos relacionamentos profissionais no mundo digital.",
    imageUrl: "/news/networking-digital.jpg",
    publishedAt: new Date().toISOString(),
    author: "Equipe Editorial",
    category: "Tecnologia"
  },
  {
    id: 2,
    title: "Eventos Híbridos: A Nova Era dos Encontros Corporativos",
    content: "A combinação de eventos presenciais e virtuais está criando experiências únicas e acessíveis para todos os participantes.",
    imageUrl: "/news/eventos-hibridos.jpg",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    author: "Equipe Editorial",
    category: "Eventos"
  },
  {
    id: 3,
    title: "Como Construir uma Rede de Contatos Eficiente",
    content: "Estratégias comprovadas para desenvolver e manter relacionamentos profissionais que impulsionam sua carreira.",
    imageUrl: "/news/rede-contatos.jpg",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    author: "Equipe Editorial",
    category: "Carreira"
  }
];

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "TechConnect 2024",
    description: "O maior evento de tecnologia e networking do ano, reunindo profissionais e empresas do setor.",
    date: new Date(Date.now() + 86400000 * 7).toISOString(),
    time: "09:00 - 18:00",
    location: "Centro de Convenções São Paulo",
    maxAttendees: 500,
    imageUrl: "/events/techconnect-2024.jpg",
    category: "Tecnologia",
    price: 299.99,
    featured: true
  },
  {
    id: 2,
    title: "Business Networking Summit",
    description: "Conecte-se com líderes empresariais e descubra novas oportunidades de negócio.",
    date: new Date(Date.now() + 86400000 * 14).toISOString(),
    time: "14:00 - 20:00",
    location: "Hotel Grand Plaza",
    maxAttendees: 200,
    imageUrl: "/events/business-summit.jpg",
    category: "Negócios",
    price: 199.99,
    featured: true
  },
  {
    id: 3,
    title: "Startup Meetup",
    description: "Encontro para empreendedores e investidores do ecossistema de startups brasileiro.",
    date: new Date(Date.now() + 86400000 * 21).toISOString(),
    time: "19:00 - 22:00",
    location: "WeWork Paulista",
    maxAttendees: 100,
    imageUrl: "/events/startup-meetup.jpg",
    category: "Empreendedorismo",
    price: 99.99,
    featured: false
  }
];

export const teamMembers = [
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
