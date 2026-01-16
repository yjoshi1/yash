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
                                I'm a data analyst with a passion for turning complex data into actionable insights
                                that drive business growth and strategic decisions. I thrive at the intersection of data strategy
                                and storytelling, helping teams unlock the full potential of their information.
                            </p>
                            <p className="mb-6">
                                Recently, I led the design of a scalable BI solution in Domo that
                                streamlined revenue reporting and gave stakeholders faster, clearer access to key metrics.
                                I specialize in building robust, end-to-end data architectures—think consolidated data marts
                                and performance dashboards—that elevate how organizations track and act on their goals.
                            </p>
                            <p className="mb-6">
                                My work spans close collaboration with cross-functional teams:
                                partnering with leadership to automate forecasting, enabling smarter sales strategies,
                                and working with engineers to prep data for AI-powered analytics. I'm equally invested
                                in the foundations—co-developing data governance frameworks that ensure security,
                                compliance, and trust in every insight delivered.
                            </p>
                            <p>
                                At the heart of it all, I aim to turn data into a strategic asset that empowers confident,
                                forward-looking decisions.
                            </p>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700"
                                        >
                                            {skill}
                                        </span>
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
                                        <span className="font-medium">Football (Arsenal FC)</span>
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
