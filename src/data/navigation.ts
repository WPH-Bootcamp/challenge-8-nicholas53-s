import type { NavItem, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'TikTok', href: '#', icon: 'tiktok' },
];

export const companyInfo = {
  name: 'Your Logo',
  tagline: 'Your Tech Partner for Smarter Growth',
  description:
    'We deliver tailored IT solutions to help you scale with speed and confidence.',
} as const;
