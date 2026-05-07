import { CheckCircle, Shield, Clock, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Usps() {
  const usps = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Fast pris',
      description: 'Inga dolda avgifter',
      iconBg: 'bg-green-500/20'
    },
    {
      icon: <span className="text-brand-orange font-black">4.9</span>,
      title: 'Kundbetyg',
      description: '150+ nöjda kunder i Växjö',
      iconBg: 'bg-orange-500/20'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Försäkrad',
      description: 'Fullt skydd under transport',
      iconBg: 'bg-blue-500/20'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Snabb service',
      description: 'Snabbt och effektivt',
      iconBg: 'bg-purple-500/20'
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {usps.map((usp, index) => (
        <motion.div
          key={usp.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-brand-navy rounded-3xl p-6 flex flex-col justify-center items-start gap-4 border border-white/5"
        >
          <div className={`w-12 h-12 ${usp.iconBg} rounded-full flex items-center justify-center`}>
            {usp.icon}
          </div>
          <div>
            <h4 className="font-bold text-lg text-white">{usp.title}</h4>
            <p className="text-sm opacity-60 text-white italic">{usp.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
