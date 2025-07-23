import React from 'react';
import * as Icons from 'lucide-react';
import { INFO_CARDS, CONTACT_INFO } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100" id="contact-info">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INFO_CARDS.map((card) => {
          const Icon = Icons[card.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          
          return (
            <div
              key={card.id}
              className={`${card.bgColor} ${card.textColor} p-8 rounded-2xl shadow-lg flex flex-col items-center text-center card-hover transition-all duration-300`}
            >
              <Icon className={`w-12 h-12 mb-4 ${card.iconColor}`} />
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              
              {card.phone && (
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-3xl font-extrabold tracking-tight mt-2 text-green-700 hover:underline">
                  {card.phone}
                </a>
              )}
              
              {card.address && (
                <>
                  <p className="text-xl font-bold mb-2">{card.address.street}</p>
                  <p className="text-lg">{card.address.zipCode} {card.address.city}</p>
                </>
              )}
              
              {card.content && (
                <p className="text-lg mt-3">{card.content}</p>
              )}
              
              {card.highlight && (
                <p className="mt-4 text-xl font-bold">{card.highlight}</p>
              )}
              
              {card.email && (
                <a href={`mailto:${card.email}`} className="text-blue-700 hover:underline mt-3 flex items-center space-x-2">
                  <Icons.Mail className="w-5 h-5" />
                  <span>{card.email}</span>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoSection; 