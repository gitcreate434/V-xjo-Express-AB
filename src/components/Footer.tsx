import { Truck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 text-white/70 border-t border-white/10 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 flex-1">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 text-white mb-6">
            <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-lg">
              <Truck className="w-5 h-5 text-brand-blue" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight uppercase">
              Växjö Express AB
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6 opacity-80">
            En modern och trygg flyttfirma i Växjö. Vi hjälper privatpersoner och företag med flytt och magasinering till fasta priser. Alltid försäkrat, alltid i tid.
          </p>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <span className="text-sm opacity-90">Flyttvägen 12<br />352 45 Växjö</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-orange shrink-0" />
              <span className="text-sm opacity-90">0470 - XX XX XX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-orange shrink-0" />
              <span className="text-sm opacity-90">info@vaxjoexpress.se</span>
            </li>
          </ul>
        </div>

        {/* Tjänster Links */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Våra tjänster</h4>
          <ul className="space-y-3">
            <li><a href="#tjanster" className="text-sm hover:text-white transition-colors opacity-90">Privatflytt Växjö</a></li>
            <li><a href="#tjanster" className="text-sm hover:text-white transition-colors opacity-90">Företagsflytt & Kontor</a></li>
            <li><a href="#tjanster" className="text-sm hover:text-white transition-colors opacity-90">Magasinering & Förråd</a></li>
            <li><a href="#tjanster" className="text-sm hover:text-white transition-colors opacity-90">Tungtransport</a></li>
            <li><a href="#tjanster" className="text-sm hover:text-white transition-colors opacity-90">Bohagsflytt</a></li>
          </ul>
        </div>

        {/* SEO Landningsområden */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Vi flyttar i</h4>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors opacity-90">Växjö</a></li>
            <li><a href="#" className="hover:text-white transition-colors opacity-90">Alvesta</a></li>
            <li><a href="#" className="hover:text-white transition-colors opacity-90">Tingsryd</a></li>
            <li><a href="#" className="hover:text-white transition-colors opacity-90">Älmhult</a></li>
            <li><a href="#" className="hover:text-white transition-colors opacity-90">Ljungby</a></li>
            <li><a href="#" className="hover:text-white transition-colors opacity-90">Lessebo</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mb-8 flex-wrap gap-4">
        <span>Flyttfirma Växjö</span>
        <span className="hidden sm:inline">•</span>
        <span>Magasinering Växjö</span>
        <span className="hidden sm:inline">•</span>
        <span>Kontorsflytt Växjö</span>
        <span className="hidden md:inline">•</span>
        <span className="hidden md:inline">Tungtransport</span>
      </div>

      <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} Växjö Express AB.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
          <a href="#" className="hover:text-white transition-colors">Allmänna villkor</a>
        </div>
      </div>
    </footer>
  );
}
