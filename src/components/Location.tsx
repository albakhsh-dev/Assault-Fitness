import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#171717] border-y border-[#A7A7A7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Location Info */}
          <div>
            <h2 className="text-[#C89B52] font-['Oswald'] tracking-[0.2em] uppercase text-sm mb-4">
              Your Next Session Starts Here.
            </h2>
            <h3 className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[#F5F1E9] uppercase mb-10">
              Find Your Strength.
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#C89B52] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-['Oswald'] font-bold text-[#F5F1E9] uppercase tracking-wider mb-2">Address</h4>
                  <p className="text-[#A7A7A7] leading-relaxed">
                    Assault Fitness<br/>
                    Madanjeet Kothi Road, above Blinkit, opposite Housing Board Colony, Mubarik Mehal Colony,<br/>
                    Sangrur, Punjab 148001, India.
                  </p>
                  <p className="text-[#A7A7A7] mt-2 text-sm">
                    Plus Code: 7R2V+F7 Sangrur, Punjab
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#C89B52] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-['Oswald'] font-bold text-[#F5F1E9] uppercase tracking-wider mb-2">Contact</h4>
                  <a href="tel:+918264166630" className="text-[#A7A7A7] hover:text-[#C89B52] transition-colors leading-relaxed block">
                    +91 82641 66630
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[#C89B52] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-['Oswald'] font-bold text-[#F5F1E9] uppercase tracking-wider mb-2">Hours</h4>
                  <p className="text-[#A7A7A7] leading-relaxed">
                    Open until 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/place/Assault+Fitness/@30.2512237,75.8406318,17z/data=!3m1!4b1!4m6!3m5!1s0x3910516849f555f1:0x1488ea5cef03df2b!8m2!3d30.2512191!4d75.8432067!16s%2Fg%2F11zc0ns0lw?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-transparent border border-[#C89B52] text-[#F5F1E9] hover:bg-[#C89B52] hover:text-[#0B0B0B] font-bold tracking-widest uppercase transition-all"
            >
              Open In Google Maps
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Map Area */}
          <div className="h-[400px] lg:h-[600px] w-full bg-[#111111] border border-[#C89B52]/20 relative group overflow-hidden">
            <a 
              href="https://www.google.com/maps/place/Assault+Fitness/@30.2512237,75.8406318,17z/data=!3m1!4b1!4m6!3m5!1s0x3910516849f555f1:0x1488ea5cef03df2b!8m2!3d30.2512191!4d75.8432067!16s%2Fg%2F11zc0ns0lw?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#0B0B0B]/70 group-hover:bg-[#0B0B0B]/50 transition-colors duration-500 z-10"></div>
              
              {/* Map Placeholder Image */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop" 
                alt="Map Placeholder"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Content */}
              <div className="relative z-30 flex flex-col items-center transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 bg-[#C89B52] rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(200,155,82,0.4)]">
                  <MapPin size={32} className="text-[#0B0B0B]" />
                </div>
                <span className="bg-[#0B0B0B] text-[#F5F1E9] px-6 py-3 font-['Oswald'] font-bold tracking-widest uppercase border border-[#C89B52]/50 group-hover:border-[#C89B52] transition-colors">
                  Open In Google Maps
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
