# دليل ربط الفورم بـ Google Sheets وإرسال الإيميلات

## الخطوة 1: إنشاء Google Sheet جديد

1. اذهب إلى [Google Sheets](https://sheets.google.com)
2. أنشئ ملف جديد باسم "عملاء مصنع السلام"
3. في الصف الأول (Row 1) اكتب العناوين التالية:

| التاريخ والوقت | الاسم | رقم الهاتف | اسم المصنع | الاحتياج المعدني | هل يوجد رسومات؟ | نوع المشروع |
|---|---|---|---|---|---|---|

---

## الخطوة 2: فتح محرر الأكواد (Apps Script)

1. في Google Sheet، اضغط على **Extensions** (الإضافات)
2. اختر **Apps Script**
3. سيفتح محرر الأكواد

---

## الخطوة 3: نسخ ولصق الكود التالي

احذف الكود الموجود تماماً والصق هذا الكود:

```javascript
// ==========================================
// كود ربط الفورم بـ Google Sheets
// مصنع السلام للصناعات المعدنية
// ==========================================

// ضع الإيميل الذي تريد استلام الإشعارات عليه
const NOTIFICATION_EMAIL = "your-email@gmail.com"; // غير هذا الإيميل

// اسم الشيت (الورقة) الذي سيتم حفظ البيانات فيه
const SHEET_NAME = "Sheet1"; // أو "ورقة1" حسب اللغة

function doPost(e) {
  try {
    // فتح الشيت
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // قراءة البيانات المرسلة
    const data = JSON.parse(e.postData.contents);
    
    // إضافة صف جديد بالبيانات
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.companyName,
      data.requirements,
      data.hasDrawings,
      data.projectType
    ]);
    
    // إرسال إيميل للإشعار
    sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// دالة إرسال الإيميل
function sendEmailNotification(data) {
  const subject = "🔔 عميل جديد - مصنع السلام للصناعات المعدنية";
  
  const htmlBody = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f5f5f5;
          padding: 20px;
        }
        .container {
          background-color: white;
          max-width: 600px;
          margin: 0 auto;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #0B1C2D 0%, #2F2F2F 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f9f9f9;
          border-right: 4px solid #FF8C00;
          border-radius: 5px;
        }
        .field-label {
          font-weight: bold;
          color: #0B1C2D;
          margin-bottom: 5px;
        }
        .field-value {
          color: #2F2F2F;
          font-size: 16px;
        }
        .footer {
          background-color: #0B1C2D;
          color: white;
          text-align: center;
          padding: 20px;
          font-size: 14px;
        }
        .cta-button {
          display: inline-block;
          background-color: #FF8C00;
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 عميل محتمل جديد!</h1>
          <p>تم استلام طلب جديد من الموقع</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">📅 التاريخ والوقت:</div>
            <div class="field-value">${data.timestamp}</div>
          </div>
          
          <div class="field">
            <div class="field-label">👤 الاسم:</div>
            <div class="field-value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📱 رقم الهاتف:</div>
            <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">🏭 اسم المصنع:</div>
            <div class="field-value">${data.companyName}</div>
          </div>
          
          <div class="field">
            <div class="field-label">🔧 الاحتياج المعدني:</div>
            <div class="field-value">${data.requirements}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📋 هل يوجد رسومات:</div>
            <div class="field-value">${data.hasDrawings}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📦 نوع المشروع:</div>
            <div class="field-value">${data.projectType}</div>
          </div>
          
          <center>
            <a href="tel:${data.phone}" class="cta-button">اتصل بالعميل الآن</a>
          </center>
        </div>
        
        <div class="footer">
          <p>مصنع السلام للصناعات المعدنية</p>
          <p style="font-size: 12px; opacity: 0.8;">العاشر من رمضان - المنطقة الصناعية الثالثة - الستة مليون</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  // إرسال الإيميل
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

// دالة اختبارية (اختياري - للتأكد من أن الكود يعمل)
function testEmail() {
  const testData = {
    timestamp: new Date().toLocaleString('ar-EG'),
    name: "أحمد محمد",
    phone: "01234567890",
    companyName: "مصنع الاختبار",
    requirements: "هذا اختبار للنظام",
    hasDrawings: "نعم لدي رسومات معدنية",
    projectType: "تشكيل معادن"
  };
  
  sendEmailNotification(testData);
  Logger.log("تم إرسال إيميل تجريبي!");
}
```

---

## الخطوة 4: حفظ ونشر الكود

1. اضغط على **💾 Save** (حفظ) أو `Ctrl + S`
2. سمّي المشروع: "Lead Form Handler"
3. اضغط على **Deploy** (نشر) → **New deployment** (نشر جديد)
4. اختر **Type**: **Web app**
5. املأ البيانات كالتالي:
   - **Description**: "Form submission handler"
   - **Execute as**: **Me** (أنا)
   - **Who has access**: **Anyone** (أي شخص)
6. اضغط **Deploy** (نشر)
7. سيطلب منك **Authorize access** (السماح بالوصول) - اضغط عليها
8. اختر حسابك في Google
9. اضغط **Advanced** ثم **Go to [project name] (unsafe)**
10. اضغط **Allow** (السماح)

---

## الخطوة 5: نسخ رابط الـ Web App

بعد النشر، ستحصل على رابط يبدأ بـ:
```
https://script.google.com/macros/s/AKfycby.../exec
```

**📋 انسخ هذا الرابط كاملاً!**

---

## الخطوة 6: وضع الرابط في الموقع

1. افتح ملف `/src/app/components/LeadFormSection.tsx`
2. ابحث عن السطر:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. استبدله بالرابط الذي نسخته:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. احفظ الملف

---

## الخطوة 7: تغيير الإيميل

في كود Google Apps Script، غيّر السطر:
```javascript
const NOTIFICATION_EMAIL = "your-email@gmail.com";
```

ضع إيميلك الحقيقي:
```javascript
const NOTIFICATION_EMAIL = "factory@elsalam.com";
```

ثم احفظ الكود مرة أخرى.

---

## الخطوة 8: اختبار النظام (اختياري)

في محرر Apps Script:
1. اختر دالة `testEmail` من القائمة المنسدلة في الأعلى
2. اضغط على زر **Run** (تشغيل)
3. تحقق من إيميلك - يجب أن تستلم إيميل تجريبي

---

## ✅ انتهى! الآن النظام جاهز

عند ملء الفورم من الموقع:
- ✅ البيانات تُحفظ في Google Sheets تلقائياً
- ✅ تستلم إيميل فوري بتفاصيل العميل
- ✅ الإيميل يحتوي على زر "اتصل بالعميل الآن"

---

## 🔍 استكشاف الأخطاء

### المشكلة: البيانات لا تصل للشيت
- تأكد من اسم الشيت `SHEET_NAME` صحيح (Sheet1 أو ورقة1)
- تأكد من أن العمود الأول فيه العناوين

### المشكلة: الإيميل لا يصل
- تأكد من تغيير `NOTIFICATION_EMAIL`
- تحقق من مجلد Spam/Junk
- جرّب دالة `testEmail()`

### المشكلة: خطأ عند النشر
- تأكد من اختيار **Anyone** في **Who has access**
- تأكد من السماح بجميع الصلاحيات

---

## 📊 مميزات إضافية

### إرسال لأكثر من إيميل:
غيّر:
```javascript
const NOTIFICATION_EMAIL = "email1@gmail.com,email2@gmail.com,email3@gmail.com";
```

### إضافة نسخة كربونية (CC):
في دالة `sendEmailNotification`، أضف:
```javascript
MailApp.sendEmail({
  to: NOTIFICATION_EMAIL,
  cc: "manager@elsalam.com",
  subject: subject,
  htmlBody: htmlBody
});
```

---

## 💡 نصائح مهمة

- 🔒 **الأمان**: الرابط آمن لأن Google تديره
- 📈 **التحليل**: يمكنك عمل charts في Google Sheets
- 🔔 **الإشعارات**: يمكنك ربطه بـ Telegram أو WhatsApp لاحقاً
- 💾 **النسخ الاحتياطي**: البيانات محفوظة في Google Drive تلقائياً

---

## 📞 هل تحتاج مساعدة؟

إذا واجهت أي مشكلة، تأكد من:
1. ✅ الرابط منسوخ كاملاً
2. ✅ الإيميل مكتوب صح
3. ✅ اسم الشيت صحيح
4. ✅ السماح بجميع الصلاحيات عند النشر
