import { Award, FileCheck } from 'lucide-react';

export function ExperienceSection() {
  const stats = [
    {
      icon: Award,
      value: '20',
      unit: 'سنة',
      label: 'خبرة في التصنيع المعدني',
    },
    {
      icon: FileCheck,
      value: 'مئات',
      label: 'الرسومات الهندسية المنفذة',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0B1C2D] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center hover:bg-white/10 transition-all"
            >
              <div className="bg-[#FF8C00]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#FF8C00]" strokeWidth={1.5} />
              </div>
              <div className="text-white">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl" style={{ fontWeight: 800 }}>
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-2xl text-white/80" style={{ fontWeight: 600 }}>
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-white/90 text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
