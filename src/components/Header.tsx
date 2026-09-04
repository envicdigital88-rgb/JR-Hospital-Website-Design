"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MailIcon, MapPinIcon, MenuIcon, PhoneIcon, XIcon } from 'lucide-react';
import { mailtoHref, site, telHref } from '@/data/site';

const navItems = [
{ label: 'Home', href: '/' },
{ label: 'About Us', href: '/about' },
{ label: 'Facilities & Services', href: '/services' },
{ label: 'Doctors', href: '/doctors' },
{ label: 'Contact', href: '/contact' }];


export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-jr-green-dark text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[13px]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {site.address.full}
            </span>
            <a className="inline-flex items-center gap-2 hover:underline" href={mailtoHref}>
              <MailIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {site.email}
            </a>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-medium">
            Open 24 hours — every day
          </span>
        </div>
      </div>

      <div className="border-b border-jr-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link href="/" className="flex items-center gap-3" aria-label={`${site.publicName} home`}>
            <img src={site.logoUrl} alt="" className="h-11 w-11 object-contain" />
            <span className="leading-tight">
              <span className="block font-display text-xl font-bold tracking-tight text-jr-red-dark">
                JR <span className="text-jr-green">Hospital</span>
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-jr-muted">
                Ja-Ela
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                  `whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  isActive ?
                  'bg-jr-green-soft text-jr-green-dark' :
                  'text-jr-ink hover:bg-jr-green-soft/60 hover:text-jr-green-dark'}`
                  }>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref(site.phones.hotline.dial)}
              className="hidden items-center gap-2 rounded-md bg-jr-red px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-jr-red-dark sm:inline-flex">
              
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              {site.phones.hotline.display}
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex items-center justify-center rounded-md border border-jr-line p-2.5 text-jr-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}>
              
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open &&
        <nav id="mobile-nav" className="border-t border-jr-line bg-white lg:hidden" aria-label="Mobile">
            <ul className="mx-auto max-w-7xl px-6 py-2">
              {navItems.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={
                      `block border-b border-jr-line/70 py-3 text-sm font-medium ${
                      isActive ? 'text-jr-green-dark' : 'text-jr-ink'}`
                      }>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="py-3">
                <a
                href={telHref(site.phones.hotline.dial)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-jr-red px-4 py-3 text-sm font-semibold text-white">
                
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  Call {site.phones.hotline.display}
                </a>
              </li>
            </ul>
          </nav>
        }
      </div>
    </header>
  );
}
