import { useState, useEffect } from 'react';
import { Truck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tjänster', href: '#tjanster' },
    { name: 'Priser', href: '#priser' },
    { name: 'Om oss', href: '#om-oss' },
    { name: 'Omdömen', href: '#omdomen' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-blue/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 bg-brand-orange flex items-center justify-center rounded-lg shadow-lg shadow-orange-950/20">
            <Truck className="w-6 h-6 text-brand-blue" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight uppercase hidden sm:block">
            Växjö Express AB
          </span>
          <span className="font-heading font-bold text-xl tracking-tight uppercase sm:hidden">
            Växjö Express
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-opacity cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#offert"
            className="bg-brand-orange text-brand-blue px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide hover:brightness-110 shadow-lg shadow-orange-950/20 transition-all"
          >
            Få offert
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navy border-t border-white/10 overflow-hidden"
          >
            <ul className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white/80 font-medium text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <a
                  href="#offert"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-brand-orange text-brand-blue font-bold px-6 py-3 rounded-xl uppercase tracking-wide"
                >
                  Få offert
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
