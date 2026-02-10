import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function VirtualRealityDetail() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.2] mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Virtual Reality
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A user interface concept designed in Figma for a virtual reality experience platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-[#0a0118]/85 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 sm:p-10 hover:border-purple-500/40 transition-all duration-300">
            <div className="space-y-8">
              <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
                <h3 className="text-2xl font-semibold text-white">Overview</h3>
                <p className="text-gray-300 mt-2 leading-relaxed text-[15px] sm:text-base">
                  A user interface concept designed in Figma for a virtual reality experience platform. The goal was
                  to create an immersive and intuitive interface for discovering and launching VR experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Objective</h4>
                <p className="text-gray-300 leading-relaxed text-[15px] sm:text-base">
                  Design a clean, futuristic UI that enhances discoverability of VR content while maintaining
                  usability and clarity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
