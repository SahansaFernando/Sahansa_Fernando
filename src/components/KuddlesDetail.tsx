import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function KuddlesDetail() {
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
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.28] mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent overflow-visible">
            <span className="inline-block pt-1 pb-4">
              Kuddles – Childcare Monitoring & Nanny Management App
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Status: In Progress (Minimum Viable Product – MVP Phase)
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
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
                  <h3 className="text-2xl font-semibold text-white">Project Overview</h3>
                  <p className="text-gray-300 mt-2 leading-relaxed text-[15px] sm:text-base">
                    Kuddles is a mobile application designed to support working parents by enabling them to find
                    trusted nannies and stay informed about their child’s daily routine through real-time push
                    notifications and weekly activity analytics.
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Problem</h4>
                  <p className="text-gray-300 leading-relaxed text-[15px] sm:text-base">
                    Working parents often struggle to find reliable childcare and lack visibility into their child’s
                    daily activities—such as sleeping and feeding—once care begins. This results in increased anxiety
                    and reduced trust between parents and caregivers.
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">My Role</h4>
                  <p className="text-gray-300 text-[15px] sm:text-base">Team Project (6 Members)</p>
                  <ul className="mt-3 grid gap-2 text-gray-300 text-[15px] sm:text-base list-disc list-inside marker:text-purple-300">
                    <li>Requirements analysis and feature definition</li>
                    <li>UI/UX design support and wireframe development</li>
                    <li>Feature planning and technical documentation</li>
                    <li>Frontend and backend development support</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Technology Stack</h4>
                  <div className="grid gap-2 text-gray-300 text-[15px] sm:text-base">
                    <div className="flex flex-col gap-1 rounded-xl border border-purple-500/10 bg-purple-500/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                      <span>Frontend:</span>
                      <span className="text-purple-200">React Native</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl border border-purple-500/10 bg-purple-500/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                      <span>Backend:</span>
                      <span className="text-purple-200">Node.js, Express</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl border border-purple-500/10 bg-purple-500/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                      <span>Database:</span>
                      <span className="text-purple-200">MongoDB</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl border border-purple-500/10 bg-purple-500/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                      <span>Cloud Services:</span>
                      <span className="text-purple-200">Firebase (Authentication, Push Notifications)</span>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl border border-purple-500/10 bg-purple-500/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                      <span>Design & Collaboration:</span>
                      <span className="text-purple-200">Figma, GitHub</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Note: The technology stack may evolve as the project progresses.
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6">
                  <h3 className="text-2xl font-semibold text-white">Design & Wireframes</h3>
                  <p className="text-gray-300 mt-2 text-[15px] sm:text-base">
                    Early wireframes were created to validate information architecture and user flows for both parent
                    and nanny experiences.
                  </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-purple-500/20">
                  <img
                    src={`${assetBase}images/Kuddles_wireframe.png`}
                    alt="Kuddles wireframe screens"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Social Media Posts</h3>
                <p className="text-gray-300 text-[15px] sm:text-base">
                  These promotional designs were developed using Canva.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['images/kuddles.social1.jpg', 'images/kuddels.social2.jpg'].map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-xl border border-purple-500/20 bg-[#0a0118]/70"
                    >
                      <img
                        src={`${assetBase}${src}`}
                        alt="Kuddles social media design"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

