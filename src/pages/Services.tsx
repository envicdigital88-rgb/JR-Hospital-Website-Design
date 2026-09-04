import React from 'react';
import { CheckIcon, ClockIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { Icon } from '../components/Icon';
import { serviceCategories } from '../data/services';
import { awarenessPosters } from '../data/media';

export function Services() {
  const [featured, ...rest] = serviceCategories;

  return (
    <>
      <PageHeader
        eyebrow="Facilities & Services"
        title="23 facilities and services, grouped by what you came for"
        description="From walk-in outpatient care and emergency treatment to diagnostics, specialist clinics, therapy and home nursing — all available at Negombo Road, Ja-Ela." />
      

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="overflow-hidden rounded-2xl bg-jr-red-dark">
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
                {featured.items.map((item) =>
                <li key={item.name} className="flex h-full flex-col rounded-lg bg-white/10 p-5">
                    <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/75">{item.description}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-jr-cream">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {rest.map((category) =>
            <article
              key={category.id}
              id={category.id}
              className="flex h-full flex-col rounded-xl border border-jr-line bg-white p-8">
              
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-jr-green-soft text-jr-green">
                    <Icon name={category.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-jr-ink">{category.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-jr-muted">{category.summary}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4 border-t border-jr-line pt-6">
                  {category.items.map((item) =>
                <li key={item.name} className="flex gap-3">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-jr-green" aria-hidden="true" />
                      <div>
                        <p className="text-base font-semibold text-jr-ink">{item.name}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-jr-muted">
                          {item.description}
                        </p>
                      </div>
                    </li>
                )}
                </ul>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jr-red">
              From the hospital
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-jr-ink">
              Service announcements
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-jr-muted">
              Notices published by JR Hospital for patients in the area, covering clinics and
              treatments currently offered.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {awarenessPosters.map((poster) =>
            <li key={poster.src} className="overflow-hidden rounded-lg border border-jr-line bg-jr-cream">
                <img src={poster.src} alt={poster.alt} className="aspect-square w-full object-cover" />
                <p className="px-3 py-3 text-xs font-medium leading-snug text-jr-ink">{poster.title}</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <EmergencyBanner />
    </>);

}