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
                <motion.div
                    className="mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.05,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 overflow-hidden flex flex-wrap gap-x-3">
                        {["Hi,", "I'm", "Yash."].map((word, i) => (
                            <span key={i} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        className="inline-block text-slate-900 dark:text-white"
                                        variants={{
                                            hidden: { y: 50, opacity: 0 },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: { type: "spring", damping: 12, stiffness: 100 }
                                            }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                    <motion.span
                        className="text-slate-500 dark:text-slate-400 text-2xl md:text-4xl block font-light"
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1 } }
                        }}
                    >
                        I tell stories with data.
                    </motion.span>
                </motion.div>
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
