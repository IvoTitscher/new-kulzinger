import { Service, ContactInfo, NavigationItem } from '../types';

export const COMPANY_NAME = 'Kulzinger';
export const FULL_COMPANY_NAME = 'Elektro-Service Kulzinger';

export const CONTACT_INFO: ContactInfo = {
  phone: '+49621853996',
  email: 'kulzinger-ilvesheim@t-online.de',
  address: {
    street: 'Beim Schloßgarten 30',
    city: 'Ilvesheim',
    zipCode: '68549'
  }
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Leistungen', href: '#services' },
  { label: 'Verkauf', href: '#products' },
  { label: 'Über Uns', href: '#about' },
  { label: 'Kontakt', href: '#contact', primary: true }
];

export const SERVICES: Service[] = [
  {
    id: 'repairs',
    title: 'Reparaturen',
    icon: 'Hammer',
    iconColor: 'text-blue-600',
    items: [
      { text: 'MIELE', icon: 'CheckCircle' },
      { text: 'BOSCH', icon: 'CheckCircle' },
      { text: 'SIEMENS', icon: 'CheckCircle' },
      { text: 'LIEBHERR', icon: 'CheckCircle' },
      { text: 'Constructa', icon: 'CheckCircle' },
      { text: 'Gaggenau', icon: 'CheckCircle' },
      { text: 'Neff', icon: 'CheckCircle' }
    ],
    warning: 'Ausgeschlossen: Staubsauger & Mikrowellen Reparaturen.'
  },
  {
    id: 'sales',
    title: 'Verkauf',
    icon: 'ShoppingBag',
    iconColor: 'text-green-600',
    items: [
      { text: 'MIELE Fachhändler', icon: 'Award', highlight: true },
      { text: 'BOSCH', icon: 'CheckCircle' },
      { text: 'SIEMENS', icon: 'CheckCircle' },
      { text: 'LIEBHERR', icon: 'CheckCircle' },
      { text: 'NEFF', icon: 'CheckCircle' },
      { text: 'Constructa', icon: 'CheckCircle' }
    ]
  },
  {
    id: 'modernization',
    title: 'Küchenmodernisierung & Handwerkerservice',
    icon: 'LayoutDashboard',
    iconColor: 'text-purple-600',
    items: [
      { text: 'Moderne Einbauküchen', icon: 'ChefHat' },
      { text: 'Senioren- & behindertengerechte Umbauten', icon: 'Accessibility' },
      { text: 'Handwerkerservice rund ums Haus', icon: 'Home' },
      { text: 'Allgemeiner Elektrodienst', icon: 'Power' }
    ]
  }
];

export const INFO_CARDS = [
  {
    id: 'hours',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-900',
    iconColor: 'text-amber-600',
    icon: 'CalendarCheck',
    title: 'Wichtiger Hinweis',
    content: 'Öffnungszeiten nur nach telefonischer oder E-Mail Terminabsprache.',
    highlight: 'Wir bitten um Ihr Verständnis!'
  },
  {
    id: 'phone',
    bgColor: 'bg-green-50',
    textColor: 'text-green-900',
    iconColor: 'text-green-600',
    icon: 'PhoneCall',
    title: 'Telefonische Erreichbarkeit',
    phone: '0621 - 85 39 96',
    content: 'Rufen Sie uns an für Beratung oder Terminvereinbarung.'
  },
  {
    id: 'address',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    iconColor: 'text-blue-600',
    icon: 'MapPin',
    title: 'Unsere Adresse',
    address: CONTACT_INFO.address,
    email: CONTACT_INFO.email
  }
]; 