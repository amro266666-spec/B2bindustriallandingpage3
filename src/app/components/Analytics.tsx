import { useEffect } from 'react';

interface AnalyticsProps {
  gtmId?: string;
  fbPixelId?: string;
  clarityId?: string;
}

export function Analytics({ gtmId, fbPixelId, clarityId }: AnalyticsProps) {
  useEffect(() => {
    // Google Tag Manager
    if (gtmId && gtmId !== 'GTM-XXXXXXX') {
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(gtmScript);

      // GTM noscript iframe
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);

      console.log('✅ Google Tag Manager loaded:', gtmId);
    }

  
// ===================== Facebook Pixel =====================
if (fbPixelId && !document.getElementById('fb-pixel-script')) {
  const fbScript = document.createElement('script');
  fbScript.id = 'fb-pixel-script';
  fbScript.async = true;
  fbScript.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(fbScript);

  // هنا بنستنى السكربت يكمّل تحميله
  fbScript.onload = () => {
    const w = window as any;

    if (!w.fbq) {
      w.fbq = function () {
        w.fbq.callMethod
          ? w.fbq.callMethod.apply(w.fbq, arguments)
          : w.fbq.queue.push(arguments);
      };
      w.fbq.push = w.fbq;
      w.fbq.loaded = true;
      w.fbq.version = '2.0';
      w.fbq.queue = [];
    }

    // تهيئة Pixel بعد تحميل السكربت
    w.fbq('init', fbPixelId);
    w.fbq('track', 'PageView');

    console.log('✅ Facebook Pixel loaded:', fbPixelId);
  };
}

    // Microsoft Clarity
    if (clarityId && clarityId !== 'YOUR_CLARITY_ID') {
      const clarityScript = document.createElement('script');
      clarityScript.type = 'text/javascript';
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `;
      document.head.appendChild(clarityScript);

      console.log('✅ Microsoft Clarity loaded:', clarityId);
    }
  }, [gtmId, fbPixelId, clarityId]);

  return null;
}

// دوال مساعدة لتتبع الأحداث
export const trackEvent = {
  // تتبع حدث في Facebook Pixel
  fbPixel: (eventName: string, data?: any) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, data);
      console.log('📊 FB Pixel Event:', eventName, data);
    }
  },

  // تتبع حدث في Google Tag Manager
  gtm: (eventName: string, data?: any) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...data
      });
      console.log('📊 GTM Event:', eventName, data);
    }
  },

  // تتبع حدث في Clarity
  clarity: (eventName: string, data?: any) => {
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('set', eventName, data);
      console.log('📊 Clarity Event:', eventName, data);
    }
  },

  // تتبع في الثلاث منصات معاً
  all: (eventName: string, data?: any) => {
    trackEvent.fbPixel(eventName, data);
    trackEvent.gtm(eventName, data);
    trackEvent.clarity(eventName, data);
  }
};

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    clarity: any;
  }
}
