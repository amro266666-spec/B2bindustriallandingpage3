# ⚡ دليل سريع - إعداد التتبع في 5 دقائق

## 📋 ما تحتاجه:

1. ✅ حساب Google Tag Manager
2. ✅ حساب Facebook Business
3. ✅ حساب Microsoft

---

## 🚀 الخطوات السريعة:

### 1️⃣ Google Tag Manager (دقيقتان)

1. اذهب → [tagmanager.google.com](https://tagmanager.google.com)
2. اضغط **Create Account**
3. انسخ **GTM-XXXXXXX**
4. ضعه في `/src/app/App.tsx`:
   ```typescript
   gtmId="GTM-XXXXXXX"  // هنا
   ```

---

### 2️⃣ Facebook Pixel (دقيقتان)

1. اذهب → [business.facebook.com/events_manager2](https://business.facebook.com/events_manager2)
2. اضغط **Connect Data Sources** → **Web** → **Facebook Pixel**
3. انسخ رقم الـ **Pixel ID** (16 رقم)
4. ضعه في `/src/app/App.tsx`:
   ```typescript
   fbPixelId="1234567890123456"  // هنا
   ```

---

### 3️⃣ Microsoft Clarity (دقيقة)

1. اذهب → [clarity.microsoft.com](https://clarity.microsoft.com)
2. اضغط **Add new project**
3. انسخ **Project ID**
4. ضعه في `/src/app/App.tsx`:
   ```typescript
   clarityId="abcd1234ef"  // هنا
   ```

---

## ✅ التأكد من التثبيت:

### افتح Console في المتصفح (F12):

يجب أن ترى:
```
✅ Google Tag Manager loaded: GTM-XXXXXXX
✅ Facebook Pixel loaded: 1234567890123456
✅ Microsoft Clarity loaded: abcd1234ef
```

---

## 🎯 الأحداث المتتبعة تلقائياً:

| الحدث | متى يحدث | المنصات |
|---|---|---|
| **Lead** | عند إرسال الفورم بنجاح | GTM + FB + Clarity |
| **FormError** | عند فشل إرسال الفورم | GTM + FB + Clarity |
| **CTAClicked** | عند الضغط على "اطلب عرض سعر" | GTM + FB + Clarity |
| **PhoneCallClicked** | عند الضغط على زر الاتصال | GTM + FB + Clarity |

---

## 🔥 نصائح سريعة:

- ✅ استخدم [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) للتحقق
- ✅ جرّب GTM Preview Mode قبل النشر
- ✅ راقب Clarity لفهم سلوك المستخدمين

---

## 📄 للتفاصيل الكاملة:

افتح ملف **ANALYTICS_SETUP.md** للحصول على:
- شرح تفصيلي لكل خطوة
- كيفية ربط Google Ads و Facebook Ads
- إعداد Conversions
- استكشاف الأخطاء
- أحداث إضافية

---

## 🚀 النشر:

بعد وضع جميع الـ IDs:

```bash
git add .
git commit -m "Add analytics tracking"
git push origin main
```

**⏱️ خلال 3-5 دقائق، الأدوات ستكون شغالة!** ✅

---

## 📞 مشكلة؟

1. تأكد من تغيير الـ IDs (مش القيم الافتراضية)
2. تأكد من نشر التغييرات على Vercel
3. افتح Console وشوف الرسائل

---

🎉 **خلصت! الموقع دلوقتي بيتتبع كل حاجة!** 🎉
