import { motion } from 'motion/react';

const sponsors = [
  { name: '3LC.ai', tier: 'Title Sponsor' },
  { name: 'Gen.xyz', tier: 'Domain Sponsor' },
];

export default function Sponsors() {
  return (
    <section className="py-32 relative bg-samurai-charcoal/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-samurai-red" />
            <span className="text-samurai-red font-display tracking-widest uppercase text-[10px] font-extrabold">The Allies</span>
            <span className="w-8 h-[1px] bg-samurai-red" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[60px] md:text-[88px] font-black leading-[0.9] uppercase tracking-[-0.04em]"
          >
            HONORED <span className="text-samurai-red">SPONSORS</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`glass-panel flex items-center justify-center rounded-xl border border-white/5 hover:border-samurai-red/30 transition-colors grayscale hover:grayscale-0 ${
                sponsor.tier === 'Title Sponsor' ? 'w-full md:w-[400px] h-40' : 
                'w-[calc(50%-12px)] md:w-[280px] h-32'
              }`}
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl font-display font-bold text-white/50 tracking-widest uppercase">
                  {sponsor.name}
                </div>
                <div className="text-[10px] text-samurai-red mt-2 tracking-widest uppercase">
                  {sponsor.tier}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
