import { affected } from '@/lib/content';

export default function AffectedTable() {
  return (
    <section
      aria-labelledby="affected-heading"
      className="bg-ergo-light section-padding"
    >
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <h2
          id="affected-heading"
          className="text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          {affected.h2}
        </h2>

        {/* Desktop table */}
        <div className="mt-10 hidden sm:block overflow-x-auto rounded-xl border border-ergo-border">
          <table className="w-full text-left text-sm" aria-label="BFSG Betroffenheitstabelle">
            <thead className="bg-ergo-dark text-white">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Betroffen
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Nicht oder bedingt betroffen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ergo-border bg-white">
              {Array.from({
                length: Math.max(affected.betroffen.length, affected.nichtBetroffen.length),
              }).map((_, i) => (
                <tr key={i} className="hover:bg-ergo-light/50">
                  <td className="px-6 py-3 text-gray-900">
                    {affected.betroffen[i] ? (
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-ergo-red"
                        />
                        {affected.betroffen[i]}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-6 py-3 text-gray-600">
                    {affected.nichtBetroffen[i] ? (
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gray-400"
                        />
                        {affected.nichtBetroffen[i]}
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-8 grid gap-4 sm:hidden">
          <div className="rounded-xl border border-ergo-red/30 bg-white p-4">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-ergo-red">
              Betroffen
            </h3>
            <ul className="space-y-2">
              {affected.betroffen.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-900">
                  <span aria-hidden="true" className="h-2 w-2 flex-shrink-0 rounded-full bg-ergo-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-ergo-border bg-white p-4">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-500">
              Nicht / bedingt betroffen
            </h3>
            <ul className="space-y-2">
              {affected.nichtBetroffen.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span aria-hidden="true" className="h-2 w-2 flex-shrink-0 rounded-full bg-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-ergo-muted italic">{affected.hinweis}</p>

        <div className="mt-8">
          <a
            href="#check-form"
            className="inline-flex rounded-lg bg-ergo-red px-6 py-3 text-sm font-bold text-white transition hover:bg-ergo-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ergo-red focus-visible:ring-offset-2"
          >
            Jetzt prüfen lassen
          </a>
        </div>
      </div>
    </section>
  );
}
