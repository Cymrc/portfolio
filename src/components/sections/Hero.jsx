function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 bg-stone-50 px-4 text-center sm:px-6 lg:px-8"
    >
      <div className="flex max-w-2xl flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl">
          Alex John L. Tulen
        </h1>

        <h2 className="text-xl font-semibold text-stone-700 sm:text-2xl">
          IT Student & Aspiring Full-Stack Developer
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base">
          I'm an IT student building practical software and working toward
          becoming a full-stack developer.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-md bg-amber-700 px-5 py-2.5 text-white transition-colors duration-200 hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-amber-700 focus-visible:outline-offset-2"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-md border border-amber-600 px-5 py-2.5 text-amber-700 transition-colors duration-200 hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-amber-700 focus-visible:outline-offset-2"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

