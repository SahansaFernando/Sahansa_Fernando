import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from './hooks/useInView';

const projects = [
  {
    id: 2,
    title: 'Kuddles',
    summary: 'A mobile app that connects working parents with trusted nannies and provides real-time childcare updates.',
    image: 'images/kuddles.logo.jpg',
    tags: ['Mobile App ', 'Project Status: In progress'],
    gradient: 'from-pink-500 to-orange-600',
    detailPath: '/projects/kuddles',
    problem: 'Working parents need trusted, real-time visibility into daily childcare routines and updates.',
    audience: 'Working parents and professional nannies.',
    role: 'Product Manager and UX Designer',
    process: ['User interviews', 'Requirements and user stories', 'Wireframes', 'Prototype testing', 'Sprint planning'],
    tools: ['Figma', 'Jira', 'Notion', 'Google Sheets'],
    deliverables: ['User stories', 'MVP scope', 'Wireframes', 'Prototype'],
    outcome: 'In progress: validating the real-time update flow and parent-facing dashboard.',
    learning: 'In progress: balancing transparency with caregiver workload.',
  },
  {
    id: 1,
    title: 'Estate Agent',
    summary: 'A client-side web app that lets users search and filter property listings with an intuitive, responsive experience inspired by modern real estate platforms.',
    image: 'images/estate.logo.png',
    tags: ['Frontend', 'Filtering Logic', 'Testing'],
    gradient: 'from-purple-500 to-blue-600',
    detailPath: '/projects/estate',
  },
  {
    id: 3,
    title: 'NEXT GEN',
    summary: 'A high-fidelity landing page UI concept for a virtual reality product brand, designed to showcase VR headsets and immersive experiences. ',
    image: 'images/virtual.logo.png',
    tags: ['Requirements', 'UX Research', 'UI Design'],
    gradient: 'from-green-500 to-teal-600',
    detailPath: '/projects/next-gen',
  },
  {
    id: 4,
    title: 'Eco Range',
    summary: 'Designed a responsive website UI for an agricultural platform focused on cucumber cultivation, using Figma AI with prompt-driven design and iterative refinement.',
    image: 'images/eco.logo.png',
    tags: ['UI Design', 'Figma AI'],
    gradient: 'from-emerald-500 to-lime-600',
    detailPath: '/projects/eco-range',
  },
];

const formatList = (items: string[]) => items.join(' | ');

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Structured projects that highlight my thinking, process, and outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isLogoCard = project.title === 'Kuddles' || project.title === 'Estate Agent' || project.title === 'NEXT GEN' || project.title === 'Eco Range';
            const imageClassName = isLogoCard
              ? 'w-full h-56 object-contain bg-[#0a0118]/70 p-6'
              : 'w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500';
            const card = (
              <div className="relative group h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                <div className="relative h-full bg-[#0a0118]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={imageClassName}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] to-transparent opacity-60" />
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.title !== 'Kuddles' && project.title !== 'Estate Agent' && project.title !== 'NEXT GEN' && project.title !== 'Eco Range' && (
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>
                        <span className="text-purple-300 font-semibold">Problem:</span> {project.problem}
                      </p>
                      <p>
                        <span className="text-purple-300 font-semibold">Who Was Affected:</span> {project.audience}
                      </p>
                      <p>
                        <span className="text-purple-300 font-semibold">Role:</span> {project.role}
                      </p>
                      <p>
                        <span className="text-purple-300 font-semibold">Process:</span> {formatList(project.process)}
                      </p>
                      <p>
                        <span className="text-purple-300 font-semibold">Tools:</span> {formatList(project.tools)}
                      </p>
                      <p>
                        <span className="text-purple-300 font-semibold">Deliverables:</span> {formatList(project.deliverables)}
                      </p>
                      <p>
                        <span className="text-purple-300 font-semibold">Outcome:</span> {project.outcome}
                      </p>
                      <p>
                        <span className="text-purple-300 font-semibold">What I Learned:</span> {project.learning}
                      </p>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative h-full"
              >
                {project.detailPath ? (
                  <Link
                    to={project.detailPath}
                    aria-label={`Open ${project.title} project details`}
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-2xl"
                  >
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

