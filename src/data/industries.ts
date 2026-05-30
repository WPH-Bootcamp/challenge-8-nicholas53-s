import type { IndustryItem } from '../types';
import FintechImg from '../Assets/Industry/Fintech.svg';
import ECommerceImg from '../Assets/Industry/E-commerce.svg';
import HealthcareImg from '../Assets/Industry/Healthcare.svg';

export const industries: IndustryItem[] = [
  {
    id: 'Fintech',
    label: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: FintechImg,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: ECommerceImg,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: HealthcareImg,
  },
];
