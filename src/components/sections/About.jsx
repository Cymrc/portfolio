import useScrollReveal from "../../hooks/useScrollReveal";

function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="about"
      className={`px-4 py-20 transition-all duration-700 motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">
            About Me
          </h2>
          <p className="text-stone-500 mt-1 text-sm">
            A short background on what I do and where I'm headed.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col gap-4 text-stone-600 leading-relaxed text-sm sm:text-base">
          <p>
            I'm an IT student interested in building practical software and
            learning how applications work from frontend to backend[cite: 5]. I'm currently
            improving my skills in web development, JavaScript, React, databases,
            backend development, and software development fundamentals[cite: 5].
          </p>
          <p>
            My long-term goal is to become a full-stack developer while
            continuing to explore mobile development and other areas of
            technology[cite: 5].
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;