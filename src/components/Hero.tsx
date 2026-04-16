export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
        Hello, I&apos;m
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Zerric Stewart
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-8">
        Full Stack Developer
      </h2>
      <p className="max-w-xl text-gray-500 text-base leading-relaxed mb-10">
        I build clean, performant web applications with a focus on great user
        experiences and solid engineering.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
