import useScrollReveal from "../../hooks/useScrollReveal";

function ThankYou() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`min-h-[70vh] flex items-center justify-center px-4 py-20 transition-all duration-700 motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-stone-200/80 shadow-xs text-center flex flex-col items-center gap-6">
        {/* Subtle Checkmark Badge */}
        <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">
            Thank You!
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            Your message has been sent successfully. I appreciate you reaching
            out and will get back to you as soon as possible.
          </p>
        </div>

        <a
          href="/"
          className="inline-flex items-center justify-center w-full rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-stone-900 focus-visible:outline-offset-2 cursor-pointer shadow-xs"
        >
          Return to Home
        </a>
      </div>
    </section>
  );
}

export default ThankYou;
