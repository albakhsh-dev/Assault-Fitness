import { Dumbbell, Target, Settings2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: 'Strength',
      description: 'A focused environment for strength and fitness training.',
      icon: <Dumbbell className="w-10 h-10 text-[#C89B52]" strokeWidth={1.5} />,
    },
    {
      title: 'Precision',
      description: 'A space where consistency, technique, and discipline matter.',
      icon: <Target className="w-10 h-10 text-[#C89B52]" strokeWidth={1.5} />,
    },
    {
      title: 'Control',
      description: 'Build your routine, focus on your goals, and progress at your own pace.',
      icon: <Settings2 className="w-10 h-10 text-[#C89B52]" strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#171717] border-y border-[#A7A7A7]/10 relative overflow-hidden">
      {/* Decorative large AF text in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0B0B0B] font-['Oswald'] text-[20rem] font-bold opacity-50 select-none z-0 pointer-events-none">
        AF
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#C89B52] font-['Oswald'] tracking-[0.2em] uppercase text-sm mb-4">
            Your Space. Your Strength.
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-['Oswald'] font-bold text-[#F5F1E9] uppercase mb-8">
            More Than A Workout.
          </h3>
          <p className="text-[#A7A7A7] text-lg leading-relaxed">
            Assault Fitness brings a bold, focused atmosphere to your fitness journey. With a modern training environment and a design built around strength, precision, and control, it is a place to show up, stay consistent, and keep moving forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-[#0B0B0B] p-10 border border-[#C89B52]/20 hover:border-[#C89B52] transition-colors duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-[#171717] group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-['Oswald'] font-bold text-[#F5F1E9] uppercase tracking-wider mb-4">
                {feature.title}
              </h4>
              <p className="text-[#A7A7A7] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
