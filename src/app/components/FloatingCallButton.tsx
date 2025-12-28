import { Phone } from 'lucide-react';

export function FloatingCallButton() {
  const phoneNumber = '01551410539';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-24 left-6 bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 z-50 animate-pulse hover:animate-none"
      aria-label="اتصل بنا"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
}
