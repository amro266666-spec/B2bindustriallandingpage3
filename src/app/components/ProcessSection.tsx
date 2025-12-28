import { FileText, Search, Settings, Package } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'استلام الرسومات والمتطلبات',
      description: 'نستقبل المخططات الهندسية ونحدد احتياجاتك بدقة',
    },
    {
      number: '02',
      icon: Search,
      title: 'مراجعة هندسية وتسعير',
      description: 'فريقنا الهندسي يراجع المتطلبات ويقدم عرض سعر تفصيلي',
    },
    {
      number: '03',
      icon: Settings,
      title: 'بدء التصنيع',
      description: 'نبدأ عملية التصنيع بأحدث التقنيات والمعدات',
    },
    {
      number: '04',
      icon: Package,
      title: 'تسليم نهائي مطابق للمواصفات',
      description: 'تسليم المنتج النهائي بجودة عالية ومطابق للمواصفات',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#E6E6E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-4 text-[#0B1C2D]" style={{ fontWeight: 700 }}>
          خطوات تنفيذ شغلك مع السلام
        </h2>
        <p className="text-center text-[#2F2F2F] mb-12 max-w-2xl mx-auto">
          عملية واضحة ومنظمة من البداية حتى التسليم النهائي
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-[#FF8C00]/30 -z-10" style={{ left: '50%' }}></div>
              )}
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative z-10 hover:shadow-lg transition-shadow">
                <div className="bg-[#FF8C00] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ fontWeight: 700 }}>
                  {step.number}
                </div>
                <step.icon className="w-10 h-10 mx-auto mb-3 text-[#0B1C2D]" strokeWidth={1.5} />
                <h3 className="text-[#0B1C2D] mb-2" style={{ fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-[#2F2F2F] text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}