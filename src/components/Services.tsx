import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const Services: React.FC = () => {
  const getIcon = (iconName: string, className?: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return Icon ? <Icon className={className} /> : null;
  };

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4 animate-slide-up">
          Unser Leistungsspektrum
        </h2>
        <p className="text-xl text-gray-600 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Wir bieten umfassenden Kundendienst für Ihre Haushaltsgroßgeräte und mehr.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: Service, index: number) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50 card-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                {getIcon(service.icon, `w-14 h-14 ${service.iconColor || 'text-blue-600'}`)}
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">{service.title}</h3>
              <ul className="text-lg text-gray-700 space-y-2 list-none p-0">
                {service.items.map((item, itemIndex) => {
                  const iconColor = item.icon === 'Award' ? 'text-yellow-500' : 
                                   item.icon === 'CheckCircle' ? 'text-green-500' : 
                                   'text-purple-500';
                  
                  return (
                    <li key={itemIndex} className="flex items-center justify-center space-x-2">
                      {item.icon && getIcon(item.icon, `w-5 h-5 ${iconColor}`)}
                      <span className={item.highlight ? 'font-semibold' : ''}>{item.text}</span>
                    </li>
                  );
                })}
                {/* Add empty items to maintain consistent height */}
                {Array.from({ length: 7 - service.items.length }).map((_, i) => (
                  <li key={`empty-${i}`} className="py-2 opacity-0"></li>
                ))}
              </ul>
              {service.warning && (
                <p className="text-red-500 font-semibold mt-6 text-base">
                  <Icons.AlertTriangle className="w-4 h-4 inline-block mr-1" />
                  {service.warning}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 