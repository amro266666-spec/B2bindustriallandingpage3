import { useForm } from 'react-hook-form';
import { Shield, CircleCheck } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const SERVICE_ID = 'service_wzzeqdq';
  const TEMPLATE_ID = 'template_5mnoqcd';
  const PUBLIC_KEY = 'qlSg-5YJUchY6ta99'; 

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // إرسال البيانات لـ EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: data.name,
        phone: data.phone,
        companyName: data.companyName || 'غير محدد',
        requirements: data.requirements,
        hasDrawings: data.hasDrawings,
        projectType: data.projectType || 'غير محدد',
        timestamp: new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' }),
      }, PUBLIC_KEY);

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
            navigate('/thank-you');

    } catch (err) {
      console.error(err);
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
              <CircleCheck className="w-5 h-5 text-green-600" />
              <p className="text-green-800">تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.</p>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-right">
              <Shield className="w-5 h-5 text-red-600" />
              <p className="text-red-800">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#E6E6E6] p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              {/* Name Field */}
              <div className="text-right">
                <label className="block mb-2">الاسم *</label>
                <input
                  {...register('name', { required: 'الاسم مطلوب' })}
                  className="w-full px-4 py-3 rounded-lg border"
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
              </div>

              {/* Phone Field */}
              <div className="text-right">
                <label className="block mb-2">رقم الهاتف *</label>
                <input
                  {...register('phone', { required: 'رقم الهاتف مطلوب' })}
                  className="w-full px-4 py-3 rounded-lg border"
                  placeholder="05xxxxxxxx"
                />
                {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
              </div>

              {/* Company Name */}
              <div className="text-right">
                <label className="block mb-2">اسم المصنع</label>
                <input
                  {...register('companyName')}
                  className="w-full px-4 py-3 rounded-lg border"
                  placeholder="اسم المصنع (اختياري)"
                />
              </div>

              {/* Requirements */}
              <div className="text-right">
                <label className="block mb-2">اي الاحتياج المعدني الي محتاج تنفذه؟  *</label>
                <textarea
                  {...register('requirements', { required: 'هذا الحقل مطلوب' })}
                  className="w-full px-4 py-3 rounded-lg border min-h-[100px]"
                  placeholder="اكتب تفاصيل احتياجك المعدني"
                />
              </div>

              {/* Has Drawings */}
              <div className="text-right">
                <label className="block mb-2">هل لديك رسومات؟ *</label>
                <select
                  {...register('hasDrawings', { required: 'اختر نعم أو لا' })}
                  className="w-full px-4 py-3 rounded-lg border"
                >
                  <option value="">اختر خيارًا</option>
                   <option value="نعم لدي رسومات معدنية">نعم لدي رسومات معدنية</option>
                   <option value="لا ليس لدي رسومات معدنية">لا ليس لدي رسومات معدنية</option>
                
                </select>
              </div>

              {/* Project Type */}
              <div className="text-right">
                <label className="block mb-2">نوع المشروع</label>
                <select
                  {...register('projectType')}
                  className="w-full px-4 py-3 rounded-lg border"
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
                disabled={isSubmitting}
                className="w-full bg-[#FF8C00] text-white py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
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
