import type { Event, Exhibitor, News, Contact, Ticket } from "./schema";

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

export const mockExhibitors: Exhibitor[] = [
  {
    id: "1",
    name: "Tech Innovations",
    email: "contato@techinnovations.ao",
    location: "Luanda, Angola",
    description: "Empresa líder em soluções tecnológicas inovadoras para o mercado africano.",
    industry: "Tecnologia",
    category: "Inteligência Artificial",
    website: "https://techinnovations.ao",
    phone: "+244 123 456 789",
    logo: "/exhibitors/tech-innovations.png",
    boothNumber: "A1",
    standLocation: "Pavilhão A, Stand 1",
    employees: 150,
    socialMedia: {
      linkedin: "https://linkedin.com/company/techinnovations",
      twitter: "https://twitter.com/techinnovations",
      facebook: "https://facebook.com/techinnovations"
    }
  },
  {
    id: "2",
    name: "Green Solutions",
    email: "info@greensolutions.ao",
    location: "Benguela, Angola",
    description: "Especialistas em soluções sustentáveis e energia renovável.",
    industry: "Sustentabilidade",
    category: "Energia Renovável",
    website: "https://greensolutions.ao",
    phone: "+244 987 654 321",
    logo: "/exhibitors/green-solutions.png",
    boothNumber: "B2",
    standLocation: "Pavilhão B, Stand 2",
    employees: 80,
    socialMedia: {
      linkedin: "https://linkedin.com/company/greensolutions",
      twitter: "https://twitter.com/greensolutions"
    }
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
  }
];

export const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Ana Costa",
    email: "ana.costa@empresa.ao",
    message: "Gostaria de obter mais informações sobre os próximos eventos.",
    subject: "Informações sobre Eventos",
    createdAt: "2024-11-15",
    company: "Tech Innovations",
  },
  {
    id: "2",
    name: "Carlos Mendes",
    email: "carlos.mendes@startup.ao",
    message: "Interessado em participar como expositor no próximo evento.",
    subject: "Participação como Expositor",
    createdAt: "2024-11-14",
  }
];

export const mockTickets: Ticket[] = [
  {
    id: "1",
    status: "confirmed",
    eventId: "1",
    attendeeName: "Maria Silva",
    attendeeEmail: "maria.silva@email.ao",
    ticketType: "vip",
    quantity: 1,
    totalPrice: 50000,
    purchaseDate: "2024-11-15",
    qrCode: "QR123456789",
  },
  {
    id: "2",
    status: "pending",
    eventId: "2",
    attendeeName: "João Santos",
    attendeeEmail: "joao.santos@email.ao",
    ticketType: "standard",
    quantity: 2,
    totalPrice: 50000,
    purchaseDate: "2024-11-14",
  }
];

export function getFeaturedEvents(): Event[] {
  return mockEvents.filter(event => event.featured);
}

export function getUpcomingEvents(): Event[] {
  return mockEvents.filter(event => event.status === "upcoming");
}
