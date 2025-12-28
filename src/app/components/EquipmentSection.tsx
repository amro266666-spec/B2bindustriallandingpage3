import { ImageWithFallback } from './figma/ImageWithFallback';

export function EquipmentSection() {
  const equipment = [
    {
      name: 'جلفنة',
      description: 'حماية المعادن من الصدأ والتآكل بطبقة الزنك',
      image: 'https://images.unsplash.com/photo-1697281679290-ad7be1b10682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWx2YW5pemluZyUyMG1ldGFsJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjY5NDM2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'تناية',
      description: 'ثني وتشكيل الألواح المعدنية بدقة عالية',
      image: 'https://images.unsplash.com/photo-1738162837330-9257f938463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGJlbmRpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2Njk0MzY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'مقص',
      description: 'قطع الألواح المعدنية بسرعة وكفاءة عالية',
      image: 'https://images.unsplash.com/photo-1764114902604-2b291087fe26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjBzaGVhciUyMGN1dHRpbmd8ZW58MXx8fHwxNzY2OTQzNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'مكابس',
      description: 'كبس وتشكيل المعادن بقوة ضغط هيدروليكية',
      image: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBwcmVzcyUyMG1hY2hpbmV8ZW58MXx8fHwxNzY2OTQzNjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'ليزر',
      description: 'قطع المعادن بتقنية الليزر بدقة متناهية',
      image: 'https://images.unsplash.com/photo-1764114235896-034c8772de01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbCUyMHNwYXJrc3xlbnwxfHx8fDE3NjY5NDM2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'CNC',
      description: 'تشغيل وتصنيع القطع المعدنية بالتحكم الرقمي',
      image: 'https://images.unsplash.com/photo-1711418235199-171c8ecb9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5lJTIwbWV0YWx8ZW58MXx8fHwxNzY2OTQzNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'لحام',
      description: 'لحام احترافي بجميع الأنواع والتقنيات الحديثة',
      image: 'https://images.unsplash.com/photo-1564182999070-744933bbe318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwc3BhcmtzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjY5NDM2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'مخراط',
      description: 'تشكيل القطع الاسطوانية والدقيقة بدقة عالية',
      image: 'https://images.unsplash.com/photo-1739879501339-1c5a2bf1eb46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGxhdGhlJTIwbWFjaGluZXxlbnwxfHx8fDE3NjY5NDM2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-4 text-[#0B1C2D]" style={{ fontWeight: 700 }}>
          بعض المكن والمعدات المتوفرة
        </h2>
        <p className="text-center text-[#2F2F2F] mb-12 max-w-2xl mx-auto">
          نمتلك أحدث المعدات والتقنيات لتلبية جميع احتياجاتك المعدنية
        </p>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3
                  className="absolute bottom-3 right-3 text-white text-xl"
                  style={{ fontWeight: 700 }}
                >
                  {item.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-[#2F2F2F] text-sm text-right">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
            style={{ fontWeight: 600 }}
          >
            تواصل معانا الان
          </button>
        </div>
      </div>
    </section>
  );
}
