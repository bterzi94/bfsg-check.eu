'use client';

import { useState, useId } from 'react';

interface CheckFormProps {
  id?: string;
  compact?: boolean;
}

export default function CheckForm({ id = 'check-form', compact = false }: CheckFormProps) {
  const [domain, setDomain] = useState('');
  const [email, setEmail] = useState('');
  const [dsgvo, setDsgvo] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ domain?: string; email?: string; dsgvo?: string }>({});

  const domainId = useId();
  const emailId = useId();
  const dsgvoId = useId();

  function validate() {
    const e: typeof errors = {};
    if (!domain.trim()) e.domain = 'Bitte gib deine Website-Adresse ein.';
    else if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+/.test(domain.trim()))
      e.domain = 'Bitte gib eine gültige Domain ein (z. B. beispiel.de).';
    if (!email.trim()) e.email = 'Bitte gib deine E-Mail-Adresse ein.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      e.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    if (!dsgvo) e.dsgvo = 'Bitte stimme der Datenschutzerklärung zu.';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');
    try {
      // PLACEHOLDER: Connect to backend endpoint /api/check-request
      const res = await fetch('/api/check-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: domain.trim(), email: email.trim() }),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="rounded-xl border border-green-200 bg-green-50 p-6 text-center"
      >
        <p className="text-lg font-semibold text-green-800">Anfrage erhalten!</p>
        <p className="mt-1 text-green-700">
          Wir haben deine Anfrage erhalten und melden uns innerhalb von 24 Stunden mit deinem
          Bericht.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      aria-label="BFSG-Check anfordern"
      className={compact ? 'space-y-3' : 'space-y-4'}
    >
      <div>
        <label htmlFor={domainId} className="block text-sm font-semibold text-gray-700 mb-1">
          Website-Adresse (Domain)
        </label>
        <input
          id={domainId}
          type="url"
          name="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="https://deine-website.de"
          autoComplete="url"
          aria-required="true"
          aria-describedby={errors.domain ? `${domainId}-error` : undefined}
          aria-invalid={!!errors.domain}
          className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ergo-red transition ${
            errors.domain ? 'border-red-600' : 'border-ergo-border'
          }`}
        />
        {errors.domain && (
          <p id={`${domainId}-error`} role="alert" className="mt-1 text-sm text-red-600">
            {errors.domain}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={emailId} className="block text-sm font-semibold text-gray-700 mb-1">
          E-Mail-Adresse
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="du@beispiel.de"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
          aria-invalid={!!errors.email}
          className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ergo-red transition ${
            errors.email ? 'border-red-600' : 'border-ergo-border'
          }`}
        />
        {errors.email && (
          <p id={`${emailId}-error`} role="alert" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id={dsgvoId}
          type="checkbox"
          name="dsgvo"
          checked={dsgvo}
          onChange={(e) => setDsgvo(e.target.checked)}
          aria-required="true"
          aria-describedby={errors.dsgvo ? `${dsgvoId}-error` : undefined}
          aria-invalid={!!errors.dsgvo}
          className="mt-1 h-4 w-4 flex-shrink-0 accent-ergo-red cursor-pointer"
        />
        <div>
          <label htmlFor={dsgvoId} className="text-sm text-gray-700 cursor-pointer">
            Ich habe die{' '}
            <a href="/datenschutz" className="underline text-ergo-red hover:text-ergo-red-dark">
              Datenschutzerklärung
            </a>{' '}
            gelesen und stimme der Verarbeitung meiner Daten zu.
          </label>
          {errors.dsgvo && (
            <p id={`${dsgvoId}-error`} role="alert" className="mt-1 text-sm text-red-600">
              {errors.dsgvo}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" aria-live="assertive" className="text-sm text-red-600">
          Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib uns direkt eine E-Mail.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        aria-disabled={status === 'loading'}
        className="w-full rounded-lg bg-ergo-red px-6 py-4 text-base font-bold text-white transition hover:bg-ergo-red-dark active:scale-[0.99] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ergo-red focus-visible:ring-offset-2"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Wird gesendet…
          </span>
        ) : (
          'Kostenlosen Bericht anfordern'
        )}
      </button>
    </form>
  );
}
