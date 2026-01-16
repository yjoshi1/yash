import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Domo", "SQL", "Python", "Data Science",
    "Tableau", "Power BI", "Data Architecture"
];

const About = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">About Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Left Column: Bio */}
                        <div className="md:col-span-2 prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            <p className="mb-6">
                                I turn data into a strategic driver for business success. From leading the design of revenue-reporting solutions in Domo to automating forecasting with leadership, I build the robust foundations required for modern analytics. My work ensures that every dashboard and data mart is built on a framework of security, compliance, and forward-looking strategy.
                            </p>


                            <div className="mt-12">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-neon-green rounded-full"></span>
                                    Data Toolkit
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5, scale: 1.05 }}
                                            className="px-5 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-l-4 border-neon-green shadow-sm rounded-r-xl text-slate-700 dark:text-slate-200 font-medium text-sm flex items-center gap-2"
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Profile Side */}
                        <div className="md:col-span-1 flex flex-col items-center">
                            <div className="relative w-48 h-48 mb-6">
                                <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>
                                <img
                                    src="images/author.png"
                                    alt="Yash Joshi"
                                    className="w-full h-full object-cover rounded-full shadow-lg"
                                />
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full shadow-sm border border-slate-200 dark:border-slate-700">
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                        <span className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-900 dark:text-neon-green">
                                            ⚽️
                                        </span>
                                        <span className="font-medium">Arsenal FC</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                        <span className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-900 dark:text-neon-green">
                                            📧
                                        </span>
                                        <a href="mailto:yjoshi1997@gmail.com" className="hover:text-indigo-600 dark:hover:text-neon-green transition-colors">
                                            yjoshi1997@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="resume.pdf"
                                            target="_blank"
                                            className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-slate-900 dark:bg-neon-green text-white dark:text-matte-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
                                        >
                                            Download Resume
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
