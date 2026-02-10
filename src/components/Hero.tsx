import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.location.href = 'images/Sahansa%20Fernando.pdf';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent inline-block"
              >
                Sahansa Fernando
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300"
            >
              Computer Science Undergraduate
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 justify-center items-center max-w-4xl mx-auto text-center"
            >
              <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Build
              </span>
              <span className="text-purple-400">|</span>
              <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Design
              </span>
              <span className="text-purple-400">|</span>
              <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Analyze
              </span>
              <span className="text-purple-400">|</span>
              <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Iterate
              </span>
              <span className="text-purple-400">|</span>
              <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Improve
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A Computer Science undergraduate passionate about building thoughtful digital products
            at the intersection of technology, business, and user experience.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {['Web Development', 'Mobile Development', 'UI/UX Design', 'Project Management', 'Business Analysis (BA)'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-200"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg border-0 overflow-hidden group"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={downloadResume}
                className="px-8 py-6 text-lg border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1 },
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="pt-12"
          >
            <ArrowDown className="mx-auto text-purple-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

