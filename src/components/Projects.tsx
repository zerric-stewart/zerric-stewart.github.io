const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application with user authentication, real-time updates, and a responsive dashboard.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Beta",
    description:
      "A REST API service built with Node.js and Express, featuring rate limiting, caching, and comprehensive logging.",
    tags: ["Node.js", "Express", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Gamma",
    description:
      "A modern UI component library built with React and Tailwind CSS, published to npm and documented with Storybook.",
    tags: ["React", "Tailwind CSS", "Storybook"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-violet-800 transition-colors"
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-violet-400 bg-violet-950 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={project.demo}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
