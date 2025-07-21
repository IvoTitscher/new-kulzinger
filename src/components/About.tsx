import React from 'react';
import { Building } from 'lucide-react';
import { FULL_COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4 animate-slide-up">
          Über {FULL_COMPANY_NAME}
        </h2>
        <p className="text-xl text-gray-600 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Ihr vertrauenswürdiger Partner für Elektro- und Hausgeräteservice seit 2001.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-full h-80 bg-blue-100 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden relative">
              <Building className="absolute inset-0 m-auto text-blue-300 opacity-20" style={{ width: '70%', height: '70%' }} />
              <span className="text-3xl font-bold text-blue-700 absolute">Firmengebäude (Placeholder)</span>
            </div>
          </div>
          <div className="md:order-1 text-left animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-semibold text-blue-800 mb-5">Tradition trifft Innovation</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Seit unserer Gründung im Jahr 2001 steht Elektro-Service Kulzinger für Kompetenz, 
              Zuverlässigkeit und höchste Servicequalität im Bereich Hausgeräte und Küchenmodernisierung. 
              Wir sind stolz darauf, unseren Kunden in Ilvesheim und Umgebung umfassende Lösungen anzubieten.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unser Team aus erfahrenen Technikern ist stets auf dem neuesten Stand der Technik, 
              um Ihnen den besten Service für Ihre Geräte von Miele, Bosch, Siemens, Liebherr und 
              weiteren führenden Marken zu gewährleisten. Kundenzufriedenheit ist unser höchstes Gebot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 