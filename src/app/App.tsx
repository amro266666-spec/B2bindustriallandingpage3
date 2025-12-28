import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { FAQSection } from './components/FAQSection';
import { ProcessSection } from './components/ProcessSection';
import { ExperienceSection } from './components/ExperienceSection';
import { LeadFormSection } from './components/LeadFormSection';
import { EquipmentSection } from './components/EquipmentSection';
import { FloatingCallButton } from './components/FloatingCallButton';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Cairo, sans-serif' }} dir="rtl" lang="ar">
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <FAQSection />
      <ProcessSection />
      <ExperienceSection />
      <LeadFormSection />
      <EquipmentSection />
      
      {/* Floating Call Button */}
      <FloatingCallButton />
      
      {/* Footer */}
      <footer className="bg-[#0B1C2D] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="md:col-span-2 text-right">
              <h3 className="text-xl mb-4" style={{ fontWeight: 700 }}>
                نبذة عن مصنع السلام للصناعات المعدنية
              </h3>
              <p className="text-white/80 leading-relaxed">
                مصنع السلام للصناعات المعدنية هو أحد المصانع الرائدة في مجال التصنيع المعدني بمصر، بخبرة تمتد لأكثر من 20 عامًا في تقديم حلول معدنية متكاملة ومتميزة. نمتلك أحدث التقنيات والمعدات التي تمكننا من تنفيذ جميع أنواع المشاريع الصناعية بدقة وجودة عالية. نفخر بتقديم حلول معدنية قوية وموثوقة لعملائنا، من خلال فريق هندسي محترف وخبرة واسعة في تنفيذ مئات الرسومات الهندسية المعقدة.
              </p>
            </div>

            {/* Contact & Social */}
            <div className="text-right">
              <h3 className="text-xl mb-4" style={{ fontWeight: 700 }}>
                العنوان
              </h3>
              <p className="text-white/80 mb-6">
                العاشر من رمضان<br />
                المنطقة الصناعية الثالثة<br />
                الستة مليون
              </p>

              <h3 className="text-xl mb-4" style={{ fontWeight: 700 }}>
                تابعنا على
              </h3>
              <div className="flex gap-4 justify-end">
                <a
                  href="https://www.facebook.com/elsal1am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF8C00] p-3 rounded-full transition-all"
                  aria-label="فيسبوك"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/elsal1am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF8C00] p-3 rounded-full transition-all"
                  aria-label="انستجرام"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@elsal1am"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF8C00] p-3 rounded-full transition-all"
                  aria-label="تيك توك"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/elsal1am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#FF8C00] p-3 rounded-full transition-all"
                  aria-label="لينكد ان"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/70">
              جميع الحقوق محفوظة © 2025 | مصنع السلام للصناعات المعدنية
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}