'use client';

import { motion } from 'framer-motion';

interface Skill {
  id: string;
  name: string;
  icon: string | null;
  category: string | null;
}

interface SkillsClientProps {
  grouped: Record<string, Skill[]>;
  categories: string[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export default function SkillsClient({ grouped, categories }: SkillsClientProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Skills</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg lg:text-xl max-w-2xl">
          A collection of technologies, tools, and platforms I use to bring ideas to life.
        </p>
      </motion.div>

      {categories.length === 0 ? (
        <p className="text-gray-400 dark:text-gray-500 text-center py-20 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
          No skills added yet.
        </p>
      ) : (
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-xl font-bold text-gray-950 dark:text-gray-100 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
                {category}
              </h2>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {grouped[category].map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={item}
                    className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl dark:shadow-none transition-all hover:-translate-y-1 group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain relative z-10" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 font-bold text-xl relative z-10 transition-colors group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
