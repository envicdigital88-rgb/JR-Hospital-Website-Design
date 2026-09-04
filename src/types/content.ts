export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  summary: string;
  icon: string;
  tone: 'red' | 'green';
  items: ServiceItem[];
}

export interface Doctor {
  name: string;
  qualification: string;
  registration?: string;
  specialty?: string;
  note?: string;
  status: 'confirmed' | 'pending';
}
