import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-brand-blue rounded-3xl p-8 lg:p-12 flex flex-col justify-center border border-white/10 overflow-hidden h-full min-h-[400px]">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="80" cy="20" r="40" fill="white" /></svg>
      </div>

      <div className="relative z-20 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 mb-6 text-sm font-medium text-white/90">
            <span className="flex text-brand-orange">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </span>
            <span>4.9/5 kundbetyg i Växjö</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-white">
            Trygg & prisvärd <br/>
            <span className="text-brand-orange">flytt i Växjö</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
            Privatflytt, företagsflytt och magasinering. Vi löser allt – från första kartongen till sista möbeln.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#offert"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:scale-105 text-brand-blue font-bold px-8 py-4 rounded-xl transition-transform text-lg"
            >
              Få offert inom 2 timmar
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#tjanster"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Se våra tjänster
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
