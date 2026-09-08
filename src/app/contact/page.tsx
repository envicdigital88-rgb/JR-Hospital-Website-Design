import React from 'react';
import { Building2Icon, ClockIcon, MailIcon, MapPinIcon, NavigationIcon, PhoneIcon, SmartphoneIcon } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import { EmergencyBanner } from '@/components/EmergencyBanner';
import { AnimateIn } from '@/components/AnimateIn';
import { directionsUrl, mailtoHref, mapsEmbedUrl, site, telHref, whatsappHref } from '@/data/site';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us at any hour"
        description={`${site.publicNameFull}, ${site.address.full}. The hospital is open 24 hours — call for emergencies, appointments or clinic times.`}
        imageUrl="/Shared Antenatal Care for Expecting Mothers Is What’s Needed.jpg" />
      

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

          {/* Management Inquiries & Administration Banner */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-jr-green/30 bg-gradient-to-r from-jr-green-soft via-white to-jr-cream p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-jr-green/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-jr-green-dark">
                  <Building2Icon className="h-3.5 w-3.5 text-jr-green" aria-hidden="true" />
                  Hospital Administration & Management
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-jr-ink">
                  Management Inquiries — JR Hospital
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-jr-muted sm:text-base">
                  Direct hotline for management inquiries, administrative matters, corporate partnerships, official feedback, or any other communications.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href={telHref(site.phones.management.dial)}
                  className="inline-flex items-center gap-2 rounded-xl bg-jr-green px-5 py-3.5 text-base font-semibold text-white shadow-md shadow-jr-green/20 transition-all hover:scale-[1.02] hover:bg-jr-green-dark"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  <span>+94 77 932 9939</span>
                </a>
                <a
                  href="https://wa.me/94779329939"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-jr-line bg-white px-5 py-3.5 text-base font-semibold text-jr-ink shadow-sm transition-all hover:border-jr-green/40 hover:bg-jr-cream"
                >
                  <SmartphoneIcon className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-jr-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimateIn variant="fade-left" className="space-y-5">
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
                      <span className="ml-1.5 text-xs text-jr-muted/70">— main landline</span>
                    </a>
                    <a
                      className="mt-1 block text-jr-muted hover:text-jr-green-dark"
                      href={telHref(site.phones.landlineAlt.dial)}>
                      {site.phones.landlineAlt.display}
                      <span className="ml-1.5 text-xs text-jr-muted/70">— additional landline</span>
                    </a>
                    <a
                      className="mt-1 block text-jr-muted hover:text-jr-green-dark"
                      href={telHref(site.phones.hotline.dial)}>
                      {site.phones.hotline.display}
                      <span className="ml-1.5 text-xs text-jr-muted/70">— mobile / appointments</span>
                    </a>
                    <a
                      className="mt-1 block text-jr-muted hover:text-jr-green-dark"
                      href={telHref(site.phones.alt.dial)}>
                      {site.phones.alt.display}
                      <span className="ml-1.5 text-xs text-jr-muted/70">— additional contact</span>
                    </a>
                    <a
                      className="mt-1 block text-jr-muted hover:text-jr-green-dark"
                      href={telHref(site.phones.management.dial)}>
                      {site.phones.management.display}
                      <span className="ml-1.5 text-xs text-jr-muted/70">— management & other inquiries</span>
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

            {/* Management & Administrative Inquiries Card */}
            <div className="rounded-xl border border-jr-green/25 bg-gradient-to-br from-white via-white to-jr-green-soft/40 p-7 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-jr-green text-white shadow-sm">
                  <Building2Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-jr-green-dark">
                  Hospital Administration
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-jr-ink">
                Management Inquiries
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-jr-muted">
                Direct contact line for management inquiries, administrative matters, corporate partnerships, or any other official communications with JR Hospital.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={telHref(site.phones.management.dial)}
                  className="inline-flex items-center gap-2 rounded-lg bg-jr-green px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-jr-green-dark"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  <span>Call {site.phones.management.display}</span>
                </a>
                <a
                  href="https://wa.me/94779329939"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-jr-line bg-white px-4 py-2.5 text-sm font-semibold text-jr-ink shadow-sm transition-colors hover:bg-jr-cream"
                >
                  <SmartphoneIcon className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
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
          </AnimateIn>

          <AnimateIn variant="fade-right" delay={150}>
            <div id="enquiry" className="scroll-mt-28">
              <ContactForm />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <AnimateIn variant="fade-up" className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
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
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150} className="mt-8 overflow-hidden rounded-xl border border-jr-line">
            <iframe
              title={`Map showing ${site.publicNameFull}`}
              src={mapsEmbedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
          </AnimateIn>
        </div>
      </section>

      <EmergencyBanner />
    </>);

}
