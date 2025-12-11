import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project Gallery", href: "/gallery" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="relative">
        <div className="flex items-center justify-between mt-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white rounded-r-full px-4 md:px-8 py-2 flex items-center gap-2 shadow-sm h-12 md:h-16">
              <Leaf className="h-6 w-6 text-brand-primary" />
              <span className="text-brand-primary font-semibold md:text-lg">URBAN AGRO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-brand-primary rounded-l-full px-6 py-3 shadow-lg">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 rounded-full",
                  isActive(link.href) ? "bg-white/10" : "",
                  index !== navLinks.length - 1 ? "mr-1" : ""
                )}
              >
                {link.name}
              </Link>
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
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-white border-b border-white/10 last:border-b-0 transition-colors hover:bg-white/10",
                    isActive(link.href) ? "bg-gray-100/10" : ""
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
