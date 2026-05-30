import type { ServiceItem } from '../types';
import webIcon from '../Assets/Iconsection/Website.svg';
import mobileIcon from '../Assets/Iconsection/Mobile App Development.svg';
import uxIcon from '../Assets/Iconsection/UX.svg';
import cloudIcon from '../Assets/Iconsection/Cloud Solutions.svg';
import softwareIcon from '../Assets/Iconsection/Software Development.svg';
import itIcon from '../Assets/Iconsection/IT Infrastructure.svg';
import qaIcon from '../Assets/Iconsection/QA.svg';
import cybersecIcon from '../Assets/Iconsection/Cybersecurity Services.svg';
import consultingIcon from '../Assets/Iconsection/IT Consulting & Support.svg';

export const services: ServiceItem[] = [
  {
    id: 1,
    iconSrc: webIcon,
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites.',
  },
  {
    id: 2,
    iconSrc: mobileIcon,
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
  },
  {
    id: 3,
    iconSrc: uxIcon,
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces.',
  },
  {
    id: 4,
    iconSrc: cloudIcon,
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
  },
  {
    id: 5,
    iconSrc: softwareIcon,
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
  },
  {
    id: 6,
    iconSrc: itIcon,
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
  },
  {
    id: 7,
    iconSrc: qaIcon,
    title: 'Cybersecurity Services',
    description: 'Stay protected with enterprise-grade security.',
  },
  {
    id: 8,
    iconSrc: cybersecIcon,
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
  },
  {
    id: 9,
    iconSrc: consultingIcon,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
  },
];
