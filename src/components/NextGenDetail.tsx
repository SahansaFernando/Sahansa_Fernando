import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function NextGenDetail() {
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
            NEXT GEN — Virtual Reality UI Concept
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
                  A high-fidelity web UI designed in Figma for a virtual reality product landing page. The page
                  promotes VR headsets and immersive experiences through a modern, futuristic interface.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Objective</h4>
                <ul className="mt-3 grid gap-2 text-gray-300 text-[15px] sm:text-base list-disc list-inside marker:text-purple-300">
                  <li>Showcases VR products clearly</li>
                  <li>Highlights key features</li>
                  <li>Encourages user engagement and conversions (Shop / Subscribe / Download App)</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Design Approach</h4>
                <ul className="mt-3 grid gap-2 text-gray-300 text-[15px] sm:text-base list-disc list-inside marker:text-purple-300">
                  <li>Dark futuristic color palette (blue/purple gradients)</li>
                  <li>High contrast typography</li>
                  <li>Balanced spacing and layout grid</li>
                  <li>Strong visual hierarchy</li>
                  <li>Clear navigation structure</li>
                </ul>
                <div className="mt-5 border-t border-purple-500/20 pt-4">
                  <h5 className="text-sm font-semibold text-purple-200 uppercase tracking-wider">Tools Used</h5>
                  <p className="text-gray-300 text-[15px] sm:text-base mt-2">Figma</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6">
                <div className="mb-4">
                  <a
                    href="https://www.figma.com/design/ACE7R07mvmkw3k9LjOAv35/P1?node-id=0-1&p=f&t=Pr0mM3k22t5rWQWs-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold"
                    style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
                  >
                    <FileText size={18} />
                    View Figma Design
                  </a>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Mood Board</h4>
                <div className="overflow-hidden rounded-xl border border-purple-500/20">
                  <img
                    src="/images/nextgen.wireframe.png"
                    alt="Next Gen mood board"
                    className="w-full h-auto block"
                  />
                </div>
                <div className="mt-8 space-y-6">
                  {['/images/Hero%20section.png', '/images/Body%20section.png', '/images/Footer%20section.png'].map((src, index) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-xl border border-purple-500/20 bg-[#0a0118]/70"
                    >
                      <img
                        src={src}
                        alt={`Next Gen section ${index + 1}`}
                        className="w-full h-auto block"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
