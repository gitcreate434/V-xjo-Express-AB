import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reviews() {
  const reviews = [
    {
      name: "Anna Svensson",
      type: "Privatflytt, Växjö",
      text: "Otroligt smidig flytt! Klockren kommunikation från första samtalet. Personalen var snabba, försiktiga och väldigt trevliga.",
      rating: 5,
    },
    {
      name: "Mikael Lindberg",
      type: "Kontorsflytt, Växjö C",
      text: "Vi behövde flytta vårt kontor över en helg för att inte störa verksamheten. Växjö Express AB löste allt galant.",
      rating: 5,
    },
    {
      name: "Karin Johansson",
      type: "Magasinering & Flytt",
      text: "Fick ett superbra fast pris utan dolda avgifter. Magasinerade även möbler vilket kändes väldigt tryggt.",
      rating: 5,
    }
  ];

  return (
    <section id="omdomen" className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-brand-navy border border-white/5 rounded-3xl p-8 relative flex flex-col h-full"
          >
            <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5" />
            <div className="flex gap-1 text-brand-orange mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-white/80 mb-6 font-medium italic flex-1">"{review.text}"</p>
            <div>
              <p className="font-heading font-bold text-white">{review.name}</p>
              <p className="text-xs text-brand-orange uppercase tracking-wide font-bold mt-1">{review.type}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#" 
          className="inline-block text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-1"
        >
          Läs fler omdömen på Google
        </a>
      </div>
    </section>
  );
}
