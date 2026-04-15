/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Challenge from './components/Challenge';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-samurai-black text-white font-sans selection:bg-samurai-orange selection:text-white relative">
      {/* Side Rails */}
      <div className="fixed bottom-10 left-10 [writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.3em] uppercase text-white/20 z-50 pointer-events-none hidden lg:block">
        DESIGNED FOR DISCIPLINE
      </div>
      <div className="fixed bottom-10 right-10 [writing-mode:vertical-rl] text-[10px] tracking-[0.3em] uppercase text-white/20 z-50 pointer-events-none hidden lg:block">
        BUILT FOR INNOVATION
      </div>

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Challenge />
        <Timeline />
        <Sponsors />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
