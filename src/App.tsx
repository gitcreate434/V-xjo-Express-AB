import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Usps from './components/Usps';
import Services from './components/Services';
import QuoteForm from './components/QuoteForm';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-orange/30 bg-brand-blue flex flex-col pt-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto gap-4">
      <Navbar />
      <main className="flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <Hero />
            <Usps />
          </div>
          <div className="lg:col-span-4">
            <QuoteForm />
          </div>
        </div>
        <Services />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
