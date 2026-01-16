import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col items-start justify-center min-h-[80vh]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-indigo-600 dark:text-neon-green font-medium tracking-wider uppercase text-sm mb-4 block">
                    Portfolio
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                    Hi, I'm Yash.
                    <br />
                    <span className="text-slate-500 dark:text-slate-400">
                        I tell stories with data.
                    </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
                    Data Analyst based in New York. I transform complex datasets into actionable
                    business insights through robust architecture and compelling visualizations.
                </p>

                <div className="flex gap-4">
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 bg-slate-900 dark:bg-neon-green text-white dark:text-matte-black px-6 py-3 rounded-full font-medium active:scale-95 transition-all"
                    >
                        View Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#about"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        About Me
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
