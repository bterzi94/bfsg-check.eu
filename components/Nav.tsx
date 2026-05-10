import { site } from '@/lib/content';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-ergo-dark/95 backdrop-blur-sm">
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            aria-label={`${site.name} – zur Startseite`}
            className="font-serif text-xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ergo-red rounded"
          >
            BFSG<span className="text-ergo-red-bright">-Check</span>
          </a>
          <nav aria-label="Hauptnavigation">
            <a
              href="#check-form"
              className="inline-flex items-center rounded-lg bg-ergo-red px-4 py-2 text-sm font-bold text-white transition hover:bg-ergo-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ergo-red focus-visible:ring-offset-2 focus-visible:ring-offset-ergo-dark"
            >
              Jetzt prüfen
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
