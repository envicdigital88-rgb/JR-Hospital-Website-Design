import React from 'react';
import { AmbulanceIcon, PhoneIcon } from 'lucide-react';
import { site, telHref, whatsappHref } from '../data/site';

export function EmergencyBanner() {
  return (
    <section className="bg-jr-red-dark" aria-labelledby="emergency-heading">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/70">
            <AmbulanceIcon className="h-4 w-4" aria-hidden="true" />
            Emergency Treatment Unit
          </span>
          <h2 id="emergency-heading" className="mt-3 font-display text-3xl font-bold text-white lg:text-4xl">
            Need medical assistance?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/80">
            Our hospital provides 24-hour services. Call us at any hour and our team will guide you
            to the right care — OPD, emergency treatment or ambulance transport.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href={telHref(site.phones.hotline.dial)}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-4 text-base font-semibold text-jr-red-dark transition-colors duration-150 hover:bg-jr-cream">
            
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Call {site.phones.hotline.display}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-white/10">
            
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>);

}