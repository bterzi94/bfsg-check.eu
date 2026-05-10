import { site } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-ergo-dark border-t border-white/10">
      <div className="container-content px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-serif text-sm font-bold text-white">
            BFSG<span className="text-ergo-red-bright">-Check</span>
            <span className="ml-2 text-xs font-normal text-gray-500">
              © {new Date().getFullYear()}
            </span>
          </p>
          <nav aria-label="Footer-Navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              {/* PLACEHOLDER: Update links to real pages */}
              <li>
                <a href="/impressum" className="hover:text-white transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ergo-red rounded">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-white transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ergo-red rounded">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/agb" className="hover:text-white transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ergo-red rounded">
                  AGB
                </a>
              </li>
              <li>
                <a href="/kontakt" className="hover:text-white transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ergo-red rounded">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-4 text-center text-xs text-gray-600 sm:text-left">
          {site.url} — Barrierefreiheits-Prüfung nach WCAG 2.1 AA / BFSG
        </p>
      </div>
    </footer>
  );
}
