import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'العملاء الي بنفهم متطلباتهم؟',
      answer: 'اصحاب المصانع ومديري المشتريات ومهندسين المواقع و شركات المقاولات الصناعية',
    },
    {
      question: 'احنا نقدر نقدملك اي؟',
      answer: 'نقدر نقدملك تنفيذ كل رسوماتك واحتياجاتك المعدنية الي تخدم مصنعك وخط انتاجك',
    },
    {
      question: 'اي الماكينات الي بنشتغل بيها؟',
      answer: 'متاح عندنا كل انواع الماكينات والمعدات الي تخدم خط انتاجك باحتياجاته المعدنية',
      examples: 'مثال: جلفنة - تناية - مكن ليزر - مكابس - مقص - CNC',
    },
    {
      question: 'ازاي تبدأ شغل مع السلام؟',
      answer: 'تقدر تسجل بياناتك في الفورم اسفل الصفحة وهنتواصل معاك هاتفيا لتقديم عرض سعر واستشارة فنية',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#E6E6E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-[#0B1C2D]" style={{ fontWeight: 700 }}>
          قبل ما تتواصل معانا خليك مطمئن
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg text-[#0B1C2D] flex-1 pr-4" style={{ fontWeight: 600 }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#FF8C00] transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-right">
                  <p className="text-[#2F2F2F] leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.examples && (
                    <p className="text-[#FF8C00] mt-3" style={{ fontWeight: 500 }}>
                      {faq.examples}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}