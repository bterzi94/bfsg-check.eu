import { bfsgVsBitv } from '@/lib/content';

export default function BfsgVsBitv() {
  return (
    <section aria-labelledby="vs-heading" className="bg-white section-padding">
      <div className="container-content px-4 sm:px-6 lg:px-8">
        <h2 id="vs-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {bfsgVsBitv.h2}
        </h2>

        {/* Desktop table */}
        <div className="mt-10 hidden sm:block overflow-x-auto rounded-xl border border-ergo-border">
          <table
            className="w-full text-left text-sm"
            aria-label="Vergleich BFSG und BITV 2.0"
          >
            <thead className="bg-ergo-dark text-white">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold w-1/3"></th>
                <th scope="col" className="px-6 py-4 font-semibold text-ergo-red-bright">
                  BFSG
                </th>
                <th scope="col" className="px-6 py-4 font-semibold text-gray-300">
                  BITV 2.0
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ergo-border bg-white">
              {bfsgVsBitv.rows.map(([label, bfsg, bitv], i) => (
                <tr key={i} className="hover:bg-ergo-light/40">
                  <th scope="row" className="px-6 py-3 font-semibold text-gray-700">
                    {label}
                  </th>
                  <td className="px-6 py-3 text-gray-900">{bfsg}</td>
                  <td className="px-6 py-3 text-gray-600">{bitv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked */}
        <div className="mt-8 space-y-4 sm:hidden">
          {bfsgVsBitv.rows.map(([label, bfsg, bitv], i) => (
            <div key={i} className="rounded-xl border border-ergo-border bg-ergo-light p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-ergo-muted">{label}</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs font-semibold text-ergo-red mb-0.5">BFSG</p>
                  <p className="text-sm text-gray-900">{bfsg}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-0.5">BITV 2.0</p>
                  <p className="text-sm text-gray-600">{bitv}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-700">
          {bfsgVsBitv.explanation}
        </p>
      </div>
    </section>
  );
}
