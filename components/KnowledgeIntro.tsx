import { knowledgeIntro } from '@/lib/content';

export default function KnowledgeIntro() {
  return (
    <div className="bg-slate-50 border-t-4 border-ergo-red">
      <div className="container-content px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xs font-bold uppercase tracking-widest text-ergo-red">
          {knowledgeIntro.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          {knowledgeIntro.heading}
        </h2>
        <p className="mt-2 text-gray-600">{knowledgeIntro.text}</p>
      </div>
    </div>
  );
}
