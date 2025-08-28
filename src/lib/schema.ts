import { z } from "zod";

// Event Schema
export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  time: z.string(),
  location: z.string(),
  capacity: z.number(),
  attendees: z.number(),
  imageUrl: z.string().optional(),
  category: z.string(),
  price: z.number().optional(),
  organizer: z.string(),
  status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]),
});

export const insertEventSchema = eventSchema.omit({ id: true });

export type Event = z.infer<typeof eventSchema>;

// Exhibitor Schema
export const exhibitorSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  industry: z.string(),
  website: z.string().url().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  location: z.string(),
  logo: z.string().optional(),
  boothNumber: z.string().optional(),
  socialMedia: z.object({
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    facebook: z.string().url().optional(),
  }).optional(),
});

export const insertExhibitorSchema = exhibitorSchema.omit({ id: true });

export type Exhibitor = z.infer<typeof exhibitorSchema>;

// News Schema
export const newsSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  publishDate: z.string(),
  imageUrl: z.string().optional(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
});

export const insertNewsSchema = newsSchema.omit({ id: true });

export type News = z.infer<typeof newsSchema>;

// Contact Schema
export const contactSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  createdAt: z.string(),
});

export const insertContactSchema = contactSchema.omit({ id: true, createdAt: true });

export type Contact = z.infer<typeof contactSchema>;

// Ticket Schema
export const ticketSchema = z.object({
  id: z.string(),
  eventId: z.string(),
  attendeeName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  attendeeEmail: z.string().email("Email inválido"),
  ticketType: z.enum(["vip", "standard", "student"]),
  quantity: z.number().min(1, "Quantidade deve ser pelo menos 1"),
  totalPrice: z.number().min(0, "Preço deve ser positivo"),
  status: z.enum(["pending", "confirmed", "cancelled"]),
  purchaseDate: z.string(),
});

export const insertTicketSchema = ticketSchema.omit({ id: true, purchaseDate: true });

export type Ticket = z.infer<typeof ticketSchema>;
