const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
      alt: "Gym free weight area with modern equipment",
      className: "col-span-1 md:col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
      alt: "Strength training equipment with warm lighting",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
      alt: "Dumbbell rack in premium gym environment",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1596357395217-80de13130e92?q=100&w=2000&auto=format&fit=crop",
      alt: "Clean and sharp modern gym equipment",
      className: "col-span-1 md:col-span-2 row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-[#C89B52] font-['Oswald'] tracking-[0.2em] uppercase text-sm mb-4">
              Step Into The Space.
            </h2>
            <h3 className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[#F5F1E9] uppercase">
              Inside Assault Fitness
            </h3>
          </div>
          <p className="text-[#A7A7A7] max-w-md">
            Experience our meticulously designed training facility. Built for focus, equipped for progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`${img.className} group relative overflow-hidden bg-[#171717] rounded-sm min-h-[250px]`}
            >
              <div className="absolute inset-0 bg-[#0B0B0B]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
