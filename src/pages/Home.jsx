import mosqueImage from '../assets/mosque.jpg';
import gravesImage from '../assets/graves.jpg';

import './home.scss';
import { Header } from '../components/header/Header';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Services } from '../components/services/Services';

export function Home() {
  return (
    <div className="landing-page">
      <Header />

      <main>
        <Hero />

        <About />

        <Services />

        <section className="gallery">
          <h2>Galeria</h2>
          <div className="gallery-images">
            <img src={gravesImage} alt="Túmulos no cemitério" />
            <img src={mosqueImage} alt="Mesquita do cemitério" />
            <img src={gravesImage} alt="Túmulos no cemitério" />
            <img src={mosqueImage} alt="Mesquita do cemitério" />
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contato</h2>
          <p>
            Para mais informações ou em caso de necessidade, entre em contato conosco. Estamos à disposição para atendê-lo com respeito e
            compaixão.
          </p>
          <p>Telefone: (11) 99999-9999</p>
          <p>Email: contato@cemiterioislamico.com.br</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Mesquita Brasil. Todos os direitos reservados. By RastaIT</p>
      </footer>
    </div>
  );
}
