# مشروع صفحة هبوط صناعية B2B

صفحة هبوط احترافية للمصانع والحلول الصناعية مصممة لتوليد العملاء المحتملين (Lead Generation) بتصميم عربي RTL.

## 🚀 النشر على منصات الاستضافة

### 1. **Vercel** (الأسهل والأسرع - موصى به)

```bash
# تثبيت Vercel CLI
npm i -g vercel

# نشر المشروع
vercel
```

أو قم بربط repository من GitHub/GitLab مباشرة على [vercel.com](https://vercel.com)

---

### 2. **Netlify**

```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# بناء المشروع
npm run build

# نشر المشروع
netlify deploy --prod --dir=dist
```

أو استخدم [Netlify Drop](https://app.netlify.com/drop) لرفع مجلد `dist` مباشرة

---

### 3. **GitHub Pages**

أضف هذا السكريبت في `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

ثم:
```bash
npm install -g gh-pages
npm run deploy
```

---

### 4. **استضافة عادية (Shared Hosting)**

```bash
# بناء المشروع
npm run build

# ارفع محتويات مجلد dist/ على السيرفر
```

---

## 📦 خطوات التحضير للنشر

### 1. تثبيت المكتبات
```bash
npm install
```

### 2. بناء المشروع للإنتاج
```bash
npm run build
```

سيتم إنشاء مجلد `dist/` يحتوي على الملفات الجاهزة للنشر.

### 3. معاينة النسخة الإنتاجية محلياً (اختياري)
```bash
npm install -g serve
serve -s dist
```

---

## 🔧 المميزات التقنية

- ⚛️ React 18
- 🎨 Tailwind CSS v4
- 📱 تصميم متجاوب (Mobile-First)
- 🌐 دعم RTL كامل للعربية
- 📋 نموذج تواصل مع Validation
- 🎯 مُحسّن للتحويلات (Conversion Optimized)
- 🏭 تصميم صناعي احترافي

---

## 🎨 الألوان المستخدمة

- **Dark Steel Blue**: #0B1C2D
- **Industrial Gray**: #2F2F2F
- **Light Gray**: #E6E6E6
- **Industrial Orange**: #FF8C00

---

## 📄 البنية

```
src/
├── app/
│   ├── App.tsx                    # المكون الرئيسي
│   └── components/
│       ├── HeroSection.tsx        # قسم البطل
│       ├── PainPointsSection.tsx  # نقاط الألم
│       ├── SolutionsSection.tsx   # الحلول
│       ├── WhyChooseUsSection.tsx # لماذا نحن
│       ├── IndustriesSection.tsx  # القطاعات
│       ├── ProcessSection.tsx     # العملية
│       └── LeadFormSection.tsx    # نموذج التواصل
└── styles/
    ├── index.css
    ├── tailwind.css
    ├── theme.css
    └── fonts.css
```

---

## 🔗 ربط النموذج بـ Backend API

لربط نموذج التواصل بـ API حقيقي، عدّل ملف `LeadFormSection.tsx`:

```typescript
const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('https://your-api-endpoint.com/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      console.log('تم إرسال البيانات بنجاح');
    }
  } catch (error) {
    console.error('خطأ في الإرسال:', error);
  }
};
```

---

## 📞 الدعم

تم بناء هذا المشروع باستخدام Figma Make
