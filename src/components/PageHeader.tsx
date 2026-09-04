import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-jr-line bg-jr-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-xs text-jr-muted">
          <Link href="/" className="hover:text-jr-green-dark">
            Home
          </Link>
          <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-jr-ink">{eyebrow}</span>
        </nav>
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-jr-ink lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-jr-muted">{description}</p>
        </div>
      </div>
    </section>);

}
