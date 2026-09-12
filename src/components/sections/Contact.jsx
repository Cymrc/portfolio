import { useState } from "react";

function Contact() {
  const email = "alextulen21@gmail.com";

  const github = "https://github.com/Cymrc";

  const linkedin = "https://www.linkedin.com/in/alex-john-tulen-209043360/";

  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");

    const formData = new FormData(event.target);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

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
    <section id="contact" className="px-4 py-20">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-stone-800">Contact</h2>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${email}`}
            className="text-amber-700 hover:underline"
          >
            Email
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:underline"
          >
            GitHub
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:underline"
          >
            LinkedIn
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>

            <input id="name" name="name" type="text" required />
          </div>

          <div>
            <label htmlFor="email">Email</label>

            <input id="email" name="email" type="email" required />
          </div>

          <div>
            <label htmlFor="message">Message</label>

            <textarea id="message" name="message" required />
          </div>

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p>Message sent!</p>}

          {status === "error" && (
            <p>Something went wrong. Try emailing me directly instead.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
