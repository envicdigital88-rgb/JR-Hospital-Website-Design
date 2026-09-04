import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, ClockIcon, PhoneIcon, StethoscopeIcon } from 'lucide-react';
import { Icon } from '@/components/Icon';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { keyFacilities, roundTheClock } from '@/data/services';
import { media } from '@/data/media';
import { site, telHref } from '@/data/site';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#69A8A5] via-[#A6D1CF] to-[#E8F3F1] rounded-tr-[4rem] sm:rounded-tr-[8rem]">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none z-0">
          <span className="font-sans text-[12rem] sm:text-[18rem] lg:text-[24rem] font-bold text-[#16211C] whitespace-nowrap -mt-20">Healthcare</span>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-0 lg:min-h-[600px]">
          <div className="py-10 lg:py-24">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#12522F]">
              <ClockIcon className="h-4 w-4" aria-hidden="true" />
              24-Hour Healthcare Services
            </span>
            <h1 className="mt-4 font-sans text-5xl font-extrabold leading-[1.05] text-[#16211C] sm:text-6xl lg:text-7xl tracking-tight">
              Quality Healthcare.
              <span className="block">Trusted Care.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#16211C]/80">
              Providing accessible healthcare services and medical facilities for individuals and
              families in Ja-Ela and surrounding communities — at any hour of the day or night.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF3B30] px-7 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#E6352B]">
                Contact Us
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#16211C]/30 bg-transparent px-7 py-4 text-base font-semibold text-[#16211C] transition-colors duration-150 hover:bg-[#16211C]/5">
                Explore Our Services
              </Link>
            </div>
            
            <p className="mt-7 text-sm font-medium text-[#16211C]/70">
              {site.address.full}
            </p>
          </div>

          <div className="relative h-[320px] w-full sm:h-[420px] lg:h-full">
            <img
              src={media.hero}
              alt="Reception area of JR Hospital with staff assisting a family"
              className="absolute inset-0 h-full w-full object-cover lg:[mask-image:linear-gradient(to_right,transparent,black_20%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_20%)] rounded-xl lg:rounded-none"
            />
          </div>
        </div>

        {/* Floating Healthline Banner */}
        <div className="absolute bottom-8 left-0 bg-[#FF3B30] text-white px-5 py-3 rounded-r-xl flex items-center gap-3 shadow-xl z-20 transition-transform hover:scale-105">
          <div className="bg-white/20 p-2 rounded-full hidden sm:block">
            <PhoneIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-90">24/7 Healthline</p>
            <a href={telHref(site.phones.hotline.dial)} className="text-lg font-extrabold leading-tight block hover:underline">
              {site.phones.hotline.display}
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Round the clock services" className="border-b border-jr-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-jr-line px-6 sm:divide-x lg:grid-cols-4">
          {roundTheClock.map((item) =>
          <div key={item.title} className="px-0 py-7 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="font-display text-lg font-bold text-jr-green-dark">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-jr-muted">{item.detail}</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
          <div className="relative">
            <img
              src={media.patientCare}
              alt="A nurse caring for an elderly patient in an air-conditioned hospital room"
              className="h-[380px] w-full rounded-xl object-cover lg:h-[480px]" />
            
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jr-red">
              About JR Hospital
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-jr-ink">
              A neighbourhood hospital built around always being open
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-jr-muted">
              {site.registeredName}, known locally as {site.publicNameFull}, serves patients from
              Ja-Ela and the surrounding area on Negombo Road. Outpatient care, pharmacy, laboratory
              and emergency treatment run continuously, with consultant clinics, diagnostics and
              inward care alongside them.
            </p>
            <ul className="mt-7 space-y-3">
              {[
              'Emergency Treatment Unit and ambulance service',
              'Fully air-conditioned admission rooms for inward patients',
              'Home nursing visits and counselling support'].
              map((point) =>
              <li key={point} className="flex gap-3 text-base text-jr-ink">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-jr-green" aria-hidden="true" />
                  {point}
                </li>
              )}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-jr-green-dark hover:underline">
              
              More about the hospital
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-jr-cream">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jr-red">
                Key Facilities
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-jr-ink">
                Everything a first visit usually needs, on one site
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 text-base font-semibold text-jr-green-dark hover:underline">
              
              All 23 facilities
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {keyFacilities.map((facility) =>
            <li
              key={facility.name}
              className="flex h-full flex-col rounded-xl border border-jr-line bg-white p-7">
              
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-jr-green-soft text-jr-green">
                  <Icon name={facility.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-jr-ink">{facility.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-jr-muted">{facility.description}</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-10 rounded-2xl border border-jr-line bg-jr-green-soft/60 p-8 lg:grid-cols-[1fr_0.85fr] lg:p-12">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-jr-green text-white">
                <StethoscopeIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-jr-ink">
                Specialist Consultation Services
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-jr-muted">
                Consultant-led sessions run alongside our daily OPD — including eye care and
                cataract surgery, dental treatment, physiotherapy, audiology, speech and language
                therapy, and counselling.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/doctors"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-jr-green px-6 py-3.5 text-base font-semibold text-white transition-colors duration-150 hover:bg-jr-green-dark">
                  
                  Meet our doctors
                </Link>
                <a
                  href={telHref(site.phones.hotline.dial)}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-jr-green/40 bg-white px-6 py-3.5 text-base font-semibold text-jr-green-dark transition-colors duration-150 hover:bg-jr-green-soft">
                  
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  Ask about clinic times
                </a>
              </div>
            </div>
            <img
              src={media.imaging}
              alt="Radiographer operating digital imaging equipment at the hospital"
              className="h-[280px] w-full rounded-xl object-cover lg:h-[360px]" />
            
          </div>
        </div>
      </section>

      <EmergencyBanner />
    </>);

}
