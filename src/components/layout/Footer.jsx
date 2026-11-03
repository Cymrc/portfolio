function Footer() {
  const year = new Date().getFullYear();

  const github = "https://github.com/Cymrc";
  const linkedin = "https://www.linkedin.com/in/alex-john-tulen-209043360/";

  return (
    <footer className="border-t border-stone-200/80 bg-stone-50 px-4 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs font-medium text-stone-500">
          © {year} Alex John L. Tulen. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-stone-700 border border-stone-200 shadow-xs hover:border-stone-400 transition-all duration-200"
          >
            GitHub
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white text-stone-700 border border-stone-200 shadow-xs hover:border-stone-400 transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
