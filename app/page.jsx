// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';
import Team from '@/components/Team';

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Team />
      <Reviews />
      <Cta />
    </main>
  );
}
