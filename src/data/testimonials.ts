import type { Testimonial } from '../types';
import sarahAvatar from '../Assets/Testimonials/Sarah Tan.png';
import emilyAvatar from '../Assets/Testimonials/Emily Chen.png';
import johnAvatar from '../Assets/Testimonials/John Lee.png';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'They were a true game-changer for our project. The team turned it into reality efficiently and effectively.',
    name: 'John Lee',
    role: 'CTO at Innovate Corp',
    avatar: johnAvatar,
    stars: 5,
  },
  {
    id: 2,
    quote:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    avatar: sarahAvatar,
    stars: 5,
  },
  {
    id: 3,
    quote:
      'The collaboration was seamless and exceeded our expectations. Their expertise made the project successful and impactful.',
    name: 'Emily Cho',
    role: 'Marketing Head at TrendCo',
    avatar: emilyAvatar,
    stars: 5,
  },
];
