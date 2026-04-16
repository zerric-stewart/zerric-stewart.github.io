const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Python", "PostgreSQL", "Tailwind CSS", "Git",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-400 leading-relaxed mb-4">
              I&apos;m a developer passionate about building things for the web.
              I enjoy working across the full stack — from crafting intuitive
              UIs to designing efficient back-end systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not writing code, I&apos;m exploring new
              technologies, contributing to open source, or working on personal
              projects that challenge me to grow.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Technologies I work with</h3>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <span className="text-violet-500">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
