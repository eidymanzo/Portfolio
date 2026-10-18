import profileImage from "../assets/eidy-profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <p className="tag">Hola soy Eidimice Manzo</p>

          <h1>
            Software Developer | Java · Spring Boot
            <br />
            Data Engineering & AI
          </h1>

          <p className="hero-text">
            <p className="hero-text">
              Software Developer specializing in Java, Spring Boot
              and REST APIs, with experience in Angular, React
              and SQL databases. Currently expanding my expertise
              in Data Engineering, Python, Artificial Intelligence
              and Microsoft Azure.
            </p>
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              Ver proyectos
            </a>

            <a
              href="/cv-EManzo.pdf?v=20261018"
              className="btn secondary"
              download="cv-EManzo.pdf"
            >
              Descargar CV
            </a>

            <a href="#contact" className="btn secondary">
              Contactar
            </a>
          </div>

        </div>

        <div className="hero-image-container">
          <img
            src={profileImage}
            alt="Foto de Eidimice Manzo"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;