import { Clock, XCircle, ShieldAlert, AlertCircle } from 'lucide-react';

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Clock,
      text: 'تأخير في التنفيذ',
    },
    {
      icon: XCircle,
      text: 'عدم الالتزام بالمواصفات الهندسية',
    },
    {
      icon: ShieldAlert,
      text: 'ضعف جودة اللحام والتشطيب',
    },
    {
      icon: AlertCircle,
      text: 'صعوبة التعامل مع مورد موثوق',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#E6E6E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 text-[#0B1C2D]" style={{ fontWeight: 700 }}>
          بتواجه مشاكل من دي؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <point.icon className="w-12 h-12 mx-auto mb-4 text-[#FF8C00]" strokeWidth={1.5} />
              <p className="text-[#2F2F2F]">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}