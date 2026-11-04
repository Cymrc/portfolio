import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "GetInTouch", href: "#GetInTouch" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/80 backdrop-blur-md">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6"
      >
        {/* Brand Name Link */}
        <a
          href="#hero"
          onClick={handleLinkClick}
          className="text-sm font-bold tracking-tight text-stone-900 transition-colors duration-200 hover:text-stone-600 focus-visible:outline-2 focus-visible:outline-stone-900 focus-visible:outline-offset-2 sm:text-base"
        >
          Alex John L. Tulen
        </a>

        {/* Desktop Navigation Links & Resume CTA */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-stone-500 transition-colors duration-200 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-stone-900 focus-visible:outline-offset-2"
            >
              {link.name}
            </a>
          ))}

          {/* Desktop Resume Button (Amber Theme) */}
          <a
            href="/Tulen_AlexJohn.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-amber-700 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-amber-700 focus-visible:outline-offset-2"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          className="rounded-lg border border-stone-300 p-2 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-stone-900 focus-visible:outline-offset-2 md:hidden"
        >
          <span className="text-sm font-bold leading-none select-none">
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-stone-200/80 bg-stone-50 px-4 py-4 md:hidden shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition-colors duration-200 hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-stone-900"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Resume Button (Amber Theme) */}
            <a
              href="/Tulen_AlexJohn.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-2 block w-full rounded-lg bg-amber-700 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-amber-700"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
