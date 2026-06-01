function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "JavaScript",
    "TypeScript",
    "SQL",
    "MySQL",
    "SQL Server",
    "MongoDB",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "REST APIs",
  ];

  return (
    <section id="skills" className="section">
      <h2>Tecnologías</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;