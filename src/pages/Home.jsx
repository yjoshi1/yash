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
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                        Hi, I'm Yash.
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-3xl md:text-5xl block mt-4">
                        I tell stories with data.
                    </span>
                </motion.h1>
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
