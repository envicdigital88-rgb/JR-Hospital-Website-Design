import React from 'react';
import { AlertTriangleIcon, PhoneIcon } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { AnimateIn } from '@/components/AnimateIn';
import { hospitalDoctors, initialsOf, pendingDoctors } from '@/data/doctors';
import { site, telHref } from '@/data/site';
import type { Doctor } from '@/types/content';

interface DoctorsProps {
  showPendingDoctors: boolean;
}

function DoctorCard({ doctor }: {doctor: Doctor;}) {
  const pending = doctor.status === 'pending';
  return (
    <li className="flex h-full flex-col rounded-xl border border-jr-line bg-white p-7">
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold ${
          pending ? 'bg-jr-cream text-jr-muted' : 'bg-jr-green-soft text-jr-green-dark'}`
          }
          aria-hidden="true">
          
          {initialsOf(doctor.name)}
        </span>
        <div>
          <h3 className="font-display text-xl font-bold leading-snug text-jr-ink">{doctor.name}</h3>
          <p className="text-sm font-medium text-jr-green">
            {doctor.specialty ?? doctor.qualification}
          </p>
        </div>
      </div>
      <dl className="mt-6 space-y-2 border-t border-jr-line pt-5 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-jr-muted">Qualification</dt>
          <dd className="font-medium text-jr-ink">{doctor.qualification}</dd>
        </div>
        {doctor.registration &&
        <div className="flex justify-between gap-4">
            <dt className="text-jr-muted">Registration No.</dt>
            <dd className="font-medium text-jr-ink">{doctor.registration}</dd>
          </div>
        }
        {doctor.note &&
        <div className="flex justify-between gap-4">
            <dt className="text-jr-muted">Status</dt>
            <dd className="font-medium text-jr-ink">{doctor.note}</dd>
          </div>
        }
      </dl>
      {pending &&
      <p className="mt-5 rounded-md bg-jr-red-soft px-3 py-2 text-xs font-medium text-jr-red-dark">
          Pending hospital confirmation
        </p>
      }
      <div className="mt-auto" />
    </li>);

}

export default function Doctors({ showPendingDoctors }: DoctorsProps) {
  return (
    <>
      <PageHeader
        eyebrow="Doctors"
        title="The medical team at JR Hospital"
        description="Medical officers practising at the hospital. For consultation days and session times, please call the hospital — schedules vary by clinic."
        imageUrl="/doctorpage.jpg" />
      

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimateIn variant="fade-up" className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jr-red">
                Hospital doctors
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-jr-ink">
                Medical officers
              </h2>
            </div>
            <a
              href={telHref(site.phones.hotline.dial)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-jr-green px-6 py-3.5 text-base font-semibold text-white transition-colors duration-150 hover:bg-jr-green-dark">
              
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Ask about session times
            </a>
          </AnimateIn>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hospitalDoctors.map((doctor, i) =>
            <AnimateIn key={doctor.name} variant="fade-up" delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 100 : 200}>
              <DoctorCard doctor={doctor} />
            </AnimateIn>
            )}
          </ul>
        </div>
      </section>

      {showPendingDoctors &&
      <section className="bg-jr-cream">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="flex items-start gap-4 rounded-xl border border-jr-red/25 bg-white p-6">
              <AlertTriangleIcon className="mt-0.5 h-5 w-5 shrink-0 text-jr-red" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl font-bold text-jr-ink">
                  Visiting consultants — pending hospital confirmation
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-jr-muted">
                  These consultants appear on external healthcare booking platforms as practising at
                  JR Hospital – Ja-Ela. They are shown here for review only and should be published
                  once the hospital confirms that they currently hold sessions.
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pendingDoctors.map((doctor) =>
            <DoctorCard key={doctor.name} doctor={doctor} />
            )}
            </ul>
          </div>
        </section>
      }

      <EmergencyBanner />
    </>);

}
