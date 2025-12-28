import { useForm } from 'react-hook-form';
import { Shield, CircleCheck } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  companyName: string;
  requirements: string;
  hasDrawings: string;
  projectType: string;
}

export function LeadFormSection() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // استبدل هذا الرابط بالرابط الخاص بك من Google Apps Script
      const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          companyName: data.companyName || 'غير محدد',
          requirements: data.requirements,
          hasDrawings: data.hasDrawings,
          projectType: data.projectType || 'غير محدد',
          timestamp: new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' }),
        }),
      });
      
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[#0B1C2D]" style={{ fontWeight: 700 }}>
              احصل علي عرض سعر خلال ساعات
            </h2>
            <p className="text-[#2F2F2F]">
              املأ النموذج وسيتواصل معك أحد مهندسينا لمناقشة مشروعك
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 text-right">
              <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800">تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.</p>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-right">
              <Shield className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-800">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#E6E6E6] p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              {/* Name Field */}
              <div className="text-right">
                <label htmlFor="name" className="block mb-2 text-[#0B1C2D]">
                  الاسم <span className="text-[#FF8C00]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'الاسم مطلوب' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right"
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="text-right">
                <label htmlFor="phone" className="block mb-2 text-[#0B1C2D]">
                  رقم الهاتف <span className="text-[#FF8C00]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'رقم الهاتف مطلوب',
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: 'الرجاء إدخال رقم هاتف صحيح',
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Company Name Field */}
              <div className="text-right">
                <label htmlFor="companyName" className="block mb-2 text-[#0B1C2D]">
                  اسم المصنع <span className="text-[#2F2F2F]/60">(اختياري)</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  {...register('companyName')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right"
                  placeholder="أدخل اسم المصنع"
                />
              </div>

              {/* Requirements Field */}
              <div className="text-right">
                <label htmlFor="requirements" className="block mb-2 text-[#0B1C2D]">
                  اي الاحتياج المعدني الي محتاج تنفذه؟ <span className="text-[#FF8C00]">*</span>
                </label>
                <textarea
                  id="requirements"
                  {...register('requirements', { required: 'يرجى تحديد الاحتياج المعدني' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right min-h-[100px]"
                  placeholder="اكتب تفاصيل احتياجك المعدني"
                />
                {errors.requirements && (
                  <p className="text-red-600 text-sm mt-1">{errors.requirements.message}</p>
                )}
              </div>

              {/* Has Drawings Field */}
              <div className="text-right">
                <label htmlFor="hasDrawings" className="block mb-2 text-[#0B1C2D]">
                  هل في رسومات معدنية ولا لا؟ <span className="text-[#FF8C00]">*</span>
                </label>
                <select
                  id="hasDrawings"
                  {...register('hasDrawings', { required: 'يرجى تحديد ما إذا كان لديك رسومات' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right"
                >
                  <option value="">اختر خيارًا</option>
                  <option value="نعم لدي رسومات معدنية">نعم لدي رسومات معدنية</option>
                  <option value="لا ليس لدي رسومات معدنية">لا ليس لدي رسومات معدنية</option>
                </select>
                {errors.hasDrawings && (
                  <p className="text-red-600 text-sm mt-1">{errors.hasDrawings.message}</p>
                )}
              </div>

              {/* Project Type Field */}
              <div className="text-right">
                <label htmlFor="projectType" className="block mb-2 text-[#0B1C2D]">
                  نوع المشروع <span className="text-[#2F2F2F]/60">(اختياري)</span>
                </label>
                <select
                  id="projectType"
                  {...register('projectType')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right"
                >
                  <option value="">اختر نوع المشروع</option>
                  <option value="تشكيل معادن">تشكيل معادن</option>
                  <option value="أعمال لحام">أعمال لحام</option>
                  <option value="قص ليزر">قص ليزر وCNC</option>
                  <option value="هياكل معدنية">هياكل معدنية</option>
                  <option value="رفايع واسطمبات">رفايع واسطمبات</option>
                  <option value="جلفنة">جلفنة</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
              </button>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-[#2F2F2F]/70 text-sm">
                <Shield className="w-4 h-4" />
                <span>بياناتك آمنة ولن يتم مشاركتها</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}