import './home.scss';
import { Header } from '../components/header/Header';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Services } from '../components/services/Services';
import { Gallery } from '../components/gallery/Gallery';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/footer/Footer';

export function Home() {
  return (
    <div className="landing-page">
      <Header />

      <main>
        <Hero />

        <About />

        <Services />

        <Gallery />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
