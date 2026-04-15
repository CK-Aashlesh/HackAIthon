import { motion } from 'motion/react';
import { Database, TrendingUp, Search, RefreshCw } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Analyze Embeddings',
    description: 'Explore the dataset to find patterns, anomalies, and edge cases.',
    icon: <Search className="w-8 h-8" />
  },
  {
    id: '02',
    title: 'Identify Samples',
    description: 'Select the most impactful data points that the model struggles with.',
    icon: <Database className="w-8 h-8" />
  },
  {
    id: '03',
    title: 'Label Strategically',
    description: 'Provide high-quality annotations for the selected samples.',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: '04',
    title: 'Retrain & Improve',
    description: 'Feed the new data back into the model to boost accuracy.',
    icon: <RefreshCw className="w-8 h-8" />
  }
];

export default function Challenge() {
  return (
    <section className="py-32 relative bg-samurai-charcoal/30 border-y border-white/5" id="challenge">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-samurai-red" />
            <span className="text-samurai-red font-display tracking-widest uppercase text-[10px] font-extrabold">The Mission Scroll</span>
            <span className="w-8 h-[1px] bg-samurai-red" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[60px] md:text-[88px] font-black leading-[0.9] uppercase tracking-[-0.04em] mb-6"
          >
            THE <span className="text-samurai-red">CHALLENGE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light"
          >
            All participants will compete on the same AI challenge using data-centric methodology.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Build an image classification model using Data-Centric AI with 3LC.
            </h3>
            <p className="text-base leading-[1.6] text-ink-dim mb-6">
              Participants will train a model on a small labeled dataset and improve performance by strategically labeling additional data using embeddings and model feedback.
            </p>
            <div className="glass-panel p-6 border-l-4 border-samurai-red bg-samurai-red/5">
              <p className="text-lg font-medium text-white italic">
                "Instead of changing the model architecture, competitors must improve accuracy by improving the dataset itself."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-samurai-red/10 blur-[50px] rounded-full" />
            <h4 className="text-samurai-red font-mono text-sm uppercase font-bold tracking-[0.1em] mb-4">Key Concept</h4>
            <h3 className="text-2xl font-display font-bold mb-6 text-white">What is Data-Centric AI?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-white/20 rounded-full" />
                <div>
                  <div className="text-white font-bold mb-1">Traditional AI</div>
                  <div className="text-sm text-ink-dim">Focuses on improving models and algorithms.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-samurai-red rounded-full" />
                <div>
                  <div className="text-white font-bold mb-1">Data-Centric AI</div>
                  <div className="text-sm text-ink-dim">Focuses on improving the quality of data used to train models.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-panel rounded-xl p-8 hover:bg-white/[0.02] transition-colors duration-500 border border-white/5 hover:border-samurai-red/30 overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute -right-4 -top-4 text-8xl font-display font-bold text-white/[0.03] group-hover:text-samurai-red/[0.05] transition-colors duration-500 pointer-events-none">
                {step.id}
              </div>

              <div className="text-samurai-red mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold mb-4 tracking-wide text-white group-hover:text-samurai-red transition-colors">
                {step.title}
              </h3>
              
              <p className="text-[11px] text-ink-dim leading-[1.4]">
                {step.description}
              </p>

              {/* Bottom Line Indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-samurai-red group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
