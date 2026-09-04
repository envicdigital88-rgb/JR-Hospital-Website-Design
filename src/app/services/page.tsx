import React from 'react';
import { CheckIcon, ClockIcon } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { AnimateIn } from '@/components/AnimateIn';
import { serviceCategories } from '@/data/services';
import { ServiceAnnouncements } from '@/components/ServiceAnnouncements';

export default function Services() {
  const [featured, ...rest] = serviceCategories;

  return (
    <>
      <PageHeader
        eyebrow="Facilities & Services"
        title="23 facilities and services, grouped by what you came for"
        description="From walk-in outpatient care and emergency treatment to diagnostics, specialist clinics, therapy and home nursing — all available at Negombo Road, Ja-Ela."
        imageUrl="/affordable and budget friendly hospital in Trivandrum.jpg"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <AnimateIn variant="fade-up" className="overflow-hidden rounded-2xl bg-jr-red-dark">
            <div className="grid gap-10 p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Always open
                </span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/80">{featured.summary}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {featured.items.map((item) => (
                  <li key={item.name} className="flex h-full flex-col rounded-lg bg-white/10 p-5">
                    <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/75">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
            {rest.map((category, index) => (
              <AnimateIn
                key={category.id}
                variant="fade-up"
                delay={index % 2 === 0 ? 0 : 150}
                className="scroll-mt-24"
              >
                <div className="border-b border-jr-line pb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-jr-red">
                    Category {String(index + 2).padStart(2, '0')}
                  </span>
                  <h2 className="mt-1 font-display text-3xl font-bold text-jr-ink">
                    {category.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-base leading-relaxed text-jr-muted">
                    {category.summary}
                  </p>
                </div>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="rounded-xl border border-jr-line bg-jr-cream p-5 transition-shadow duration-150 hover:shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-jr-green" aria-hidden="true" />
                        <div>
                          <h3 className="font-display text-base font-bold text-jr-ink">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-jr-muted">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Notices & Service Announcements */}
      <section className="border-t border-jr-line bg-[#fbfcfb]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimateIn variant="fade-up" className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-jr-red/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-jr-red">
              From the hospital
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-jr-ink">
              Service announcements
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-jr-muted">
              Notices published by JR Hospital for patients in the area, covering clinics and
              treatments currently offered.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={150}>
            <ServiceAnnouncements />
          </AnimateIn>
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
}
