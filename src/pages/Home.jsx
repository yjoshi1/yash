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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                    <a href="#about" className="flex flex-col items-center gap-2 group cursor-pointer">
                        <span className="text-xs font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase opacity-70 group-hover:text-slate-900 dark:group-hover:text-neon-green transition-colors">
                            Explore
                        </span>
                        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center p-1 opacity-70 group-hover:border-slate-900 dark:group-hover:border-neon-green transition-colors">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full group-hover:bg-slate-900 dark:group-hover:bg-neon-green"
                            />
                        </div>
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
