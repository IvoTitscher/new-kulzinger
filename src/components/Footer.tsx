import React from 'react';
import { Zap, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_NAME, FULL_COMPANY_NAME, CONTACT_INFO, NAVIGATION_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <a href="#" className="flex items-center justify-center md:justify-start space-x-3 mb-4 transition-all duration-300 hover:scale-105">
            <div className="p-2 bg-blue-500 rounded-lg shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">{COMPANY_NAME}</span>
          </a>
          <p className="text-gray-400 mb-2">
            Ihr Elektrofachbetrieb für Hausgeräte & Küchenmodernisierung.
          </p>
          <p className="text-gray-400">© Copyright {currentYear} {FULL_COMPANY_NAME}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Schnellzugriffe</h4>
          <ul className="space-y-2">
            {NAVIGATION_ITEMS.filter(item => !item.primary).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Kontakt</h4>
          <address className="not-italic space-y-2">
            <p className="flex items-center justify-center md:justify-start">
              <MapPin className="w-5 h-5 mr-3 text-gray-500" />
              {CONTACT_INFO.address.street}, {CONTACT_INFO.address.zipCode} {CONTACT_INFO.address.city}
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Phone className="w-5 h-5 mr-3 text-gray-500" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-blue-400">
                0621 - 85 39 96
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Mail className="w-5 h-5 mr-3 text-gray-500" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-400">
                {CONTACT_INFO.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-8 border-t border-gray-700 pt-8 text-sm text-center">
        <p>
          <a href="#" className="text-gray-400 hover:text-blue-400 mr-4">Impressum</a>
          <a href="#" className="text-gray-400 hover:text-blue-400">Datenschutz</a>
        </p>
        <p className="mt-4 text-gray-500">Webdesign: PTH-Webservice (Placeholder)</p>
      </div>
    </footer>
  );
};

export default Footer; 