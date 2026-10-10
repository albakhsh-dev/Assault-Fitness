import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Gym', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#C89B52]/30 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="font-['Oswald'] font-bold text-2xl text-[#C89B52] tracking-wider leading-none">AF</div>
            <div className="h-6 w-px bg-[#A7A7A7]/30"></div>
            <div className="font-['Oswald'] font-medium text-lg tracking-widest text-[#F5F1E9] uppercase">Assault Fitness</div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-[#F5F1E9] hover:text-[#C89B52] transition-colors tracking-widest uppercase">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2 bg-[#C89B52] text-[#0B0B0B] font-bold text-sm tracking-widest uppercase hover:bg-[#E6C58A] transition-colors rounded-sm">
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#F5F1E9] focus:outline-none" aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171717] border-b border-[#C89B52]/30 absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-4 text-base font-medium text-[#F5F1E9] border-b border-[#A7A7A7]/10 uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block mt-6 px-3 py-3 text-center bg-[#C89B52] text-[#0B0B0B] font-bold text-sm tracking-widest uppercase rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
