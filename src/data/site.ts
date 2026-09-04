// Single source of truth for all hospital contact / identity information.
// Update values here only — nothing is hard-coded elsewhere in the site.

export const site = {
  registeredName: 'Ja-Ela Ragama Hospitals (Pvt) Ltd',
  publicName: 'JR Hospital',
  publicNameFull: 'JR Hospital – Ja-Ela',
  tagline: 'Quality Healthcare. Trusted Care.',
  logoUrl: "/JRH_logo_highres.png",

  address: {
    line1: 'No. 259, Negombo Road',
    city: 'Ja-Ela',
    postalCode: '11350',
    country: 'Sri Lanka',
    full: 'No. 259, Negombo Road, Ja-Ela, Sri Lanka 11350'
  },
  coordinates: {
    lat: 7.08829,
    lng: 79.89059
  },
  phones: {
    // Primary landline shown in the header and used for "Call Now".
    landline: { label: 'Main Landline', display: '011 222 6088', dial: '+94112226088' },
    landlineAlt: { label: 'Additional Landline', display: '011 224 7440', dial: '+94112247440' },
    // Mobile hotline used for appointments and WhatsApp.
    hotline: { label: 'Mobile / Appointments', display: '076 022 8181', dial: '+94760228181' },
    alt: { label: 'Additional Contact', display: '077 341 9425', dial: '+94773419425' }
  },
  whatsapp: '+94760228181',
  email: 'ragamahospitals@gmail.com',
  hours: '24 Hours — Every day of the year',
  // Social links stay empty until the hospital confirms the official pages.
  social: {
    facebook: '',
    instagram: ''
  }
} as const;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}&z=16&output=embed`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.coordinates.lat},${site.coordinates.lng}`;

export const telHref = (dial: string) => `tel:${dial}`;

export const whatsappHref = `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`;

export const mailtoHref = `mailto:${site.email}`;
