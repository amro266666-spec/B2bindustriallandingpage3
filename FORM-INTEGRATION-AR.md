# 📧 دليل ربط النموذج بالـ Backend

## 🎯 الخيارات المتاحة

### ⭐ 1. Formspree (الأسهل - موصى به)

**مجاني حتى 50 رسالة شهرياً**

#### الخطوات:

1. **التسجيل**
   - اذهب لـ [formspree.io](https://formspree.io)
   - سجل مجاناً

2. **إنشاء نموذج**
   - اضغط "+ New Form"
   - سمّه "Industrial Contact Form"
   - انسخ الـ Form ID (مثل: `abc123xyz`)

3. **تعديل الكود**
   
   في ملف `/src/app/components/LeadFormSection.tsx`، عدّل دالة `onSubmit`:

```typescript
const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        projectType: data.projectType,
        _subject: `طلب جديد من ${data.name}`,
      }),
    });

    if (response.ok) {
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      throw new Error('فشل الإرسال');
    }
  } catch (error) {
    console.error('خطأ في الإرسال:', error);
    alert('حدث خطأ، يرجى المحاولة مرة أخرى');
  }
};
```

**✅ انتهى! كل طلب سيصلك على إيميلك**

---

### 🔵 2. Netlify Forms (إذا نشرت على Netlify)

**مجاني 100 رسالة شهرياً**

#### الخطوة 1: تعديل HTML

في `/src/app/components/LeadFormSection.tsx`، أضف `data-netlify="true"`:

```tsx
<form 
  onSubmit={handleSubmit(onSubmit)} 
  className="bg-[#E6E6E6] p-8 rounded-lg shadow-lg"
  data-netlify="true"
  name="contact"
>
  {/* Hidden input for Netlify */}
  <input type="hidden" name="form-name" value="contact" />
  
  {/* باقي الحقول... */}
</form>
```

#### الخطوة 2: تعديل onSubmit

```typescript
const onSubmit = async (data: FormData) => {
  try {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('projectType', data.projectType);

    await fetch('/', {
      method: 'POST',
      body: formData,
    });

    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (error) {
    console.error('خطأ:', error);
  }
};
```

#### الخطوة 3: تفعيل Notifications

في لوحة Netlify:
- اذهب لـ Settings → Forms → Form notifications
- أضف Email notification
- أدخل إيميلك

**✅ الآن ستصلك تنبيهات لكل طلب!**

---

### 📮 3. EmailJS (بدون Backend)

**مجاني 200 رسالة شهرياً**

#### التثبيت:

```bash
npm install @emailjs/browser
```

#### الإعداد:

1. **التسجيل**
   - اذهب لـ [emailjs.com](https://www.emailjs.com)
   - سجل مجاناً

2. **إعداد الخدمة**
   - Email Services → Add New Service
   - اختر Gmail/Outlook/etc
   - اربط حسابك

3. **إنشاء Template**
   - Email Templates → Create New Template
   - صمم قالب الإيميل:
   
```
طلب جديد من الموقع

الاسم: {{name}}
الهاتف: {{phone}}
نوع المشروع: {{projectType}}
```

4. **التطبيق**

```typescript
import emailjs from '@emailjs/browser';

const onSubmit = async (data: FormData) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // من EmailJS Dashboard
      'YOUR_TEMPLATE_ID',     // من Email Templates
      {
        name: data.name,
        phone: data.phone,
        projectType: data.projectType,
      },
      'YOUR_PUBLIC_KEY'       // من Account → API Keys
    );

    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (error) {
    console.error('خطأ:', error);
    alert('حدث خطأ، حاول مرة أخرى');
  }
};
```

---

### 🔐 4. Google Sheets (تخزين البيانات)

**مجاني بالكامل**

#### باستخدام Google Apps Script:

1. **إنشاء Google Sheet**
   - أنشئ جدول جديد
   - سمّه "Industrial Leads"

2. **إنشاء Script**
   - Tools → Script Editor
   - الصق الكود:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.phone,
    data.projectType
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({
    result: 'success'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. **Deploy**
   - Deploy → New deployment
   - Select type: Web app
   - Who has access: Anyone
   - انسخ الـ URL

4. **في الكود**:

```typescript
const onSubmit = async (data: FormData) => {
  try {
    await fetch('YOUR_GOOGLE_SCRIPT_URL', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    setIsSubmitted(true);
    reset();
  } catch (error) {
    console.error('خطأ:', error);
  }
};
```

---

### 🚀 5. Backend خاص (Node.js مثلاً)

#### مثال Node.js + Express:

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// إعداد Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // استخدم App Password
  }
});

app.post('/api/submit-lead', async (req, res) => {
  const { name, phone, projectType } = req.body;

  try {
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'sales@yourcompany.com',
      subject: `طلب جديد من ${name}`,
      html: `
        <h2>طلب جديد من الموقع</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>الهاتف:</strong> ${phone}</p>
        <p><strong>نوع المشروع:</strong> ${projectType}</p>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'فشل الإرسال' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

#### في React:

```typescript
const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('https://your-api.com/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsSubmitted(true);
      reset();
    }
  } catch (error) {
    console.error('خطأ:', error);
  }
};
```

---

### 📊 6. Supabase (Database + Email)

**مجاني 500MB database**

#### الإعداد:

1. سجل في [supabase.com](https://supabase.com)
2. أنشئ project جديد
3. أنشئ جدول `leads`:

```sql
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  project_type VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

4. في الكود:

```bash
npm install @supabase/supabase-js
```

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);

const onSubmit = async (data: FormData) => {
  try {
    const { error } = await supabase
      .from('leads')
      .insert([{
        name: data.name,
        phone: data.phone,
        project_type: data.projectType,
      }]);

    if (!error) {
      setIsSubmitted(true);
      reset();
    }
  } catch (error) {
    console.error('خطأ:', error);
  }
};
```

---

## 🎯 المقارنة السريعة

| الخدمة | السهولة | السعر | الرسائل المجانية | الوقت |
|--------|---------|-------|-------------------|-------|
| **Formspree** | ⭐⭐⭐⭐⭐ | مجاني | 50/شهر | 5 دقائق |
| **Netlify Forms** | ⭐⭐⭐⭐ | مجاني | 100/شهر | 10 دقائق |
| **EmailJS** | ⭐⭐⭐⭐ | مجاني | 200/شهر | 15 دقيقة |
| **Google Sheets** | ⭐⭐⭐ | مجاني | غير محدود | 20 دقيقة |
| **Backend خاص** | ⭐⭐ | متغير | غير محدود | ساعات |
| **Supabase** | ⭐⭐⭐ | مجاني | غير محدود | 30 دقيقة |

---

## 🎯 التوصية

- **للمبتدئين**: استخدم **Formspree** (أسهل وأسرع)
- **إذا نشرت على Netlify**: استخدم **Netlify Forms**
- **لتخزين البيانات**: استخدم **Google Sheets** أو **Supabase**
- **للاحترافية**: اعمل **Backend خاص**

---

## 🔔 إضافة Notifications

### خيارات إضافية:

1. **Telegram Bot**
   - أنشئ bot من [@BotFather](https://t.me/botfather)
   - أضف webhook للنموذج
   - استقبل تنبيهات فورية

2. **Slack Integration**
   - اربط Formspree/Netlify مع Slack
   - استقبل الطلبات في قناة مخصصة

3. **WhatsApp Business API**
   - استخدم Twilio/MessageBird
   - أرسل تنبيهات WhatsApp لكل طلب

---

## ✅ الخطوة التالية

اختر الطريقة المناسبة لك وطبّقها، ثم:

1. اختبر النموذج عدة مرات
2. تأكد من استلام الإيميلات/الإشعارات
3. عدّل قالب الرسالة حسب حاجتك
4. فعّل Google Analytics لتتبع التحويلات

**🎉 بالتوفيق!**
