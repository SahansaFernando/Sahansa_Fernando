import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function EstateDetail() {
  const { ref, isInView } = useInView();
  const assetBase = import.meta.env.BASE_URL;

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
            Estate Agent
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A client-side web application that allows users to search and filter property listings using multiple
            criteria with an intuitive, responsive experience.
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
                <h3 className="text-2xl font-semibold text-white">Project Overview</h3>
                <p className="text-gray-300 mt-2 leading-relaxed text-[15px] sm:text-base">
                  A client-side web application that allows users to search and filter property listings using
                  multiple criteria. The goal was to create an intuitive and responsive search experience similar to
                  modern real estate platforms.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Problem Statement</h4>
                <p className="text-gray-300 leading-relaxed text-[15px] sm:text-base">
                  Property search platforms often overwhelm users with large datasets and limited filtering
                  flexibility. The objective was to design a multi-criteria filtering system that improves search
                  precision and user experience.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                <ul className="mt-3 grid gap-2 text-gray-300 text-[15px] sm:text-base list-disc list-inside marker:text-purple-300">
                  <li>Multi-criteria property search</li>
                  <li>Property type (House, Flat, Any)</li>
                  <li>Price range (Min–Max)</li>
                  <li>Bedroom range (Min–Max)</li>
                  <li>Date added (After specific date / Between two dates)</li>
                  <li>Postcode area filtering (e.g., BR1, NW1)</li>
                  <li>Drag-and-drop favourites functionality</li>
                  <li>Responsive layout for multiple screen sizes</li>
                  <li>Unit testing with Jest</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Technical Stack</h4>
                <ul className="mt-3 grid gap-2 text-gray-300 text-[15px] sm:text-base list-disc list-inside marker:text-purple-300">
                  <li>React Native</li>
                  <li>CSS</li>
                  <li>Jest testing</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Impact & Learning</h4>
                <ul className="mt-3 grid gap-2 text-gray-300 text-[15px] sm:text-base list-disc list-inside marker:text-purple-300">
                  <li>Strengthened understanding of filtering logic and state management</li>
                  <li>Applied testing principles to ensure functionality reliability</li>
                  <li>Enhanced frontend deployment workflow using GitHub Pages</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                <div className="mb-4">
                  <a
                    href="https://sahansafernando.github.io/estate-agent-app/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-400/50 bg-blue-500/10 px-4 py-2 text-blue-200 font-semibold hover:bg-blue-500/20"
                    style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
                  >
                    View Live Demo
                  </a>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Application Screens</h4>
                <p className="text-gray-300 text-[15px] sm:text-base">
                  Key UI states from the Estate Agent application.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {['images/estate.1.png', 'images/estate.2.png', 'images/estate.3.png', 'images/estate.4.png'].map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-xl border border-purple-500/20 bg-[#0a0118]/70"
                    >
                      <img
                        src={`${assetBase}${src}`}
                        alt="Estate Overview thumbnail"
                        className="h-28 w-full object-cover"
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

