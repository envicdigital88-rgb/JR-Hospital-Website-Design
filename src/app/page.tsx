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
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-jr-green-dark flex flex-col">

        {/* Soft light blobs */}
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-white/10 -translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#007A50]/30 translate-x-1/4 translate-y-1/4 blur-3xl" />

        {/* ── Main content row ── */}
        <div className="relative z-10 flex-1 mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 items-center gap-10 pt-4 lg:pt-8 pb-0 h-full">

          {/* LEFT: text */}
          <div className="text-white self-center pb-12 pt-8">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              24-Hour Healthcare Services
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
              Quality Healthcare.<br />
              <span className="text-white/80 font-bold">Trusted Care.</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-white/80">
              Providing accessible healthcare services and medical facilities for individuals and
              families in Ja-Ela and surrounding communities — at any hour of the day or night.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#1F7A45] shadow-lg transition hover:scale-105 active:scale-100">
                Contact Us
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/15">
                Learn More
              </Link>
            </div>

            {/* Address */}
            <p className="mt-8 flex items-center gap-2 text-sm text-white/60">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {site.address.full}
            </p>
          </div>

          {/* RIGHT: huge nurse image & concentric circles & floating stats */}
          <div className="relative self-end flex items-end justify-center w-full h-[380px] sm:h-[450px] lg:h-[550px] xl:h-[620px] mt-8 lg:mt-0">
            
            {/* Concentric circles (fully contained) */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 h-[50%] aspect-square rounded-full bg-white/20 blur-md pointer-events-none" />
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 h-[75%] aspect-square rounded-full border-[10px] sm:border-[20px] border-white/50 pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] aspect-square rounded-full border-[10px] sm:border-[20px] border-white/30 pointer-events-none" />

            {/* Doctor Image - Fully contained to avoid being cut off */}
            <img
              src="/Happy_smiling_young_doctor___Premium_AI-generated_image-removebg-preview.png"
              alt="JR Hospital medical professional"
              className="relative z-10 h-[95%] w-auto object-contain object-bottom pointer-events-none"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
            />
            
            {/* Floating stat card 1 (Left) */}
            <div className="absolute top-[20%] left-0 sm:-left-8 z-20 flex items-center gap-2 sm:gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-4 shadow-2xl scale-90 sm:scale-100 origin-left">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1F7A45]/10 text-[#1F7A45]">
                 <span className="font-extrabold text-lg sm:text-xl">15+</span>
              </span>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500">Specialists</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#12522F]">Available Daily</p>
              </div>
            </div>

            {/* Floating stat card 2 (Right) */}
            <div className="absolute bottom-[10%] right-0 sm:-right-4 z-20 flex items-center gap-2 sm:gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-4 shadow-2xl scale-90 sm:scale-100 origin-right">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1F7A45]/10 text-[#1F7A45]">
                 <span className="font-extrabold text-lg sm:text-xl">24/7</span>
              </span>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500">Open Always</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#12522F]">Emergency Care</p>
              </div>
            </div>
            
            {/* Floating stat card 3 (Top Right) */}
            <div className="absolute top-[5%] right-0 z-20 flex items-center gap-2 sm:gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-4 shadow-2xl scale-90 sm:scale-100 origin-right">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1F7A45]/10 text-[#1F7A45]">
                 <span className="font-extrabold text-lg sm:text-xl">100%</span>
              </span>
              <div>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500">Patient Focus</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#12522F]">Trusted Care</p>
              </div>
            </div>
          </div>
        </div>

      </section>




      {/* ── Round the clock (Marquee) ── */}
      <section aria-label="Round the clock services" className="border-b border-jr-line bg-white overflow-hidden py-7">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...roundTheClock, ...roundTheClock, ...roundTheClock, ...roundTheClock].map((item, index) => (
            <div key={`${item.title}-${index}`} className="flex flex-col justify-center px-12 border-r border-jr-line min-w-[350px]">
              <p className="font-display text-lg font-bold text-jr-green-dark whitespace-nowrap">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-jr-muted whitespace-nowrap">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About section ── */}
      <section className="relative bg-white py-16 lg:py-32 overflow-hidden">
        {/* Background Image aligned to the left & seamlessly blended into white */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] z-0">
          <img
            src={media.patientCare}
            alt="A nurse caring for an elderly patient in an air-conditioned hospital room"
            className="h-full w-full object-cover object-center"
          />
          {/* Gradient overlay: perfectly clear on the left, fading to solid white on the right edge */}
          <div className="absolute inset-0 bg-white/40 lg:bg-gradient-to-r lg:from-transparent lg:from-50% lg:to-white lg:to-100%"></div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          {/* Spacer */}
          <div className="hidden lg:block"></div>
          
          {/* Text Content */}
          <div className="bg-white/95 lg:bg-transparent p-8 lg:p-0 rounded-3xl shadow-xl lg:shadow-none my-8 lg:my-0">
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

      {/* ── VIDEO BANNER ── */}
      <section className="relative overflow-hidden h-[520px] sm:h-[600px] lg:h-[680px]">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-top"
          src="/AQN4KRKeyb3uBgDRP4Bj3DKG1n7gJPmIzCTFeSv0uwwr0vIc0lFn6EwtZFaaWdKpBw5YhfwbV-Pp_8RC6kLRT0A.mp4"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D4A3A]/85 via-[#0D4A3A]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-6">
          <div className="mx-auto max-w-7xl w-full">
            <div className="max-w-xl text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Why choose us</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                Compassionate care, <br />every hour of every day.
              </h2>
              <p className="mt-4 text-white/75 text-sm leading-relaxed max-w-sm">
                From emergency treatment to specialist consultations, we are always open and always ready to serve you and your family.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#0D4A3A] shadow-lg hover:scale-105 transition">
                Our Services
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Facilities ── */}
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

      {/* ── Specialist Consultation ── */}
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


