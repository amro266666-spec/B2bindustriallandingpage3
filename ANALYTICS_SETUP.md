# 📊 دليل إعداد أدوات التتبع والتحليل

هذا الدليل يشرح خطوة بخطوة كيفية إعداد:
- ✅ Google Tag Manager (GTM)
- ✅ Facebook Pixel
- ✅ Microsoft Clarity

---

## 🎯 1. إعداد Google Tag Manager (GTM)

### الخطوة 1: إنشاء حساب GTM

1. اذهب إلى [tagmanager.google.com](https://tagmanager.google.com)
2. اضغط على **Create Account** (إنشاء حساب)
3. املأ البيانات:
   - **Account Name**: مصنع السلام
   - **Country**: Egypt
   - **Container Name**: الموقع الإلكتروني (اسم الدومين)
   - **Target Platform**: Web
4. اضغط **Create**
5. اقرأ الشروط ووافق عليها

### الخطوة 2: نسخ GTM ID

بعد إنشاء الحساب، ستظهر لك نافذة بها الكود.
- ابحث عن **GTM-XXXXXXX** (الكود يبدأ بـ GTM-)
- 📋 **انسخ هذا الكود**

### الخطوة 3: وضع الكود في الموقع

في ملف `/src/app/App.tsx`، غيّر السطر:
```typescript
gtmId="GTM-XXXXXXX"
```
إلى:
```typescript
gtmId="GTM-N12AB34"  // ضع الكود الخاص بك هنا
```

### الخطوة 4: ربط Google Analytics 4 (GA4) بـ GTM (اختياري)

1. في Google Tag Manager، اضغط **Tags** → **New**
2. سمّه: "GA4 - Page View"
3. اختر **Tag Type**: Google Analytics: GA4 Configuration
4. ضع **Measurement ID** من Google Analytics (G-XXXXXXXXXX)
5. في **Triggering**، اختر **All Pages**
6. اضغط **Save**
7. اضغط **Submit** في الأعلى لنشر التغييرات

### الخطوة 5: ربط Google Ads (اختياري)

1. في GTM، اضغط **Tags** → **New**
2. سمّه: "Google Ads Conversion"
3. اختر **Tag Type**: Google Ads Conversion Tracking
4. ضع **Conversion ID** و **Conversion Label**
5. في **Triggering**، اختر **All Pages** أو حدد صفحة الشكر
6. اضغط **Save** ثم **Submit**

---

## 📘 2. إعداد Facebook Pixel

### الخطوة 1: إنشاء Pixel

1. اذهب إلى [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. اضغط على **Connect Data Sources** → **Web**
3. اختر **Facebook Pixel**
4. اضغط **Connect**
5. سمّه: "Pixel - مصنع السلام"
6. اضغط **Continue**

### الخطوة 2: نسخ Pixel ID

- سيظهر لك رقم الـ Pixel (مثال: 1234567890123456)
- 📋 **انسخ هذا الرقم**

### الخطوة 3: وضع الكود في الموقع

في ملف `/src/app/App.tsx`، غيّر السطر:
```typescript
fbPixelId="YOUR_PIXEL_ID"
```
إلى:
```typescript
fbPixelId="1234567890123456"  // ضع Pixel ID الخاص بك
```

### الخطوة 4: اختبار Pixel

1. حمّل إضافة [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) على Chrome
2. افتح موقعك
3. اضغط على أيقونة الإضافة
4. تأكد من ظهور Pixel باللون الأخضر ✅

### الخطوة 5: إعداد Conversion API (CAPI) - اختياري متقدم

للحصول على تتبع أقوى:
1. في Events Manager، افتح الـ Pixel
2. اذهب إلى **Settings** → **Conversions API**
3. اختر **Set up manually**
4. احصل على **Access Token**
5. استخدم server-side tracking (يحتاج backend)

---

## 🔍 3. إعداد Microsoft Clarity

### الخطوة 1: إنشاء حساب Clarity

1. اذهب إلى [clarity.microsoft.com](https://clarity.microsoft.com)
2. سجل دخول بحساب Microsoft (أو أنشئ حساب جديد)
3. اضغط **Add new project**

### الخطوة 2: إعداد المشروع

1. **Project Name**: مصنع السلام
2. **Website URL**: ضع رابط موقعك
3. **Category**: Manufacturing/Industrial
4. اضغط **Continue**

### الخطوة 3: نسخ Clarity ID

- سيظهر لك **Project ID** (مثال: abcd1234ef)
- 📋 **انسخ هذا الكود**

### الخطوة 4: وضع الكود في الموقع

في ملف `/src/app/App.tsx`، غيّر السطر:
```typescript
clarityId="YOUR_CLARITY_ID"
```
إلى:
```typescript
clarityId="abcd1234ef"  // ضع Clarity ID الخاص بك
```

### الخطوة 5: التحقق من التثبيت

1. ارجع لموقع Clarity
2. بعد دقائق، ستظهر رسالة "Clarity is recording" ✅
3. يمكنك مشاهدة تسجيلات الجلسات (Session Recordings)

---

## ✅ 4. التحقق من التثبيت

بعد وضع جميع الـ IDs في `/src/app/App.tsx`:

```typescript
<Analytics 
  gtmId="GTM-N12AB34"           // GTM ID الخاص بك
  fbPixelId="1234567890123456"   // Facebook Pixel ID
  clarityId="abcd1234ef"         // Clarity ID
/>
```

### اختبار شامل:

1. **افتح Console في المتصفح** (اضغط F12 → Console)
2. ستظهر رسائل:
   ```
   ✅ Google Tag Manager loaded: GTM-XXXXXXX
   ✅ Facebook Pixel loaded: 1234567890123456
   ✅ Microsoft Clarity loaded: abcd1234ef
   ```

3. **افتح Network في المتصفح** (F12 → Network)
4. ابحث عن:
   - `googletagmanager.com` ✅
   - `connect.facebook.net/en_US/fbevents.js` ✅
   - `clarity.ms` ✅

---

## 🎯 5. الأحداث المتتبعة تلقائياً

الكود الحالي يتتبع الأحداث التالية:

### عند إرسال الفورم بنجاح:
```javascript
Event: "Lead"
Data:
  - name: اسم العميل
  - phone: رقم الهاتف
  - projectType: نوع المشروع
  - value: 1
  - currency: "EGP"
```

### عند حدوث خطأ في الفورم:
```javascript
Event: "FormError"
Data:
  - error: "submission_failed"
```

---

## 📊 6. إضافة تتبع لأزرار أخرى (اختياري)

يمكنك تتبع أي حدث في الموقع. مثال:

### تتبع الضغط على زر الاتصال:

في `/src/app/components/FloatingCallButton.tsx`:

```typescript
import { trackEvent } from './Analytics';

// عند الضغط على الزر
<a 
  href="tel:01551410539"
  onClick={() => {
    trackEvent.all('PhoneCallClicked', {
      button_location: 'floating_button'
    });
  }}
>
```

### تتبع النقر على أقسام معينة:

```typescript
<button 
  onClick={() => {
    trackEvent.all('CTAClicked', {
      section: 'hero',
      action: 'get_quote'
    });
  }}
>
```

---

## 🔥 7. أحداث Facebook Pixel القياسية

يمكنك استخدام أحداث Facebook القياسية:

```typescript
// عند إرسال الفورم
trackEvent.fbPixel('Lead', {
  content_name: 'Quote Request',
  value: 1,
  currency: 'EGP'
});

// عند مشاهدة صفحة معينة
trackEvent.fbPixel('ViewContent', {
  content_name: 'Equipment Page'
});

// عند الضغط على زر معين
trackEvent.fbPixel('InitiateCheckout');

// عند إتمام عملية
trackEvent.fbPixel('Purchase', {
  value: 5000,
  currency: 'EGP'
});
```

---

## 📈 8. أحداث Google Tag Manager مخصصة

```typescript
// إرسال حدث مخصص لـ GTM
trackEvent.gtm('form_started', {
  form_name: 'lead_form',
  page: window.location.pathname
});

trackEvent.gtm('scroll_depth', {
  depth: '75%'
});
```

---

## 🎯 9. إعداد Conversions في Facebook Ads

### في Facebook Events Manager:

1. افتح **Events Manager**
2. اختر الـ Pixel الخاص بك
3. اذهب إلى **Aggregated Event Measurement**
4. اضغط **Configure Web Events**
5. أضف الأحداث بالترتيب:
   - **Lead** (الأهم) - Priority 1
   - **ViewContent**
   - **FormError**

### في Facebook Ads Manager:

عند إنشاء إعلان:
1. اختر **Objective**: Leads
2. في **Conversion Event**، اختر **Lead**
3. الآن Facebook سيعرف متى حصل تحويل ✅

---

## 🎯 10. إعداد Conversions في Google Ads

في Google Tag Manager:

1. اضغط **Tags** → **New**
2. سمّه: "Google Ads - Lead Conversion"
3. Tag Type: **Google Ads Conversion Tracking**
4. **Conversion ID**: من حساب Google Ads
5. **Conversion Label**: من Google Ads
6. **Trigger**: اختر Custom Event
7. Event Name: `Lead`
8. اضغط **Save** ثم **Submit**

---

## 🔍 11. مراقبة الأداء

### في Google Tag Manager:
- اذهب إلى **Preview Mode** لاختبار الأحداث
- تأكد من إطلاق جميع Tags بنجاح

### في Facebook Events Manager:
- راقب **Events** المستلمة في الوقت الفعلي
- تحقق من **Event Match Quality** (يجب أن يكون 6.0+)

### في Microsoft Clarity:
- شاهد **Session Recordings** لفهم سلوك المستخدمين
- راقب **Heatmaps** لمعرفة أين يضغط الزوار

---

## ⚡ 12. نصائح مهمة

### للحصول على أفضل أداء:

1. ✅ **لا تغير الـ IDs بعد بدء الإعلانات** - سيضيع التتبع
2. ✅ **اختبر الأحداث قبل إطلاق الإعلانات** - استخدم Facebook Pixel Helper
3. ✅ **راجع الأحداث أسبوعياً** - تأكد من استلام البيانات
4. ✅ **استخدم UTM Parameters** في الإعلانات لتتبع أفضل
5. ✅ **اربط جميع الأدوات** - GTM يمكنه إدارة Pixel و Clarity معاً

### الأخطاء الشائعة:

❌ **نسيان تغيير الـ IDs** من القيم الافتراضية
❌ **عدم نشر التغييرات** في GTM بعد إضافة Tags
❌ **عدم اختبار الأحداث** قبل الإطلاق
❌ **عدم إضافة أحداث في Aggregated Event Measurement** (iOS 14.5+)

---

## 🛡️ 13. الخصوصية والأمان

- ✅ جميع الأدوات متوافقة مع GDPR
- ✅ لا يتم إرسال بيانات حساسة (passwords, credit cards)
- ✅ يُنصح بإضافة Cookie Consent Banner للامتثال القانوني

### إضافة Cookie Banner (اختياري):

استخدم أدوات مثل:
- **Cookiebot**
- **OneTrust**
- **Termly**

---

## 📞 الدعم والمساعدة

إذا واجهت أي مشكلة:

### Google Tag Manager:
- [مركز المساعدة](https://support.google.com/tagmanager)
- [مجتمع Google Tag Manager](https://www.en.advertisercommunity.com/t5/Google-Tag-Manager/ct-p/Google-Tag-Manager)

### Facebook Pixel:
- [دليل Meta Pixel](https://www.facebook.com/business/help/952192354843755)
- [اختبار Facebook Pixel](https://www.facebook.com/business/help/742478679120153)

### Microsoft Clarity:
- [مركز المساعدة](https://learn.microsoft.com/en-us/clarity/)

---

## ✅ Checklist النهائي

قبل النشر، تأكد من:

- [ ] تم تغيير `gtmId` في App.tsx
- [ ] تم تغيير `fbPixelId` في App.tsx
- [ ] تم تغيير `clarityId` في App.tsx
- [ ] تم اختبار الأحداث في Console
- [ ] Facebook Pixel Helper يظهر باللون الأخضر
- [ ] GTM Preview Mode يعمل بنجاح
- [ ] Clarity بدأ التسجيل
- [ ] تم ربط Google Analytics بـ GTM (اختياري)
- [ ] تم إعداد Conversions في Facebook Ads
- [ ] تم إعداد Conversions في Google Ads

---

## 🚀 النشر

بعد التأكد من كل شيء:

```bash
git add .
git commit -m "Add analytics: GTM, Facebook Pixel, Microsoft Clarity"
git push origin main
```

**⏱️ الوقت المتوقع للتفعيل:** 5-10 دقائق بعد النشر

---

## 📊 ماذا بعد؟

1. **راقب الأداء** في الـ 24-48 ساعة الأولى
2. **اختبر الأحداث** عدة مرات للتأكد
3. **أنشئ Audiences** في Facebook لإعادة الاستهداف
4. **راجع Session Recordings** في Clarity لتحسين UX
5. **حلل البيانات** في Google Analytics

---

🎉 **مبروك! الآن موقعك مجهز بأقوى أدوات التتبع!** 🎉
