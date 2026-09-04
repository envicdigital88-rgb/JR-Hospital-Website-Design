import type { ServiceCategory } from '@/types/content';

export const serviceCategories: ServiceCategory[] = [
{
  id: 'round-the-clock',
  title: '24-Hour Services',
  summary:
  'The core of the hospital. Outpatient care, medicines, tests and emergency treatment are available at any hour, every day.',
  icon: 'clock',
  tone: 'red',
  items: [
  { name: '24 Hour OPD', description: 'Outpatient consultations available day and night, no appointment required.' },
  { name: '24 Hour Pharmacy', description: 'Prescribed medicines dispensed on site around the clock.' },
  { name: '24 Hour Laboratory', description: 'Routine and urgent investigations processed at any hour.' },
  { name: 'Emergency Treatment Unit', description: 'Immediate assessment and stabilisation for urgent conditions.' },
  { name: 'Ambulance Services', description: 'Patient transport to and from the hospital when needed.' }]

},
{
  id: 'diagnostics',
  title: 'Diagnostics',
  summary: 'On-site imaging so investigations and results stay in one place.',
  icon: 'scan',
  tone: 'green',
  items: [
  { name: 'Digital X-Ray', description: 'Fast digital radiography with same-visit reporting.' },
  { name: 'Ultrasound Scanning', description: 'Abdominal, obstetric and general ultrasound scanning.' },
  { name: '2D Echo', description: 'Echocardiography for cardiac assessment.' }]

},
{
  id: 'treatment',
  title: 'Treatment',
  summary: 'Ongoing and procedural care delivered by trained nursing and medical staff.',
  icon: 'syringe',
  tone: 'green',
  items: [
  { name: 'Chemotherapy', description: 'Supervised chemotherapy administration in a monitored setting.' },
  { name: 'Wound Dressing and Suturing', description: 'Wound cleaning, dressing and suturing, including diabetic wound care.' },
  { name: 'Preliminary Care Unit', description: 'First-line care and observation before admission or referral.' }]

},
{
  id: 'specialist',
  title: 'Specialist Care',
  summary: 'Consultant-led clinics for focused assessment and treatment.',
  icon: 'stethoscope',
  tone: 'green',
  items: [
  { name: 'Specialist Consultation Services', description: 'Consultant sessions across a range of disciplines.' },
  { name: 'Eye Clinic', description: 'Eye examinations, screening and follow-up care.' },
  { name: 'Cataract Eye Surgery', description: 'Cataract surgery under consultant eye surgeon care.' },
  { name: 'Dental Clinic', description: 'Routine dental examination and treatment.' }]

},
{
  id: 'rehabilitation',
  title: 'Rehabilitation & Therapy',
  summary: 'Recovery, mobility, hearing and communication support.',
  icon: 'activity',
  tone: 'green',
  items: [
  { name: 'Physiotherapy Services', description: 'Rehabilitation for injury, pain and post-operative recovery.' },
  { name: 'Audiology Services', description: 'Hearing assessment and related support.' },
  { name: 'Speech and Language Therapy', description: 'Assessment and therapy for speech and language needs.' }]

},
{
  id: 'patient-support',
  title: 'Patient Support',
  summary: 'Care that continues beyond the consultation room — at the ward and at home.',
  icon: 'heart-handshake',
  tone: 'green',
  items: [
  { name: 'Fully Air-Conditioned Admission Rooms', description: 'Comfortable air-conditioned rooms for inward patients.' },
  { name: 'Home Nursing Visits', description: 'Trained nursing care delivered at the patient’s home.' },
  { name: 'Physiological Counselling', description: 'Counselling support as listed by the hospital.' },
  { name: 'Counselling Services', description: 'Confidential counselling for patients and families.' },
  { name: 'Ambulance Services', description: 'Emergency and non-emergency patient transport.' }]

},
{
  id: 'other',
  title: 'Other Facilities',
  summary: 'Practical details that make a hospital visit easier.',
  icon: 'car',
  tone: 'green',
  items: [{ name: 'Spacious Parking Area', description: 'On-site parking for patients and visitors.' }]
}];


export const keyFacilities = [
{
  name: 'Emergency Treatment',
  description: 'Immediate care, any hour of the day or night.',
  icon: 'siren'
},
{ name: 'Digital X-Ray', description: 'Fast digital imaging with same-visit results.', icon: 'scan' },
{ name: 'Ultrasound', description: 'General and obstetric scanning on site.', icon: 'waves' },
{ name: 'Laboratory', description: 'Round-the-clock testing and reporting.', icon: 'flask' },
{ name: 'Eye Clinic', description: 'Examinations and cataract surgery.', icon: 'eye' },
{ name: 'Pharmacy', description: 'Prescribed medicines dispensed 24 hours.', icon: 'pill' }];


export const roundTheClock = [
{ title: '24-Hour OPD', detail: 'Walk in and see a doctor at any hour.' },
{ title: '24-Hour Pharmacy', detail: 'Medicines dispensed on site, always open.' },
{ title: '24-Hour Laboratory', detail: 'Urgent tests processed through the night.' },
{ title: 'Emergency Care', detail: 'Emergency Treatment Unit and ambulance.' }];
