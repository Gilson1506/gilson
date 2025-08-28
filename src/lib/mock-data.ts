import type { Event, Exhibitor, News, Contact, Ticket } from "@shared/schema";

// Mock data for development and testing purposes
// Note: The actual application uses real data from the storage layer

export const mockEvents: Event[] = [
  {
    id: "mock-1",
    title: "Conferência Digital Brasil 2024",
    description: "O maior evento de transformação digital do país, reunindo líderes de tecnologia e inovação.",
    category: "Tecnologia",
    date: new Date("2024-12-10"),
    time: "09:00 - 18:00",
    location: "Centro de Convenções Anhembi - São Paulo, SP",
    price: 25000, // R$ 250.00
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: false,
    maxAttendees: 2000,
    currentAttendees: 847,
  },
  {
    id: "mock-2",
    title: "Expo Sustentabilidade 2024",
    description: "Feira focada em soluções sustentáveis e economia verde para empresas.",
    category: "Sustentabilidade",
    date: new Date("2024-11-25"),
    time: "10:00 - 17:00",
    location: "Expo Center Norte - São Paulo, SP",
    price: 0, // Gratuito
    imageUrl: "https://images.unsplash.com/photo-1569163139394-de44aa8c2559?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: false,
    maxAttendees: 1500,
    currentAttendees: 623,
  },
];

export const mockExhibitors: Exhibitor[] = [
  {
    id: "mock-exp-1",
    name: "Innovation Labs",
    description: "Laboratório de inovação especializado em soluções de IA e machine learning para empresas.",
    category: "Inteligência Artificial",
    employees: 75,
    standLocation: "Stand D-12, TechFair Brazil",
    logoUrl: "",
    contactEmail: "contato@innovationlabs.com.br",
    website: "https://innovationlabs.com.br",
  },
  {
    id: "mock-exp-2",
    name: "Green Solutions",
    description: "Consultoria em sustentabilidade empresarial e soluções ecológicas inovadoras.",
    category: "Sustentabilidade",
    employees: 120,
    standLocation: "Stand E-05, Expo Sustentabilidade",
    logoUrl: "",
    contactEmail: "info@greensolutions.com.br",
    website: "https://greensolutions.com.br",
  },
];

export const mockNews: News[] = [
  {
    id: "mock-news-1",
    title: "Mercado de Eventos Corporativos Cresce 25% em 2024",
    excerpt: "Setor registra forte recuperação pós-pandemia com foco em eventos híbridos e sustentáveis.",
    content: "O mercado brasileiro de eventos corporativos apresentou crescimento significativo...",
    category: "Mercado",
    publishDate: new Date("2024-11-10"),
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    featured: false,
  },
];

export const mockContacts: Contact[] = [
  {
    id: "mock-contact-1",
    name: "João Silva",
    email: "joao@empresa.com.br",
    company: "Tech Innovations",
    phone: "(11) 98765-4321",
    subject: "Parceria comercial",
    message: "Gostaria de discutir oportunidades de parceria para eventos de tecnologia.",
    submittedAt: new Date("2024-11-15"),
  },
];

export const mockTickets: Ticket[] = [
  {
    id: "mock-ticket-1",
    eventId: "mock-1",
    attendeeName: "Maria Santos",
    attendeeEmail: "maria@email.com",
    ticketType: "professional",
    price: 35000,
    qrCode: "QR-1731668400000-ABC123",
    purchaseDate: new Date("2024-11-15"),
  },
];

// Utility functions for working with mock data
export const getMockEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

export const getMockExhibitorById = (id: string): Exhibitor | undefined => {
  return mockExhibitors.find(exhibitor => exhibitor.id === id);
};

export const getMockEventsByCategory = (category: string): Event[] => {
  return mockEvents.filter(event => event.category === category);
};

export const getMockFeaturedEvents = (): Event[] => {
  return mockEvents.filter(event => event.featured);
};

// Price formatting utility
export const formatPrice = (priceInCents: number): string => {
  if (priceInCents === 0) return "Gratuito";
  return `R$ ${(priceInCents / 100).toFixed(0)}`;
};

// Date formatting utility
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

// Event categories for filtering
export const eventCategories = [
  "Todos",
  "Negócios", 
  "Tecnologia",
  "Educação",
  "Cultura",
  "Sustentabilidade",
  "Inovação"
];

// Exhibitor categories for filtering  
export const exhibitorCategories = [
  "Todas as Categorias",
  "Tecnologia",
  "Business Intelligence", 
  "Segurança Digital",
  "Consultoria",
  "Fintech",
  "Healthcare",
  "Inteligência Artificial",
  "Sustentabilidade"
];

// News categories
export const newsCategories = [
  "Tendências",
  "Inovação", 
  "Sustentabilidade",
  "Networking",
  "Mercado",
  "Tecnologia"
];

// Contact subjects
export const contactSubjects = [
  "Informações sobre eventos",
  "Parceria comercial",
  "Suporte técnico", 
  "Organização de evento personalizado",
  "Outros"
];

// Ticket types with pricing
export const ticketTypes = [
  {
    id: "visitor",
    name: "Visitante",
    basePrice: 15000, // R$ 150.00
    description: "Acesso básico ao evento"
  },
  {
    id: "professional", 
    name: "Profissional",
    basePrice: 35000, // R$ 350.00
    description: "Experiência completa"
  },
  {
    id: "vip",
    name: "VIP", 
    basePrice: 65000, // R$ 650.00
    description: "Acesso exclusivo"
  }
];
