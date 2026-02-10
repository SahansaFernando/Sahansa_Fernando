import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useInView } from './hooks/useInView';

export function Resume() {
  const { ref, isInView } = useInView();

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-[#0a0118]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 sm:p-10 text-center hover:border-purple-500/40 transition-all duration-300">
            <div className="pt-6">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg border-0 overflow-hidden group"
                asChild
              >
                <a href="/images/Sahansa%20Fernando.pdf" download>
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Download size={20} />
                    Download Resume (PDF)
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
