const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Terms And Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Return Policy", href: "/return" },
];

const socialLinks = [
  { name: "Facebook", icon: "/assets/facebook.svg", href: "#" },
  { name: "LinkedIn", icon: "/assets/linkedin.svg", href: "#" },
  { name: "Instagram", icon: "/assets/instagram.svg", href: "#" },
];

function Footer() {
  return (
    <footer className="relative w-full bg-white py-12 md:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          {/* Company Links Section */}
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Company</h3>
            <nav className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base md:text-lg text-gray-700 hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Stay Connected Section */}
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Stay Connected</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 hover:bg-brand-primary transition-colors flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 md:w-6 md:h-6 group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm md:text-base text-gray-600">
            © {new Date().getFullYear()} Urban Agro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

