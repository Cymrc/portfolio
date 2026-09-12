import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* Brand Name Link */}
        <a
          href="#hero"
          onClick={handleLinkClick}
          className="text-base font-bold text-stone-800 transition-colors duration-200 hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-amber-700 focus-visible:outline-offset-2 sm:text-lg"
        >
          Alex John L. Tulen
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-700 transition-colors duration-200 hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-amber-700 focus-visible:outline-offset-2"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          className="rounded-md border border-stone-300 px-3 py-1.5 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-amber-700 focus-visible:outline-offset-2 md:hidden"
        >
          <span className="text-base font-bold leading-none select-none">
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-stone-200/80 bg-stone-50 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-md px-3 py-2 text-base font-medium text-stone-700 transition-colors duration-200 hover:bg-stone-100 hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-amber-700"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
