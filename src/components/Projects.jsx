function Projects() {
  const projects = [
    {
      title: "TechFix",
      status: "Proyecto académico destacado",
      description:
        "Aplicación Full Stack para la gestión integral de reparaciones informáticas, desarrollada con Java, Spring Boot, Angular y SQL.",

      technologies: [
        "Java",
        "Spring Boot",
        "Angular",
        "TypeScript",
        "SQL",
        "Bootstrap",
        "Postman",
      ],

      features: [
        "CRUD completo",
        "API REST",
        "Diseño Responsive",
        "Base de datos SQL",
        "Testing con Postman",
      ],

      github: "https://github.com/eidymanzo/TechFix",
      demo: "#",
    },

    {
      title: "DevLab",
      status: "Proyecto personal",
      description:
        "Blog técnico desarrollado con React y Vite donde documento conocimientos, proyectos y aprendizajes relacionados con desarrollo web, JavaScript y tecnologías cloud.",

      technologies: [
        "React",
        "Vite",
        "React Router",
        "JavaScript",
        "MockAPI",
        "CSS3",
        "Netlify",
      ],

      features: [
        "Blog técnico",
        "Filtrado por categorías",
        "Componentes reutilizables",
        "Diseño responsive",
        "Deploy en Netlify",
      ],

      github: "https://github.com/eidymanzo/devlab-react-blog",
      demo:  "https://devlab-react-blog.netlify.app/",
    }

  ];

  return (
    <section id="projects" className="section">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span className="project-status">{project.status}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>



            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver código
              </a>

              {project.demo === "#" ? (
                <a href="#">Demo próximamente</a>
              ) : (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;