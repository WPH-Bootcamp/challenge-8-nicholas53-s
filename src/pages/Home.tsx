import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { BrandsSection } from '../components/sections/BrandsSection';
import { StatsSection } from '../components/sections/StatsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { IndustrySection } from '../components/sections/IndustrySection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';

export function Home() {
  return (
    <div className='min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300'>
      <Navbar />

      <main>
        <HeroSection /> {/* 1. Headline + CTA           */}
        <BrandsSection /> {/* 2. Trust signals (brands)   */}
        <StatsSection /> {/* 3. Numbers proof            */}
        <ProcessSection /> {/* 4. How we work              */}
        <ServicesSection /> {/* 5. What we offer            */}
        <IndustrySection /> {/* 6. Who we serve             */}
        <PortfolioSection /> {/* 7. Past work proof          */}
        <TestimonialsSection /> {/* 8. Client voice proof       */}
        <FAQSection /> {/* 9. Address objections       */}
        <ContactSection /> {/* 10. Final CTA conversion    */}
      </main>

      <Footer />
    </div>
  );
}
