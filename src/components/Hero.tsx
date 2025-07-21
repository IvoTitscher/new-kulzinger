import React from 'react';
import { Phone, Info, Wrench, Home } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' opacity='.1'><circle cx='20' cy='20' r='10' fill='%2393c5fd'/><circle cx='80' cy='80' r='15' fill='%23bfdbfe'/><rect x='50' y='10' width='10' height='10' fill='%2360a5fa' rx='2'/><path d='M10 90 L30 90 L30 70 L10 70 L10 90 Z' fill='%2393c5fd'/></svg>")`,
            backgroundSize: '200px',
            animation: 'backgroundPan 60s linear infinite'
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6 text-shadow-light">
            Ihr Spezialist für <br className="hidden md:inline" />
            <span className="text-blue-600">Hausgeräte & Service</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Kompetenter Kundendienst, Verkauf und Modernisierung Ihrer Küche – alles aus einer Hand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5 mr-2" /> Jetzt Termin vereinbaren
            </a>
            <a href="#services" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 border border-blue-200 font-semibold rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              <Info className="w-5 h-5 mr-2" /> Unsere Leistungen
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-full max-w-md h-64 md:h-80 bg-blue-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative">
            <Wrench className="absolute inset-0 m-auto text-blue-300 opacity-20" style={{ width: '70%', height: '70%' }} />
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-50 text-blue-800 font-bold text-lg flex items-center space-x-2 animate-slide-up" style={{ animationDelay: '1s' }}>
              <Home className="w-6 h-6 text-blue-600" />
              <span>Ihr Experte Zuhause</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 