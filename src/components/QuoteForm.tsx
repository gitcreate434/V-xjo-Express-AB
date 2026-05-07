import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, Package, MapPin, CheckCircle } from 'lucide-react';

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromAddress: '',
    toAddress: '',
    homeSize: '1-2',
    services: [] as string[],
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Från Adress i Växjö</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input required type="text" placeholder="T.ex. Storgatan 1" className="w-full pl-9 pr-4 py-3 bg-slate-50 border-slate-200 border rounded-xl text-sm focus:outline-brand-orange" onChange={e => setFormData({...formData, fromAddress: e.target.value})} defaultValue={formData.fromAddress} />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Till Adress</label>
              <div className="relative">
                <CheckCircle className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input required type="text" placeholder="Ny adress" className="w-full pl-9 pr-4 py-3 bg-slate-50 border-slate-200 border rounded-xl text-sm focus:outline-brand-orange" onChange={e => setFormData({...formData, toAddress: e.target.value})} defaultValue={formData.toAddress} />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid grid-cols-1 gap-3">
            <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Bostadstyp & Volym</label>
            {['1-2 RoK', '3-4 RoK', 'Villa/Radhus', 'Möbler'].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setFormData({...formData, homeSize: size})}
                className={`p-3 border rounded-xl text-left transition-all flex items-center gap-3 ${
                  formData.homeSize === size 
                    ? 'border-brand-orange bg-orange-50/50 ring-1 ring-brand-orange' 
                    : 'border-slate-200 bg-slate-50 hover:border-brand-orange'
                }`}
              >
                <Package className={`w-4 h-4 ${formData.homeSize === size ? 'text-brand-orange' : 'text-slate-400'}`} />
                <span className={`block font-medium text-sm ${formData.homeSize === size ? 'text-brand-blue' : 'text-slate-700'}`}>{size}</span>
              </button>
            ))}
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-3">
             <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Kontaktuppgifter</label>
             <div>
                <input required type="text" placeholder="Ditt Namn" className="w-full px-4 py-3 bg-slate-50 border-slate-200 border rounded-xl text-sm focus:outline-brand-orange" onChange={e => setFormData({...formData, name: e.target.value})} defaultValue={formData.name} />
              </div>
              <div>
                <input required type="email" placeholder="E-post" className="w-full px-4 py-3 bg-slate-50 border-slate-200 border rounded-xl text-sm focus:outline-brand-orange" onChange={e => setFormData({...formData, email: e.target.value})} defaultValue={formData.email} />
              </div>
              <div>
                <input required type="tel" placeholder="Telefonnummer" className="w-full px-4 py-3 bg-slate-50 border-slate-200 border rounded-xl text-sm focus:outline-brand-orange" onChange={e => setFormData({...formData, phone: e.target.value})} defaultValue={formData.phone} />
              </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6 flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2">Tack!</h3>
            <p className="text-slate-600 text-sm">
              Vi har tagit emot dina uppgifter och återkommer med en kostnadsfri offert inom 2 timmar.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="offert" className="h-full">
      <div className="bg-white rounded-3xl p-6 lg:p-8 text-brand-blue shadow-2xl flex flex-col h-full border border-white/5">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
          <span className="uppercase font-black tracking-widest text-xs">Boka Flytt Nu</span>
        </div>
        
        {step < 4 && (
           <h3 className="text-2xl font-bold mb-6">Beräkna din flytt</h3>
        )}

        <form onSubmit={handleNext} className="flex flex-col flex-1">
          <div className="flex-1 min-h-[220px]">
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
          </div>

          {step < 4 && (
            <div className="mt-8 flex flex-col gap-4">
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-orange transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
              <div className="flex gap-2">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-4 rounded-xl text-brand-blue font-bold hover:bg-slate-50 border border-slate-200 transition-colors"
                  >
                    Tillbaka
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-[#143c5c] transition-colors"
                >
                  {step === 3 ? 'Skicka förfrågan' : 'Nästa steg'}
                  {step < 3 && <ChevronRight className="w-5 h-5 ml-1" />}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
