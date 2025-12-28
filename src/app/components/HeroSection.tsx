import { Phone, FileText } from 'lucide-react';

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598302936664-407d6c250e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd2VsZGluZ3xlbnwxfHx8fDE3NjYyNjI3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Metal Fabrication"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B1C2D]/95 via-[#0B1C2D]/85 to-[#0B1C2D]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-3xl mr-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white" style={{ fontWeight: 800 }}>
            حلول صناعية معدنية متكاملة مصممة خصيصًا لمصنعك
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90">
            ننفذ رسوماتك الهندسية بدقة عالية ونقدّم حلول تصنيع موثوقة ترفع كفاءة مشروعك
          </p>
          <div className="flex justify-end">
            <button
              onClick={scrollToForm}
              className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              اطلب عرض سعر الآن
            </button>
          </div>
        </div>
      </div>

      {/* Sticky CTA for Mobile */}
      <button
        onClick={scrollToForm}
        className="fixed bottom-4 right-4 left-4 sm:hidden bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white px-6 py-4 rounded-lg transition-all shadow-lg z-50"
      >
        اطلب عرض سعر الآن
      </button>
    </section>
  );
}