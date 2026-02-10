import { User, Target, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const { ref, isInView } = useInView();

  const cards = [
    {
      icon: User,
      title: 'Background',
      description: 'I’m a Computer Science undergraduate interested in how technology, business strategy, and user experience come together to create impactful products.',
      gradient: 'from-purple-500/20 to-blue-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: Target,
      title: 'What Drives Me',
      description: 'I enjoy solving structured problems — whether through writing clean code, defining requirements, mapping user journeys, or designing intuitive interfaces.',
      gradient: 'from-blue-500/20 to-pink-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Sparkles,
      title: 'Career Direction',
      description: 'I aim to grow into a product-oriented technologist who understands both system architecture and user needs, and can connect strategy to execution.',
      gradient: 'from-pink-500/20 to-purple-500/20',
      iconColor: 'text-pink-400',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative bg-[#0a0118]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 mb-4"
                  >
                    <Icon className={card.iconColor} size={28} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-[#0a0118]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m most engaged by problems that blend structured reasoning with thoughtful user experience design.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
