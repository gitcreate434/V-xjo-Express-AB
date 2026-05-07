import { Home, Briefcase, Package, Truck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: "privat",
      icon: <Home className="w-6 h-6" />,
      title: 'Privatflytt',
      desc: 'Vi tar hand om hela ditt hem.',
      includes: ['Lån av flyttkartonger', 'Packning (frivilligt)', 'Möbelmontering'],
      price: 'fr. 495 kr/h',
      theme: 'bg-brand-orange text-brand-blue',
      btnTheme: 'bg-brand-blue text-white hover:bg-brand-blue/90',
      outlinePattern: true
    },
    {
      id: "foretag",
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Företagsflytt',
      desc: 'Effektiv kontorsflytt utan driftstopp.',
      includes: ['Planeringsmöte', 'Datorer & Tech', 'Helgutköring'],
      price: 'Offert',
      theme: 'bg-brand-navy border border-white/5 text-white',
      btnTheme: 'bg-white/10 border border-white/20 text-white hover:bg-white/20',
      outlinePattern: false
    },
    {
      id: "magasinering",
      icon: <Package className="w-6 h-6" />,
      title: 'Magasinering',
      desc: 'Säker förvaring i Växjös tryggaste lokaler.',
      includes: ['Larmade lokaler', 'Temperaturkontroll', 'Flexibel tid'],
      price: 'fr. 299 kr/mån',
      theme: 'bg-gradient-to-r from-slate-800 to-brand-navy border border-white/5 text-white',
      btnTheme: 'bg-brand-orange text-brand-blue hover:scale-105 transition-transform',
      outlinePattern: false
    },
    {
      id: "tung",
      icon: <Truck className="w-6 h-6" />,
      title: 'Tungtransport',
      desc: 'Säker hantering av kassaskåp och pianon.',
      includes: ['Specialverktyg', 'Bärsele', 'Extra försäkring'],
      price: 'fr. 1500 kr/lyft',
      theme: 'bg-brand-dark border border-white/5 text-white',
      btnTheme: 'bg-brand-orange text-brand-blue hover:scale-105 transition-transform',
      outlinePattern: false
    },
  ];

  return (
    <section id="tjanster" className="pt-4 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`rounded-3xl p-8 relative overflow-hidden flex flex-col ${service.theme}`}
          >
            {service.outlinePattern && (
              <svg className="absolute bottom-[-20px] right-[-20px] w-48 h-48 opacity-10 text-current pointer-events-none" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            )}
            {!service.outlinePattern && index === 1 && (
              <svg className="absolute bottom-[-10px] right-[-10px] w-48 h-48 opacity-[0.03] text-white pointer-events-none" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z"/></svg>
            )}

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="opacity-80">
                  {service.icon}
                </div>
                <h3 className={`font-heading font-black text-2xl ${service.id === 'foretag' ? 'text-brand-orange' : ''}`}>
                  {service.title}
                </h3>
              </div>
              
              <p className="mb-6 text-sm font-semibold opacity-80">{service.desc}</p>
              
              <ul className="mb-8 space-y-2 flex-1 hidden sm:block">
                {service.includes.map((item, i) => (
                  <li key={i} className="text-sm opacity-70 flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${service.id === 'privat' ? 'bg-brand-blue' : 'bg-brand-orange'}`} />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold opacity-90 hidden xl:block">{service.price}</span>
                <a 
                  href="#offert" 
                  className={`text-[10px] uppercase px-4 lg:px-6 py-3 rounded-full font-bold flex items-center gap-2 ${service.btnTheme}`}
                >
                  Boka flytt <ArrowRight className="w-3 h-3 hidden sm:block" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
