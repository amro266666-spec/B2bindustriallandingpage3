import { Settings, Wrench, Zap, Package } from 'lucide-react';

export function SolutionsSection() {
  const solutions = [
    {
      icon: Settings,
      title: 'تشكيل المعادن حسب الطلب',
      description: 'تصنيع ومعالجة المعادن وفقًا لاحتياجاتك الصناعية الدقيقة',
      image: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjYyNjI3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Wrench,
      title: 'أعمال لحام وجلفنة صناعية',
      description: 'لحام متخصص بأعلى معايير الجودة والمتانة للمشاريع الصناعية',
      image: 'https://images.unsplash.com/photo-1598302936664-407d6c250e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd2VsZGluZ3xlbnwxfHx8fDE3NjYyNjI3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Zap,
      title: 'قص ليزر وCNC عالي الدقة',
      description: 'تقنيات قص متقدمة للحصول على دقة عالية في التصنيع',
      image: 'https://images.unsplash.com/photo-1764114235891-66ff86abaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbHxlbnwxfHx8fDE3NjYyNjI3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Package,
      title: 'تنفيذ شاسيهات وهياكل معدنية',
      description: 'تصميم وتنفيذ هياكل معدنية قوية ومتينة للمشاريع الكبرى',
      image: 'https://images.unsplash.com/photo-1635282760019-66a3ef07344b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3RlZWwlMjBzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY2MjYyNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-[#0B1C2D]" style={{ fontWeight: 700 }}>
          حلولنا الصناعية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-64">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/90 to-[#0B1C2D]/40"></div>
              </div>
              <div className="absolute bottom-0 right-0 left-0 p-6 text-right">
                <solution.icon className="w-10 h-10 mb-3 text-[#FF8C00] mr-auto" strokeWidth={1.5} />
                <h3 className="text-white mb-2" style={{ fontWeight: 700 }}>
                  {solution.title}
                </h3>
                <p className="text-white/80 text-sm">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
