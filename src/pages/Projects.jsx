import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart2, PieChart, Activity, Cpu } from 'lucide-react';

const projects = [
    {
        title: "Revenue Insights App",
        description: "A centralized reporting ecosystem automating manual revenue tracking. Reduced reporting time by 40% and provided real-time visibility into key performance metrics.",
        tags: ["Domo", "SQL", "Automation"],
        icon: BarChart2,
        color: "text-indigo-400"
    },
    {
        title: "Digital Share Tracker",
        description: "Real-time market intelligence dashboard analyzing share-of-voice and competitive positioning. Enabled data-driven campaign adjustments on the fly.",
        tags: ["Data Viz", "Analytics", "Real-time"],
        icon: Activity,
        color: "text-emerald-400"
    },
    {
        title: "Revenue Reconciliation",
        description: "Automated discrepancy detection tool across multiple data sources. Eliminated manual error-checking hours and ensured 99.9% data accuracy.",
        tags: ["Python", "Pandas", "ETL"],
        icon: PieChart,
        color: "text-blue-400"
    },
    {
        title: "Forecast ML Model",
        description: "Dynamic predictive modeling system for quarterly revenue planning. improved forecast accuracy by leveraging historical trends and seasonality factors.",
        tags: ["Machine Learning", "Python", "Predictive"],
        icon: Cpu,
        color: "text-purple-400"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="absolute inset-0 bg-neon-green/0 group-hover:bg-neon-green/5 transition-colors duration-300 rounded-2xl -z-10" />

            <div className="h-full bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 transition-all duration-300 group-hover:border-neon-green/50 group-hover:translate-y-[-4px] group-hover:shadow-xl dark:group-hover:shadow-neon-green/10 flex flex-col">

                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon size={24} />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-neon-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-neon-green transition-colors">
                    {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full border border-transparent group-hover:border-neon-green/30 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3"
                >
                    Selected Work
                    <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl"
                >
                    A curation of projects bridging data engineering, analytics, and strategy.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
