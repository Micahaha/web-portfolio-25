const projects = [
  {
    title: "Blog Website",
    description:
      "A web platform built with ASP.NET Core 6, Bootstrap, and SQL (via Entity Framework) that enables users to create, comment on, and interact with blog posts. It features role-based access controls for administrators to manage content, ensuring structured interaction and community engagement.",
    tech: ["C#", "MySQL", "ASP.NET", "Docker"],
    status: "Disabled for now",
  },
  {
    title: "BuildMyPhysique.io",
    description:
      "A full-stack fitness web app built with ASP.NET Core, Angular, and a locally integrated LLM. It generates personalized workout routines based on user goals, equipment, and availability, with secure JWT authentication and EF Core persistence so users can save and revisit plans for ongoing fitness tracking.",
    tech: ["Node.js", "React", "MongoDB", "Docker"],
    status: "In Progress",
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="font-mono text-muted-foreground mb-4">{">"} find ./projects -type f -name "*.md"</div>
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border-l-2 border-muted pl-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-mono text-lg">{project.title}</h3>
                <span className="text-xs text-muted-foreground font-mono">[{project.status}]</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs text-muted-foreground font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
