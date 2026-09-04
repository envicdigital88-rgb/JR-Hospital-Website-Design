import React from 'react';
import { BedDoubleIcon, ClockIcon, HeartHandshakeIcon, ShieldCheckIcon } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { media } from '@/data/media';
import { site } from '@/data/site';

const commitments = [
{
  title: 'Care that is always available',
  description:
  'The OPD, pharmacy and laboratory operate 24 hours a day, so treatment does not have to wait for morning.',
  icon: ClockIcon
},
{
  title: 'Treatment under qualified supervision',
  description:
  'Medical officers and visiting consultants oversee treatment, from routine consultations to procedures such as chemotherapy and cataract surgery.',
  icon: ShieldCheckIcon
},
{
  title: 'Support beyond the consultation',
  description:
  'Home nursing visits, counselling and physiotherapy continue a patient’s care after they leave the hospital.',
  icon: HeartHandshakeIcon
},
{
  title: 'Comfortable inward stay',
  description:
  'Fully air-conditioned admission rooms, a preliminary care unit and spacious on-site parking for visiting families.',
  icon: BedDoubleIcon
}];


export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A hospital on Negombo Road that stays open"
        description={`${site.registeredName} — publicly known as ${site.publicNameFull} — provides outpatient, diagnostic, specialist and inward care to families in Ja-Ela and the surrounding communities.`}
        imageUrl="/6698c590236023c899f8d23e_Hero image (3).webp" />
      

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-jr-ink">
              About JR Hospital
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-jr-muted">
              JR Hospital operates at No. 259, Negombo Road, Ja-Ela, on the main road through the
              town. The hospital brings together the services a family usually needs in one place:
              a 24-hour outpatient department, an on-site pharmacy and laboratory, an Emergency
              Treatment Unit, digital imaging, consultant clinics and inward rooms for patients who
              need to stay.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-jr-muted">
              Because the hospital never closes, patients can walk in for a consultation, have
              investigations done and collect prescribed medicines in a single visit — at any hour.
            </p>

            <h2 className="mt-14 font-display text-3xl font-bold leading-tight text-jr-ink">
              Patient-centred care
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-jr-muted">
              Care is organised around the person rather than the department. Wound care,
              chemotherapy, physiotherapy, counselling, audiology and speech and language therapy
              are all offered on site, and home nursing visits extend that care to patients who are
              recovering at home.
            </p>
          </div>

          <div className="space-y-5">
            <img
              src={media.emergency}
              alt="Ambulance parked at the hospital emergency entrance at night"
              className="h-64 w-full rounded-xl object-cover" />
            
            <div className="rounded-xl border border-jr-line bg-jr-cream p-7">
              <h3 className="font-display text-xl font-bold text-jr-ink">At a glance</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-jr-line pb-4">
                  <dt className="text-jr-muted">Registered name</dt>
                  <dd className="text-right font-medium text-jr-ink">{site.registeredName}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-jr-line pb-4">
                  <dt className="text-jr-muted">Location</dt>
                  <dd className="text-right font-medium text-jr-ink">{site.address.full}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-jr-line pb-4">
                  <dt className="text-jr-muted">Opening hours</dt>
                  <dd className="text-right font-medium text-jr-ink">{site.hours}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-jr-muted">Services listed</dt>
                  <dd className="text-right font-medium text-jr-ink">23 facilities & services</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-jr-cream">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jr-red">
              Our commitment to healthcare
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-jr-ink">
              Four things patients can rely on
            </h2>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {commitments.map((item) =>
            <li key={item.title} className="flex h-full gap-5 rounded-xl border border-jr-line bg-white p-7">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-jr-green-soft text-jr-green">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-jr-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-jr-muted">{item.description}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
          <img
            src={media.laboratory}
            alt="Laboratory technician processing samples at the hospital laboratory"
            className="h-[380px] w-full rounded-xl object-cover" />
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jr-red">
              Our facilities
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-jr-ink">
              24-hour healthcare, supported by on-site diagnostics
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-jr-muted">
              Digital X-Ray, ultrasound scanning and 2D Echo sit beside the laboratory, so tests
              ordered during a consultation can usually be completed in the same visit. The
              Emergency Treatment Unit and ambulance service operate continuously alongside them.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
              '24 Hour OPD',
              '24 Hour Pharmacy',
              '24 Hour Laboratory',
              'Emergency Treatment Unit',
              'Digital X-Ray & Ultrasound',
              '2D Echo'].
              map((item) =>
              <li
                key={item}
                className="rounded-md border border-jr-line bg-jr-cream px-4 py-3 text-sm font-medium text-jr-ink">
                
                  {item}
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <EmergencyBanner />
    </>);

}
