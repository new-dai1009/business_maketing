import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import NewsUpdates from '@/components/NewsUpdates';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Banner />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <Partners />
      <NewsUpdates />
      {/* <Team /> */}
      <Footer />
    </main>
  );
} 