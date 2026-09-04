import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export function PageHeader({ eyebrow, title, description, imageUrl }: PageHeaderProps) {
  if (imageUrl) {
    return (
      <section className="relative overflow-hidden bg-jr-green-dark border-b border-jr-line">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={imageUrl} alt="" className="h-full w-full object-cover object-[center_35%]" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[#12522F]/60 sm:bg-gradient-to-r sm:from-[#12522F]/95 sm:via-[#12522F]/40 sm:to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-48">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="hero-word-1 mb-6 flex items-center gap-1.5 text-xs text-white/70">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-white/90 font-medium">{eyebrow}</span>
          </nav>

          <div className="max-w-2xl text-white">
            {/* Eyebrow */}
            <p className="hero-word-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-3">
              {eyebrow}
            </p>
            {/* Title */}
            <h1 className="hero-word-3 font-display text-4xl font-bold leading-tight lg:text-5xl drop-shadow-sm">
              {title}
            </h1>
            {/* Description */}
            <p className="hero-word-4 mt-5 text-lg leading-relaxed text-white/80 drop-shadow-sm max-w-xl">
              {description}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-jr-line bg-jr-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="hero-word-1 mb-5 flex items-center gap-1.5 text-xs text-jr-muted">
          <Link href="/" className="hover:text-jr-green-dark">
            Home
          </Link>
          <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-jr-ink">{eyebrow}</span>
        </nav>
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="hero-word-2 font-display text-4xl font-bold leading-tight text-jr-ink lg:text-5xl">
            {title}
          </h1>
          {/* Description */}
          <p className="hero-word-3 mt-5 text-lg leading-relaxed text-jr-muted">{description}</p>
        </div>
      </div>
    </section>
  );
}
