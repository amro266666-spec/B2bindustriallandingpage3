import { Factory, CircuitBoard, Building, Plug2, Settings, Hammer } from 'lucide-react';

export function IndustriesSection() {
  const industries = [
    {
      icon: Factory,
      label: 'مصانع إنتاج',
    },
    {
      icon: CircuitBoard,
      label: 'مصانع لوحات كهرباء',
    },
    {
      icon: Building,
      label: 'شركات مقاولات',
    },
    {
      icon: Plug2,
      label: 'مصانع الأجهزة الكهربائية',
    },
    {
      icon: Settings,
      label: 'ورش ومصانع خطوط إنتاج',
    },
    {
      icon: Hammer,
      label: 'تنفيذ الرفايع - الاسطمبات',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-[#0B1C2D]" style={{ fontWeight: 700 }}>
          بعض القطاعات التي نخدمها
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-[#E6E6E6] transition-colors cursor-pointer"
            >
              <div className="bg-[#FF8C00]/10 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <industry.icon className="w-8 h-8 text-[#FF8C00]" strokeWidth={1.5} />
              </div>
              <span className="text-[#2F2F2F]">{industry.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}