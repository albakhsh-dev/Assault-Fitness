import { MapPin, ArrowUp, MessageCircle } from 'lucide-react';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C89B52]/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-7xl font-['Oswald'] font-bold text-[#F5F1E9] uppercase mb-6">
          Ready to Show Up?
        </h2>
        <p className="text-[#A7A7A7] text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light">
          Get in touch with Assault Fitness and find your way to the gym.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
          <a 
            href="https://wa.me/918264166630?text=Hi%20Assault%20Fitness!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto group flex items-center justify-center gap-3 px-8 py-5 bg-[#C89B52] hover:bg-[#E6C58A] text-[#0B0B0B] font-bold tracking-widest uppercase transition-all rounded-sm"
          >
            <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            WhatsApp Us
          </a>

          <a 
            href="https://www.google.com/maps/place/Assault+Fitness/@30.2512237,75.8406318,17z/data=!3m1!4b1!4m6!3m5!1s0x3910516849f555f1:0x1488ea5cef03df2b!8m2!3d30.2512191!4d75.8432067!16s%2Fg%2F11zc0ns0lw?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto group flex items-center justify-center gap-3 px-8 py-5 border border-[#C89B52] text-[#F5F1E9] hover:bg-[#C89B52]/10 font-bold tracking-widest uppercase transition-all rounded-sm"
          >
            <MapPin size={20} className="group-hover:scale-110 transition-transform" />
            Directions
          </a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-3 mx-auto text-[#A7A7A7] hover:text-[#C89B52] transition-colors focus:outline-none"
          aria-label="Scroll back to top"
        >
          <div className="p-3 border border-[#A7A7A7]/30 rounded-full group-hover:border-[#C89B52] transition-colors">
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </div>
          <span className="font-['Oswald'] text-sm tracking-[0.2em] uppercase">Back To Top</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
