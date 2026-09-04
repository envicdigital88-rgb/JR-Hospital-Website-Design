import React from 'react';
import { CheckIcon, ClockIcon } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { Icon } from '@/components/Icon';
import { AnimateIn } from '@/components/AnimateIn';
import { serviceCategories } from '@/data/services';
import { awarenessPosters } from '@/data/media';

export default function Services() {
  const [featured, ...rest] = serviceCategories;

  return (
    <>
      <PageHeader
        eyebrow="Facilities & Services"
        title="23 facilities and services, grouped by what you came for"
        description="From walk-in outpatient care and emergency treatment to diagnostics, specialist clinics, therapy and home nursing — all available at Negombo Road, Ja-Ela."
        imageUrl="/affordable and budget friendly hospital in Trivandrum.jpg" />
      

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
                {featured.items.map((item) =>
                <li key={item.name} className="flex h-full flex-col rounded-lg bg-white/10 p-5">
                    <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/75">{item.description}</p>
                  </li>
                )}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-jr-cream">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {rest.map((category, i) =>
            <AnimateIn
              key={category.id}
              variant="fade-up"
              delay={i % 2 === 0 ? 0 : 150}
            >
              <article
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
            </AnimateIn>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimateIn variant="fade-up" className="max-w-2xl">
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
          </AnimateIn>

          {/* Redesigned Service Cards with Animations */}
          <div className="mt-12">
            {/* Desktop Grid - Horizontal Scroll with Cards */}
            <div className="hidden md:block overflow-hidden">
              <style>{`
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @keyframes hoverLift {
                  0% {
                    transform: translateY(0px);
                  }
                  100% {
                    transform: translateY(-8px);
                  }
                }

                @keyframes shimmer {
                  0% {
                    background-position: -1000px 0;
                  }
                  100% {
                    background-position: 1000px 0;
                  }
                }

                .service-card {
                  animation: slideInUp 0.6s ease-out forwards;
                  opacity: 0;
                }

                .service-card:nth-child(1) { animation-delay: 0.1s; }
                .service-card:nth-child(2) { animation-delay: 0.2s; }
                .service-card:nth-child(3) { animation-delay: 0.3s; }
                .service-card:nth-child(4) { animation-delay: 0.4s; }
                .service-card:nth-child(5) { animation-delay: 0.5s; }
                .service-card:nth-child(6) { animation-delay: 0.6s; }
                .service-card:nth-child(7) { animation-delay: 0.7s; }
                .service-card:nth-child(8) { animation-delay: 0.8s; }
                .service-card:nth-child(9) { animation-delay: 0.9s; }

                .service-card:hover {
                  animation: hoverLift 0.3s ease-out forwards;
                }

                .service-image {
                  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .service-card:hover .service-image {
                  transform: scale(1.2);
                }
              `}</style>

              <div className="grid grid-cols-3 gap-6 lg:grid-cols-5">
                {awarenessPosters.map((poster, index) => (
                  <div
                    key={poster.src}
                    className="service-card group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl border-2 border-jr-line bg-jr-cream transition-all duration-300 hover:border-jr-green hover:shadow-2xl">
                      {/* Image Container */}
                      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-jr-green-soft to-jr-cream">
                        <img
                          src={poster.src}
                          alt={poster.alt}
                          className="service-image h-full w-full object-cover"
                        />
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-jr-green-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
                      </div>

                      {/* Title Section */}
                      <div className="p-4 transition-all duration-300">
                        <p className="text-sm font-semibold leading-tight text-jr-ink line-clamp-2 group-hover:text-jr-green transition-colors">
                          {poster.title}
                        </p>
                        {/* Hidden Details on Hover */}
                        <div className="mt-3 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-20">
                          <p className="text-xs text-jr-muted">
                            Click to view full details
                          </p>
                        </div>
                      </div>

                      {/* Accent Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-jr-green via-jr-red to-jr-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Grid - Stacked Cards */}
            <div className="md:hidden">
              <style>{`
                @keyframes fadeInScale {
                  from {
                    opacity: 0;
                    transform: scale(0.95);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1);
                  }
                }

                .mobile-card {
                  animation: fadeInScale 0.5s ease-out forwards;
                  opacity: 0;
                }

                .mobile-card:nth-child(1) { animation-delay: 0.1s; }
                .mobile-card:nth-child(2) { animation-delay: 0.2s; }
                .mobile-card:nth-child(3) { animation-delay: 0.3s; }
                .mobile-card:nth-child(4) { animation-delay: 0.4s; }
                .mobile-card:nth-child(5) { animation-delay: 0.5s; }
                .mobile-card:nth-child(6) { animation-delay: 0.6s; }

                .mobile-image {
                  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .mobile-card:hover .mobile-image {
                  transform: scale(1.15);
                }
              `}</style>

              <div className="grid grid-cols-2 gap-4">
                {awarenessPosters.slice(0, 6).map((poster) => (
                  <div
                    key={poster.src}
                    className="mobile-card group"
                  >
                    <div className="relative overflow-hidden rounded-xl border border-jr-line bg-jr-cream hover:shadow-lg transition-shadow">
                      <div className="aspect-square overflow-hidden bg-gradient-to-br from-jr-green-soft to-jr-cream">
                        <img
                          src={poster.src}
                          alt={poster.alt}
                          className="mobile-image h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-semibold leading-tight text-jr-ink line-clamp-2">
                          {poster.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmergencyBanner />
    </>);

}
