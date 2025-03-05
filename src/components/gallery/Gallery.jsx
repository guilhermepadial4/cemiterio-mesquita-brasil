import mosqueImage from '../../assets/mosque.jpg';
import gravesImage from '../../assets/graves.jpg';

import './gallery.scss';

export function Gallery() {
  return (
    <section className="gallery">
      <h2>Galeria</h2>
      <div className="gallery-images">
        <img src={gravesImage} alt="Túmulos no cemitério" />
        <img src={mosqueImage} alt="Mesquita do cemitério" />
        <img src={gravesImage} alt="Túmulos no cemitério" />
        <img src={mosqueImage} alt="Mesquita do cemitério" />
      </div>
    </section>
  );
}
