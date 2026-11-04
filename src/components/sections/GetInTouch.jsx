import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

function GetInTouch() {
  const { ref, isVisible } = useScrollReveal();

  const email = "alextulen21@gmail.com";
  const github = "https://github.com/Cymrc";
  const linkedin = "https://www.linkedin.com/in/alex-john-tulen-209043360/";

  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.target);
    if (WEB3FORMS_ACCESS_KEY) {
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      id="GetInTouch"
      className={`px-4 py-20 transition-all duration-700 motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">
            Contact
          </h2>
          <p className="text-stone-500 mt-1 text-sm">
            Have a project in mind or want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-medium bg-white text-stone-700 border border-stone-200 shadow-xs hover:border-stone-400 transition-all duration-200"
          >
            Email
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-medium bg-white text-stone-700 border border-stone-200 shadow-xs hover:border-stone-400 transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-medium bg-white text-stone-700 border border-stone-200 shadow-xs hover:border-stone-400 transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>

        {status === "success" ? (
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200/80 shadow-xs text-center flex flex-col items-center gap-6">
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
              <h3 className="text-xl font-bold tracking-tight text-stone-900">
                Thank You!
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Your message has been sent successfully. I appreciate you
                reaching out and will get back to you as soon as possible.
              </p>
            </div>

            <button
              onClick={() => setStatus("idle")}
              className="inline-flex items-center justify-center w-full rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-stone-900 focus-visible:outline-offset-2 cursor-pointer shadow-xs"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-wider text-stone-500"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-stone-300 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 transition-colors focus:border-stone-800 focus:bg-white focus:outline-hidden"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-stone-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-stone-300 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 transition-colors focus:border-stone-800 focus:bg-white focus:outline-hidden"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wider text-stone-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-stone-300 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 transition-colors focus:border-stone-800 focus:bg-white focus:outline-hidden resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-stone-900 focus-visible:outline-offset-2 disabled:opacity-50 cursor-pointer shadow-xs"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite" className="text-center text-sm">
              {status === "error" && (
                <p className="text-rose-600 font-medium">
                  Something went wrong. Try emailing me directly instead.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default GetInTouch;
