function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <h2 className="logo">Eidimice Manzo</h2>
        <p className="subtitle">
          Java • Spring Boot • Angular • React
        </p>

      </div>

      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#skills">Tecnologías</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;