import profileImage from "../assets/eidy-profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <p className="tag">Hola soy Eidimice Manzo</p>

          <h1>Desarrolladora Full Stack Junior</h1>

          <p className="hero-text">
            Especializada en Java, Spring Boot, Angular y React, con experiencia
            en el desarrollo de aplicaciones web, APIs REST y bases de datos SQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              Ver proyectos
            </a>

            <a
              href="/cv-EManzo.pdf"
              className="btn secondary"
              download
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