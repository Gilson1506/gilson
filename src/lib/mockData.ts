import type { Event, News } from "./schema";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Tech Summit 2024",
    description: "A maior conferência de tecnologia do ano, reunindo especialistas e inovadores da indústria.",
    date: "2024-12-10",
    time: "09:00",
    location: "Centro de Convenções de Luanda",
    category: "Tecnologia",
    organizer: "Tech Angola",
    status: "upcoming",
    capacity: 500,
    attendees: 350,
    imageUrl: "/events/tech-summit.jpg",
    price: 50000,
    featured: true,
    maxParticipants: 500,
  },
  {
    id: "2",
    title: "Networking Empresarial",
    description: "Evento focado em conectar empresários e profissionais de diferentes setores.",
    date: "2024-11-25",
    time: "18:00",
    location: "Hotel Talatona",
    category: "Networking",
    organizer: "Business Connect",
    status: "upcoming",
    capacity: 200,
    attendees: 120,
    imageUrl: "/events/networking.jpg",
    price: 25000,
    featured: true,
    maxParticipants: 200,
  },
  {
    id: "3",
    title: "Workshop de Marketing Digital",
    description: "Aprenda as melhores estratégias de marketing digital para impulsionar seu negócio.",
    date: "2024-12-15",
    time: "14:00",
    location: "Centro de Inovação",
    category: "Marketing",
    organizer: "Digital Academy",
    status: "upcoming",
    capacity: 100,
    attendees: 75,
    imageUrl: "/events/marketing-workshop.jpg",
    price: 15000,
    featured: false,
    maxParticipants: 100,
  }
];

export const mockNews: News[] = [
  {
    id: "1",
    title: "Tecnologia Revoluciona o Mercado Angolano",
    content: "A adoção de novas tecnologias está transformando rapidamente o cenário empresarial em Angola, criando oportunidades sem precedentes para inovação e crescimento.",
    category: "Tecnologia",
    author: "Maria Silva",
    publishDate: "2024-11-10",
    imageUrl: "/news/tech-revolution.jpg",
    tags: ["tecnologia", "inovação", "mercado"],
    featured: true,
    excerpt: "A adoção de novas tecnologias está transformando rapidamente o cenário empresarial em Angola..."
  },
  {
    id: "2",
    title: "Eventos Corporativos em Ascensão",
    content: "O mercado de eventos corporativos em Angola registrou crescimento recorde no último trimestre, impulsionado pela retomada das atividades presenciais.",
    category: "Eventos",
    author: "João Santos",
    publishDate: "2024-11-08",
    imageUrl: "/news/corporate-events.jpg",
    tags: ["eventos", "corporativo", "crescimento"],
    featured: false,
    excerpt: "O mercado de eventos corporativos em Angola registrou crescimento recorde..."
  },
  {
    id: "3",
    title: "Inovação Sustentável",
    content: "Empresas angolanas estão liderando o caminho em soluções sustentáveis e práticas empresariais responsáveis.",
    category: "Sustentabilidade",
    author: "Ana Costa",
    publishDate: "2024-11-05",
    imageUrl: "/news/sustainable-innovation.jpg",
    tags: ["sustentabilidade", "inovação", "responsabilidade"],
    featured: false,
    excerpt: "Empresas angolanas estão liderando o caminho em soluções sustentáveis..."
  }
];

export function getFeaturedEvents(): Event[] {
  return mockEvents.filter(event => event.featured);
}

export function getUpcomingEvents(): Event[] {
  return mockEvents.filter(event => event.status === "upcoming");
}

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
