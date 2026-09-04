import React from 'react';
import { ClockIcon, MailIcon, MapPinIcon, NavigationIcon, PhoneIcon, SmartphoneIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { ContactForm } from '../components/ContactForm';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { directionsUrl, mailtoHref, mapsEmbedUrl, site, telHref, whatsappHref } from '../data/site';

export function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us at any hour"
        description={`${site.publicNameFull}, ${site.address.full}. The hospital is open 24 hours — call for emergencies, appointments or clinic times.`} />
      

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={telHref(site.phones.hotline.dial)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-jr-red px-5 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-jr-red-dark">
              
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-jr-green px-5 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-jr-green-dark">
              
              <SmartphoneIcon className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-jr-line bg-white px-5 py-4 text-base font-semibold text-jr-ink transition-colors duration-150 hover:bg-jr-cream">
              
              <NavigationIcon className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-jr-line bg-white px-5 py-4 text-base font-semibold text-jr-ink transition-colors duration-150 hover:bg-jr-cream">
              
              <MailIcon className="h-4 w-4" aria-hidden="true" />
              Send Enquiry
            </a>
          </div>
        </div>
      </section>

      <section className="bg-jr-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <div className="rounded-xl border border-jr-line bg-white p-7">
              <h2 className="font-display text-2xl font-bold text-jr-ink">Contact details</h2>
              <ul className="mt-6 space-y-6 text-sm">
                <li className="flex gap-4">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-jr-green" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-jr-ink">{site.publicNameFull}</p>
                    <p className="mt-1 leading-relaxed text-jr-muted">{site.address.full}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-jr-green" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-jr-ink">Phone</p>
                    <a
                      className="mt-1 block text-jr-muted hover:text-jr-green-dark"
                      href={telHref(site.phones.landline.dial)}>
                      
                      {site.phones.landline.display}
                    </a>
                    <a
                      className="mt-1 block text-jr-muted hover:text-jr-green-dark"
                      href={telHref(site.phones.hotline.dial)}>
                      
                      {site.phones.hotline.display} — appointments
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-jr-green" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-jr-ink">Email</p>
                    <a className="mt-1 block break-all text-jr-muted hover:text-jr-green-dark" href={mailtoHref}>
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-jr-green" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-jr-ink">Opening hours</p>
                    <p className="mt-1 text-jr-muted">{site.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-jr-red-dark p-7 text-white">
              <h2 className="font-display text-xl font-bold">24-Hour Emergency Services</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                The Emergency Treatment Unit, OPD, pharmacy and laboratory operate around the clock,
                with ambulance transport available.
              </p>
              <a
                href={telHref(site.phones.hotline.dial)}
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-jr-red-dark transition-colors duration-150 hover:bg-jr-cream">
                
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                {site.phones.hotline.display}
              </a>
            </div>
          </div>

          <div id="enquiry" className="scroll-mt-28">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jr-red">Find us</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-jr-ink">
                On the main Negombo Road, Ja-Ela
              </h2>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-base font-semibold text-jr-green-dark hover:underline">
              
              <NavigationIcon className="h-4 w-4" aria-hidden="true" />
              Open in Google Maps
            </a>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-jr-line">
            <iframe
              title={`Map showing ${site.publicNameFull}`}
              src={mapsEmbedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
            
          </div>
        </div>
      </section>

      <EmergencyBanner />
    </>);

}