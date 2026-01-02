import { CheckCircle, Home, Phone, Mail } from 'lucide-react';
import { AnimatedSection, ZoomIn, SlideInFade } from './AnimatedSection';
import { useNavigate } from 'react-router-dom';

interface ThankYouPageProps {
    onBackToHome: () => void;
}

export function ThankYouPage({ onBackToHome }: ThankYouPageProps) {
    const navigate = useNavigate(); 
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1C2D] via-[#0B1C2D] to-[#2F2F2F] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <AnimatedSection direction="up" duration={0.8}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
            
            {/* Success Icon */}
            <ZoomIn delay={0.2}>
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 rounded-full p-6">
                  <CheckCircle className="w-20 h-20 text-green-600" strokeWidth={2} />
                </div>
              </div>
            </ZoomIn>

            {/* Main Message */}
            <SlideInFade direction="left" delay={0.3}>
              <h1 
                className="text-3xl sm:text-4xl text-[#0B1C2D] mb-4"
                style={{ fontWeight: 700 }}
              >
                شكراً لك على إرسال بياناتك! 🎉
              </h1>
            </SlideInFade>

            <SlideInFade direction="right" delay={0.4}>
              <p className="text-lg sm:text-xl text-[#2F2F2F] mb-8">
                سنكون على تواصل معك بعد بضع ساعات
              </p>
            </SlideInFade>

            {/* Divider */}
            <div className="w-24 h-1 bg-[#FF8C00] mx-auto mb-8"></div>

            {/* Additional Info */}
            <SlideInFade direction="left" delay={0.5}>
              <div className="bg-[#F5F5F5] rounded-lg p-6 mb-8 text-right">
                <p className="text-[#2F2F2F] mb-4">
                  تم استلام طلبك بنجاح. فريقنا المتخصص سيقوم بمراجعة احتياجاتك والتواصل معك في أقرب وقت ممكن.
                </p>
                <div className="space-y-2 text-sm text-[#2F2F2F]/80">
                  <div className="flex items-center justify-end gap-2">
                    <span>رقم الطلب: #{Math.floor(Math.random() * 100000)}</span>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span>وقت الإرسال: {new Date().toLocaleString('ar-EG')}</span>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                </div>
              </div>
            </SlideInFade>

            {/* Contact Options */}
            <SlideInFade direction="right" delay={0.6}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href="tel:+201551410539"
                  className="flex items-center justify-center gap-2 bg-[#0B1C2D] text-white px-6 py-3 rounded-lg hover:bg-[#0B1C2D]/90 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل بنا الآن</span>
                </a>
                <a
                  href="mailto:elsalamindustries@gmail.com"
                  className="flex items-center justify-center gap-2 bg-[#2F2F2F] text-white px-6 py-3 rounded-lg hover:bg-[#2F2F2F]/90 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span>أرسل إيميل</span>
                </a>
              </div>
            </SlideInFade>

            {/* Back to Home Button */}
            <ZoomIn delay={0.7}>
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center justify-center gap-3 bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg group"
                style={{ fontWeight: 600 }}
              >
                <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>الرجوع للصفحة الرئيسية</span>
              </button>
            </ZoomIn>

            {/* Footer Note */}
            <p className="text-sm text-[#2F2F2F]/60 mt-8">
              في حالة الاستفسار، يمكنك التواصل معنا على مدار الساعة
            </p>
          </div>
        </AnimatedSection>

        {/* Additional Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <SlideInFade direction="left" delay={0.8}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-[#FF8C00] mb-2" style={{ fontWeight: 700 }}>
                ⚡ سرعة في الرد
              </div>
              <p className="text-white/80 text-sm">
                رد خلال 3-6 ساعات
              </p>
            </div>
          </SlideInFade>

          <SlideInFade direction="left" delay={0.9}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-[#FF8C00] mb-2" style={{ fontWeight: 700 }}>
                🎯 دقة في العمل
              </div>
              <p className="text-white/80 text-sm">
                حلول مخصصة لك
              </p>
            </div>
          </SlideInFade>

          <SlideInFade direction="right" delay={1}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
              <div className="text-[#FF8C00] mb-2" style={{ fontWeight: 700 }}>
                ✅ ضمان الجودة
              </div>
              <p className="text-white/80 text-sm">
                معايير عالمية
              </p>
            </div>
          </SlideInFade>
        </div>
      </div>
    </div>
  );
}