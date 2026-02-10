import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useInView } from './hooks/useInView';

export function Contact() {
  const { ref, isInView } = useInView();

  const contactInfo = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Sahansa Fernando',
      href: 'https://www.linkedin.com/in/sahansa-fernando/',
      gradient: 'from-blue-500/20 to-purple-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '0706468615',
      href: 'tel:0706468615',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'SahansaFernando',
      href: 'https://github.com/SahansaFernando',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sahansaf2@gmail.com',
      href: 'mailto:sahansa@example.com',
      gradient: 'from-cyan-500/20 to-emerald-500/20',
      iconColor: 'text-cyan-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Easy ways to reach me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative bg-[#0a0118]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 mb-4"
                    >
                      <Icon className={item.iconColor} size={28} />
                    </motion.div>
                    <h3 className="font-semibold text-white mb-2">
                      {item.label}
                    </h3>
                    <p className="text-gray-400 text-sm break-all">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Removed resume download button as requested */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-gray-500"
        >
          <p className="text-sm">
            (c) 2026 Sahansa Fernando. Designed with passion and care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
