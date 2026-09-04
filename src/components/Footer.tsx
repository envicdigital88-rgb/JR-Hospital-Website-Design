import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { directionsUrl, mailtoHref, site, telHref } from '../data/site';

export function Footer() {
  return (
    <footer className="bg-jr-green-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={site.logoUrl} alt="" className="h-12 w-12 object-contain" />
            <span className="font-display text-xl font-bold">JR Hospital</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {site.registeredName}. Accessible healthcare services and medical facilities for
            individuals and families in Ja-Ela and surrounding communities.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Pages</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {[
            { label: 'Home', to: '/' },
            { label: 'About Us', to: '/about' },
            { label: 'Facilities & Services', to: '/services' },
            { label: 'Doctors', to: '/doctors' },
            { label: 'Contact', to: '/contact' }].
            map((item) =>
            <li key={item.to}>
                <Link className="transition-colors duration-150 hover:text-white" to={item.to}>
                  {item.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            24-Hour Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>24 Hour OPD</li>
            <li>24 Hour Pharmacy</li>
            <li>24 Hour Laboratory</li>
            <li>Emergency Treatment Unit</li>
            <li>Ambulance Services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                {site.address.full}
              </a>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="flex flex-col">
                <a className="hover:text-white" href={telHref(site.phones.landline.dial)}>
                  {site.phones.landline.display}
                </a>
                <a className="hover:text-white" href={telHref(site.phones.hotline.dial)}>
                  {site.phones.hotline.display}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a className="break-all hover:text-white" href={mailtoHref}>
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.registeredName}. All rights reserved.
          </p>
          <p>{site.publicNameFull} · Negombo Road, Ja-Ela 11350</p>
        </div>
      </div>
    </footer>);

}