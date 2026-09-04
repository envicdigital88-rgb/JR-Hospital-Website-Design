'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Phone, 
  MessageCircle, 
  Sparkles,
  Calendar
} from 'lucide-react';
import { awarenessPosters } from '@/data/media';
import { site, telHref, whatsappHref } from '@/data/site';

interface PosterItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  tag: string;
  description: string;
}

// Enhance the raw posters with categorized metadata for a hospital portal experience
const enrichedPosters: PosterItem[] = [
  {
    ...awarenessPosters[0],
    category: 'Consultations',
    tag: 'Mental Health',
    description: 'Specialist psychiatric consultation services and mental wellness care at JR Hospital.'
  },
  {
    ...awarenessPosters[1],
    category: 'Surgical Care',
    tag: 'Specialist Surgery',
    description: 'Consultant-led surgical care with advanced pre- and post-operative facilities.'
  },
  {
    ...awarenessPosters[2],
    category: 'Treatments',
    tag: 'Wound Care',
    description: 'Dedicated clinical wound management, dressings, and recovery monitoring.'
  },
  {
    ...awarenessPosters[3],
    category: 'Treatments',
    tag: 'Specialist Clinic',
    description: 'Advanced assessment and medical treatment options for varicose veins.'
  },
  {
    ...awarenessPosters[4],
    category: 'Consultations',
    tag: 'Eye Clinic',
    description: 'Comprehensive ophthalmic assessment, vision tests, and eye health consultations.'
  },
  {
    ...awarenessPosters[5],
    category: 'Consultations',
    tag: 'Maternity & VOG',
    description: 'Obstetrics and gynaecology consultations for maternal and women’s health.'
  },
  {
    ...awarenessPosters[6],
    category: 'Treatments',
    tag: 'Dermatology',
    description: 'Specialist clinical dermatology and skin care treatments.'
  },
  {
    ...awarenessPosters[7],
    category: 'Hospital Services',
    tag: '24-Hour OPD',
    description: 'Continuous 24-hour outpatient medical care, triage, and immediate treatment.'
  },
  {
    ...awarenessPosters[8],
    category: 'Surgical Care',
    tag: 'General Surgery',
    description: 'General surgical evaluations, minor procedures, and specialist surgical appointments.'
  }
];

const categories = ['All Notices', 'Consultations', 'Surgical Care', 'Treatments', 'Hospital Services'];

export function ServiceAnnouncements() {
  const [selectedCategory, setSelectedCategory] = useState('All Notices');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const filteredPosters = selectedCategory === 'All Notices'
    ? enrichedPosters
    : enrichedPosters.filter((p) => p.category === selectedCategory);

  const activePoster = activeModalIndex !== null ? enrichedPosters[activeModalIndex] : null;

  const handlePrev = useCallback(() => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => ((prev! - 1 + enrichedPosters.length) % enrichedPosters.length));
    }
  }, [activeModalIndex]);

  const handleNext = useCallback(() => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((prev) => ((prev! + 1) % enrichedPosters.length));
    }
  }, [activeModalIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') setActiveModalIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, handlePrev, handleNext]);

  return (
    <div className="mt-10">
      {/* Category Navigation Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-4">
        {categories.map((category) => {
          const count = category === 'All Notices'
            ? enrichedPosters.length
            : enrichedPosters.filter((p) => p.category === category).length;
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                isActive
                  ? 'bg-jr-green text-white shadow-md shadow-jr-green/20 scale-[1.02]'
                  : 'border border-jr-line bg-white text-jr-muted hover:border-jr-green/40 hover:text-jr-ink hover:bg-jr-green-soft/40'
              }`}
            >
              <span>{category}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-jr-cream text-jr-muted'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Modern 3-Column Card Grid */}
      <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosters.map((poster) => {
          const originalIndex = enrichedPosters.findIndex((p) => p.src === poster.src);

          return (
            <div
              key={poster.src}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-jr-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-jr-green/40 hover:shadow-xl"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => setActiveModalIndex(originalIndex)}
                className="relative aspect-square w-full cursor-pointer overflow-hidden bg-jr-cream"
              >
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Specialty Tag Badge */}
                <div className="absolute left-3 top-3 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/95 px-3 py-1 text-xs font-semibold text-jr-green-dark shadow-sm backdrop-blur-sm">
                    <Sparkles className="h-3 w-3 text-jr-green" />
                    {poster.tag}
                  </span>
                </div>

                {/* Hover Overlay with Expand CTA */}
                <div className="absolute inset-0 flex items-center justify-center bg-jr-ink/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-jr-ink shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Maximize2 className="h-3.5 w-3.5 text-jr-green" />
                    View full notice
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-jr-muted">
                    <Calendar className="h-3.5 w-3.5 text-jr-red" />
                    <span>{poster.category}</span>
                  </div>

                  <h3
                    onClick={() => setActiveModalIndex(originalIndex)}
                    className="mt-2 cursor-pointer font-display text-lg font-bold leading-snug text-jr-ink transition-colors group-hover:text-jr-green"
                  >
                    {poster.title}
                  </h3>

                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-jr-muted">
                    {poster.description}
                  </p>
                </div>

                {/* Action Row */}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-jr-line/70 pt-4">
                  <button
                    onClick={() => setActiveModalIndex(originalIndex)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-jr-green transition-colors hover:text-jr-green-dark"
                  >
                    <span>Read flyer</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={telHref(site.phones.hotline.dial)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-jr-line bg-jr-cream/80 px-3 py-1.5 text-xs font-medium text-jr-ink transition-colors hover:border-jr-green hover:bg-jr-green-soft hover:text-jr-green-dark"
                  >
                    <Phone className="h-3 w-3 text-jr-green" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-Screen Notice Lightbox Modal */}
      {activePoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-all duration-300"
          onClick={() => setActiveModalIndex(null)}
        >
          {/* Modal Container */}
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Poster Image */}
            <div className="relative flex flex-1 items-center justify-center bg-neutral-900 p-2 md:p-4">
              <img
                src={activePoster.src}
                alt={activePoster.alt}
                className="max-h-[60vh] w-auto object-contain rounded-lg md:max-h-[82vh]"
              />

              {/* Prev / Next Navigation Arrows on the image */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white transition-colors hover:bg-black"
                aria-label="Previous notice"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white transition-colors hover:bg-black"
                aria-label="Next notice"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Sidebar Information */}
            <div className="flex w-full flex-col justify-between border-t border-jr-line bg-white p-6 md:w-80 md:border-l md:border-t-0 md:p-7">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-jr-green-soft px-3 py-1 text-xs font-semibold text-jr-green-dark">
                  <Sparkles className="h-3 w-3 text-jr-green" />
                  {activePoster.tag}
                </span>

                <h3 className="mt-4 font-display text-xl font-bold leading-tight text-jr-ink">
                  {activePoster.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-jr-muted">
                  {activePoster.description}
                </p>

                <div className="mt-6 rounded-xl border border-jr-line bg-jr-cream/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-jr-red">
                    Notice details
                  </p>
                  <p className="mt-1 text-xs text-jr-muted leading-relaxed">
                    This official hospital flyer is published in Sinhala for local community awareness. For clinic times and doctor appointments, contact our reception.
                  </p>
                </div>
              </div>

              {/* Call-to-actions */}
              <div className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-jr-line">
                <a
                  href={telHref(site.phones.hotline.dial)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-jr-green px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-jr-green-dark"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call {site.phones.hotline.display}</span>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-jr-line bg-white px-4 py-2.5 text-sm font-semibold text-jr-ink transition-colors hover:bg-jr-cream"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
