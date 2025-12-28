import { FileText, Clock, ShieldCheck, Users } from 'lucide-react';

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: FileText,
      title: 'تنفيذ طبقًا للرسومات الهندسية',
      description: 'التزام تام بالمخططات والمواصفات الفنية المطلوبة',
    },
    {
      icon: Clock,
      title: 'التزام كامل بالمواعيد',
      description: 'تسليم المشاريع في المواعيد المحددة دون تأخير',
    },
    {
      icon: ShieldCheck,
      title: 'خامات صناعية معتمدة',
      description: 'استخدام مواد عالية الجودة معتمدة من أفضل الموردين',
    },
    {
      icon: Users,
      title: 'خبرة في التعامل مع المصانع',
      description: 'سجل حافل في خدمة المصانع والمشروعات الكبرى',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0B1C2D] relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl text-center mb-4 text-white" style={{ fontWeight: 700 }}>
          ليه تختار السلام لتنفيذ حلولك المعدنية؟
        </h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          احنا بنفهم احتياجات المصانع والمشروعات الصناعية ونقدم حلول موثوقة ومخصصة
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-[#FF8C00]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF8C00]/20 transition-colors">
                <reason.icon className="w-10 h-10 text-[#FF8C00]" strokeWidth={1.5} />
              </div>
              <h3 className="text-white mb-2" style={{ fontWeight: 600 }}>
                {reason.title}
              </h3>
              <p className="text-white/70 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}