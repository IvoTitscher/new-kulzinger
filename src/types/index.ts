export interface Service {
  id: string;
  title: string;
  icon: string;
  items: ServiceItem[];
  warning?: string;
  iconColor?: string;
}

export interface ServiceItem {
  text: string;
  icon?: string;
  highlight?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  primary?: boolean;
} 