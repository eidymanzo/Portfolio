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
    },

    {
      title: "Developer Knowledge Hub",
      status: "En desarrollo",
      description:
        "Plataforma web de contenidos técnicos para desarrolladores.",

      technologies: [
        "React",
        "Node.js",
        "Express",
        "JavaScript",
      ],

      features: [
        "Blog técnico",
        "Frontend en React",
        "Backend con Node.js",
        "Diseño responsive",
      ],
    },
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
              <li>✓ CRUD completo</li>
              <li>✓ API REST</li>
              <li>✓ Diseño Responsive</li>
              <li>✓ Base de datos SQL</li>
              <li>✓ Testing con Postman</li>
            </ul>



            <div className="project-links">
              <a
                href="https://github.com/eidymanzo/TechFix"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver código
              </a>

              <a href="#">
                Demo próximamente
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;