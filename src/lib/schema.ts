import { z } from "zod";

// Event Schema
export const EventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  time: z.string(),
  location: z.string(),
  category: z.string(),
  organizer: z.string(),
  status: z.enum(["upcoming", "ongoing", "completed", "cancelled"]),
  capacity: z.number(),
  attendees: z.number(),
  imageUrl: z.string().optional(),
  price: z.number().optional(),
  featured: z.boolean().optional(),
  maxParticipants: z.number().optional(),
});

// Exhibitor Schema
export const ExhibitorSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  location: z.string(),
  description: z.string(),
  industry: z.string(),
  category: z.string().optional(),
  website: z.string().optional(),
  phone: z.string().optional(),
  logo: z.string().optional(),
  boothNumber: z.string().optional(),
  standLocation: z.string().optional(),
  employees: z.number().optional(),
  socialMedia: z.object({
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    facebook: z.string().optional(),
  }).optional(),
});

// News Schema
export const NewsSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  category: z.string(),
  author: z.string(),
  publishDate: z.string(),
  imageUrl: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  excerpt: z.string().optional(),
});

// Contact Schema
export const ContactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  message: z.string(),
  subject: z.string(),
  createdAt: z.string(),
  company: z.string().optional(),
});

// Ticket Schema
export const TicketSchema = z.object({
  id: z.string(),
  status: z.enum(["pending", "confirmed", "cancelled"]),
  eventId: z.string(),
  attendeeName: z.string(),
  attendeeEmail: z.string(),
  ticketType: z.enum(["vip", "standard", "student", "professional"]),
  quantity: z.number(),
  totalPrice: z.number(),
  purchaseDate: z.string(),
  qrCode: z.string().optional(),
});

// Team Member Schema
export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  image: z.string().optional(),
  description: z.string(),
  social: z.object({
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
  }).optional(),
});

export type Event = z.infer<typeof EventSchema>;
export type Exhibitor = z.infer<typeof ExhibitorSchema>;
export type News = z.infer<typeof NewsSchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Ticket = z.infer<typeof TicketSchema>;
export type TeamMember = z.infer<typeof TeamMemberSchema>;
