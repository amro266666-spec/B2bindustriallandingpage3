import { Phone } from 'lucide-react';
import { trackEvent } from './Analytics';

export function FloatingCallButton() {
  const handleCallClick = () => {
    // تتبع النقر على زر الاتصال
    trackEvent.all('PhoneCallClicked', {
      button_location: 'floating_button',
      phone_number: '01551410539'
    });
  };

  return (
    <a
      href="tel:01551410539"
      onClick={handleCallClick}
      className="fixed bottom-6 left-6 bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center group"
      aria-label="اتصل بنا"
    >
      <Phone className="w-6 h-6 group-hover:animate-pulse" />
    </a>
  );
}