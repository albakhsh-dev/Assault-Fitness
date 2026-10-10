import { MapPin, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2940&auto=format&fit=crop")' }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0B0B0B]/70 sm:bg-gradient-to-r sm:from-[#0B0B0B]/90 sm:to-[#0B0B0B]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C89B52]"></div>
            <span className="font-['Oswald'] text-[#C89B52] tracking-[0.2em] text-sm uppercase">Strength • Precision • Control</span>
          </div>
          
          {/* Headline */}
          <h1 className="font-['Oswald'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#F5F1E9] uppercase leading-[0.9] mb-6">
            Built For <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B52] to-[#E6C58A]">Strength.</span>
          </h1>
          
          {/* Supporting Text */}
          <p className="text-[#A7A7A7] text-lg sm:text-xl max-w-xl mb-10 font-light leading-relaxed">
            Step into a space designed for focus, discipline, and progress. Discover Assault Fitness in Sangrur.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <a 
              href="https://www.google.com/maps/place/Assault+Fitness/@30.2512237,75.8406318,17z/data=!3m1!4b1!4m6!3m5!1s0x3910516849f555f1:0x1488ea5cef03df2b!8m2!3d30.2512191!4d75.8432067!16s%2Fg%2F11zc0ns0lw?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#C89B52] hover:bg-[#E6C58A] text-[#0B0B0B] font-bold tracking-widest uppercase transition-all"
            >
              <MapPin size={18} className="group-hover:scale-110 transition-transform" />
              Find Our Gym
            </a>
            <a 
              href="https://wa.me/918264166630?text=Hi%20Assault%20Fitness!%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 border border-[#C89B52] text-[#F5F1E9] hover:bg-[#C89B52]/10 font-bold tracking-widest uppercase transition-all"
            >
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </a>
          </div>
          
          {/* Location Label */}
          <div className="flex items-center gap-2 text-[#A7A7A7] text-sm tracking-widest uppercase font-['Oswald']">
            <MapPin size={16} className="text-[#C89B52]" />
            Sangrur, Punjab
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
