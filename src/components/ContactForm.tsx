"use client";
import React, { useState } from 'react';
import { CheckCircle2Icon, LoaderIcon, SendIcon } from 'lucide-react';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const emptyForm: FormValues = { name: '', phone: '', email: '', subject: '', message: '' };

const fieldClass =
'w-full rounded-md border border-jr-line bg-white px-4 py-3 text-base text-jr-ink placeholder:text-jr-muted/70 focus:border-jr-green focus:outline-none';

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number we can reach you on.';
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
  errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please add a subject.';
  if (values.message.trim().length < 10) errors.message = 'Please describe your enquiry (at least 10 characters).';
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const update = (field: keyof FormValues) => (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('sent');
      setValues(emptyForm);
    }, 900);
  };

  if (status === 'sent') {
    return (
      <div className="rounded-xl border border-jr-green/30 bg-jr-green-soft p-8 text-center">
        <CheckCircle2Icon className="mx-auto h-10 w-10 text-jr-green" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-bold text-jr-ink">Enquiry sent</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-jr-muted">
          Thank you. The hospital will respond as soon as possible. For anything urgent, please call
          us directly — the hospital is open 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-md border border-jr-green/40 bg-white px-5 py-2.5 text-sm font-semibold text-jr-green-dark transition-colors duration-150 hover:bg-white/70">
          
          Send another enquiry
        </button>
      </div>);

  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-jr-line bg-white p-8">
      <h2 className="font-display text-2xl font-bold text-jr-ink">Send an enquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-jr-muted">
        For appointments, clinic times or general questions. Urgent matters should always be phoned
        through.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-jr-ink">
            Name <span className="text-jr-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass}
            placeholder="Your full name" />
          
          {errors.name &&
          <p id="name-error" className="mt-1.5 text-xs font-medium text-jr-red">
              {errors.name}
            </p>
          }
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-jr-ink">
            Phone <span className="text-jr-red">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={fieldClass}
            placeholder="07X XXX XXXX" />
          
          {errors.phone &&
          <p id="phone-error" className="mt-1.5 text-xs font-medium text-jr-red">
              {errors.phone}
            </p>
          }
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-jr-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass}
            placeholder="you@example.com" />
          
          {errors.email &&
          <p id="email-error" className="mt-1.5 text-xs font-medium text-jr-red">
              {errors.email}
            </p>
          }
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-jr-ink">
            Subject <span className="text-jr-red">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={update('subject')}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            className={fieldClass}
            placeholder="Appointment, clinic times, general" />
          
          {errors.subject &&
          <p id="subject-error" className="mt-1.5 text-xs font-medium text-jr-red">
              {errors.subject}
            </p>
          }
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-jr-ink">
            Message <span className="text-jr-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={update('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`${fieldClass} resize-y`}
            placeholder="How can we help?" />
          
          {errors.message &&
          <p id="message-error" className="mt-1.5 text-xs font-medium text-jr-red">
              {errors.message}
            </p>
          }
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-jr-green px-6 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-jr-green-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        
        {status === 'submitting' ?
        <>
            <LoaderIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </> :

        <>
            <SendIcon className="h-4 w-4" aria-hidden="true" />
            Send Enquiry
          </>
        }
      </button>
    </form>);

}
