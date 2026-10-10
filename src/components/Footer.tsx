const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Gym', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#C89B52]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="font-['Oswald'] font-bold text-3xl text-[#C89B52] tracking-wider leading-none">AF</div>
              <div className="h-6 w-px bg-[#A7A7A7]/30"></div>
              <div className="font-['Oswald'] font-medium text-xl tracking-widest text-[#F5F1E9] uppercase">Assault Fitness</div>
            </div>
            <p className="font-['Oswald'] text-[#A7A7A7] tracking-[0.2em] uppercase text-sm mb-2">
              Strength. Precision. Control.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1 text-center">
            <h4 className="font-['Oswald'] text-[#F5F1E9] text-lg uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-3">
              <p className="text-[#A7A7A7]">Sangrur, Punjab, India.</p>
              <a href="tel:+918264166630" className="block text-[#C89B52] hover:text-[#E6C58A] transition-colors">
                +91 82641 66630
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="col-span-1 md:col-span-1 text-center md:text-right">
            <h4 className="font-['Oswald'] text-[#F5F1E9] text-lg uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#A7A7A7] hover:text-[#C89B52] transition-colors text-sm uppercase tracking-widest">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-[#A7A7A7]/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A7A7A7]/60 text-sm">
            &copy; {currentYear} Assault Fitness. All rights reserved.
          </p>
          <p className="text-[#A7A7A7]/60 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B52]"></span>
            LGBTQ+ Friendly Space
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
