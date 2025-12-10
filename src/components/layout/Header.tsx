import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(typeof window !== "undefined" ? window.location.pathname : "/");

  useEffect(() => {
    const updateActivePath = () => {
      setActivePath(window.location.pathname);
    };

    // Update on initial load
    updateActivePath();

    // Listen for browser navigation (back/forward buttons)
    window.addEventListener("popstate", updateActivePath);

    // Listen for link clicks (since we're using <a> tags, not React Router)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.href) {
        // Small delay to let the navigation happen
        setTimeout(updateActivePath, 0);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", updateActivePath);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project Gallery", href: "/gallery" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return activePath === "/";
    }
    return activePath.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="relative">
        <div className="flex items-center justify-between mt-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-r-full px-4 md:px-8 py-2 flex items-center gap-2 shadow-sm h-12 md:h-16">
              <Leaf className="h-6 w-6 text-brand-primary" />
              <span className="text-brand-primary font-semibold md:text-lg">URBAN AGRO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-brand-primary rounded-l-full px-6 py-3 shadow-lg">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 rounded-full",
                  isActive(link.href) ? "bg-white/10" : "",
                  index !== navLinks.length - 1 ? "mr-1" : ""
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 mr-4 bg-brand-primary rounded-lg text-white hover:bg-brand-primary-dark shadow-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <nav className="absolute top-full right-0 mt-2 bg-brand-primary rounded-lg shadow-lg border border-white/10 md:hidden overflow-hidden w-full">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-white border-b border-white/10 last:border-b-0 transition-colors hover:bg-white/10",
                    isActive(link.href) ? "bg-gray-100/10" : ""
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
