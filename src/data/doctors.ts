import type { Doctor } from '@/types/content';

// Doctors supplied and confirmed by the hospital. Add new entries here —
// the doctors page renders whatever is in these arrays.
export const hospitalDoctors: Doctor[] = [
{ name: 'Dr. W.M.D.C. Fonseka', qualification: 'MBBS', registration: '17157', status: 'confirmed' },
{ name: 'Dr. M.P.N. Anjana', qualification: 'MBBS', registration: '44694', status: 'confirmed' },
{
  name: 'Dr. W.A.S.G. Vithanage',
  qualification: 'MBBS',
  registration: '1591',
  note: 'Retired RMO',
  status: 'confirmed'
},
{ name: 'Dr. M.A.P.C.S. Perera', qualification: 'MBBS', registration: '36986', status: 'confirmed' },
{ name: 'Dr. S.P. Perera', qualification: 'MBBS', registration: '41823', status: 'confirmed' },
{ name: 'Dr. N. Pulukuttiarachchigi', qualification: 'MBBS', registration: '48702', status: 'confirmed' }];


// Visiting consultants listed on external booking platforms.
// Kept out of the published page until the hospital confirms them:
// set `publishPendingDoctors` to true in data/site config once confirmed.
export const pendingDoctors: Doctor[] = [
{ name: 'Dr. Jayan De Silva', qualification: 'MBBS', specialty: 'Consultant Eye Surgeon', status: 'pending' },
{ name: 'Dr. H.G. Subasinghe', qualification: 'MBBS', specialty: 'Consultant Physician', status: 'pending' },
{ name: 'Dr. Janaka Chaminda', qualification: 'MBBS', specialty: 'Chest Physician', status: 'pending' }];


export const initialsOf = (name: string): string => {
  const parts = name.
  replace(/^Dr\.?\s*/i, '').
  split(/[\s.]+/).
  filter(Boolean);
  if (parts.length === 0) return '';
  const first = parts[0][0]?.toUpperCase() ?? '';
  const last = parts[parts.length - 1][0]?.toUpperCase() ?? '';
  return parts.length === 1 ? first : `${first}${last}`;
};
