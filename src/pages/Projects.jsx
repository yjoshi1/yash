import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BarChart2 } from 'lucide-react';

const projects = [
    {
        title: "Revenue Insights App",
        description: "Centralized revenue reporting system that automated manual processes and enhanced visibility across key metrics.",
        tags: ["Domo", "SQL", "Automation"],
        icon: <BarChart2 className="w-6 h-6 text-indigo-500" />
    },
    {
        title: "Digital Share Reporting",
        description: "Real-time campaign tracking dashboard analyzing share-of-voice and competitive positioning availability.",
        tags: ["Data Viz", "Analytics", "Real-time"],
        icon: <BarChart2 className="w-6 h-6 text-emerald-500" />
    },
    {
        title: "Revenue Comparison Tool",
        description: "Automated reconciliation tool for discrepancy detection across multiple revenue sources.",
        tags: ["Python", "Pandas", "Automation"],
        icon: <BarChart2 className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Projection Automation",
        description: "Dynamic forecasting model improving accuracy for quarterly revenue planning.",
        tags: ["Machine Learning", "Forecasting", "Python"],
        icon: <BarChart2 className="w-6 h-6 text-purple-500" />
    }
];

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Selected Work</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    A collection of data visualization and analytics projects.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-neon-green/10 transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-white/10 transition-colors">
                                {project.icon}
                            </div>
                            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-neon-green transition-colors" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                            {project.title}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
