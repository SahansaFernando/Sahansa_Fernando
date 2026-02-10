import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { useInView } from './hooks/useInView';

const skillCategories = [
  {
    category: 'Technical Skills',
    items: ['Java', 'React Native', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    category: 'Soft Skills',
    items: [
      'Problem solving',
      'Analytical thinking',
      'Communication',
      'Team collaboration',
      'Time management',
      'Adaptability',
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    category: 'Tools & Technologies',
    items: [
      'Figma',
      'Git & GitHub',
      'Canva',
      'Clickup',
      'Microsoft Office',
      'Rapid Native',
      'AI-assisted tools',
    ],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${
                category.category === 'Tools & Technologies'
                  ? 'md:col-start-2'
                  : ''
              }`}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Card */}
              <div className="relative bg-[#0a0118]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 h-full">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <Badge
                      key={item}
                      className="bg-purple-500/20 text-purple-200 border border-purple-500/30 hover:bg-purple-500/30 text-base px-4 py-2"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
