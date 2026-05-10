import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import UrgencyBlock from '@/components/UrgencyBlock';
import AffectedTable from '@/components/AffectedTable';
import WhatWeCheck from '@/components/WhatWeCheck';
import Deliverable from '@/components/Deliverable';
import About from '@/components/About';
import ServiceCTA from '@/components/ServiceCTA';
import KnowledgeIntro from '@/components/KnowledgeIntro';
import BfsgExplained from '@/components/BfsgExplained';
import BfsgVsBitv from '@/components/BfsgVsBitv';
import NotCovered from '@/components/NotCovered';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import SeoFooter from '@/components/SeoFooter';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function HomePage() {
  return (
    <>
      <Nav />

      <main id="main-content" tabIndex={-1}>
        {/* ── Conversion Area ── */}
        <Hero />
        <ProcessSteps />
        <UrgencyBlock />
        <AffectedTable />
        <WhatWeCheck />
        <Deliverable />
        <About />
        <ServiceCTA />

        {/* ── Knowledge Area ── */}
        <KnowledgeIntro />
        <BfsgExplained />
        <BfsgVsBitv />
        <NotCovered />
        <FAQ />
        <FinalCTA />

        {/* ── SEO Footer Block ── */}
        <SeoFooter />
      </main>

      <Footer />
      <StickyMobileCTA />
    </>
  );
}
