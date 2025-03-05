import mosqueImage from '../../assets/mosque.jpg';

import "./hero.scss";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Um lugar de paz e respeito</h2>
        <p>O Cemitério Islâmico oferece um local de descanso final sereno e digno, seguindo os preceitos da tradição islâmica.</p>
        <button>Entre em contato</button>
      </div>
      <div className="hero-image">
        <img src={mosqueImage} alt="Mesquita do cemitério" />
      </div>
    </section>
  );
}
