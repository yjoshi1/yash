import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Domo", "SQL", "Python", "Data Science",
    "Tableau", "Power BI", "Data Architecture"
];

const About = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
                    <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        <p className="mb-4">
                            I'm a data analyst with a passion for turning complex data into actionable insights
                            that drive business growth and strategic decisions. With hands-on experience designing
                            and implementing scalable BI solutions, I specialize in building end-to-end data architectures.
                        </p>
                        <p>
                            Currently, I'm a Business Insights Analyst at Altice USA, where I centralize revenue reporting
                            and automate forecasting. Previously, I worked at Lake 5 Media as a Market Research Analyst.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
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
            </motion.div>
        </div>
    );
};

export default About;
