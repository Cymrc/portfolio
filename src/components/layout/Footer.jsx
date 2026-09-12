function Footer() {
  const year = new Date().getFullYear();

  const github = "https://github.com/Cymrc";
  const linkedin = "https://www.linkedin.com/in/alex-john-tulen-209043360/";

  return (
    <footer className="px-4 py-8 text-center">
      <p className="text-sm text-stone-600">© {year} Alex John L. Tulen</p>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-amber-700 hover:underline"
        >
          GitHub
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-amber-700 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
