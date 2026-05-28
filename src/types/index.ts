import type { ReactNode, ButtonHTMLAttributes } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;

  icon: 'facebook' | 'instagram' | 'linkedin' | 'tiktok';
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: ServiceIconName;
}

export type ServiceIconName =
  | 'code'
  | 'smartphone'
  | 'palette'
  | 'cloud'
  | 'layers'
  | 'server'
  | 'shield'
  | 'check-circle'
  | 'headphones';

export interface IndustryItem {
  id: string;
  label: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
export interface BrandLogo {
  name: string;
  logoSrc: string;
  color?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

/* ---------- Form ---------- */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}
