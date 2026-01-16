import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Workflow, BarChart2, TrendingUp, PieChart, Code, Terminal, Braces } from 'lucide-react';

const toolkitData = [
    {
        category: "Data Engineering",
        tools: [
            { name: "SQL", icon: Database, badge: "Advanced" },
            { name: "Data Marts", icon: Server, badge: "Architect" },
            { name: "ETL/ELT", icon: Workflow, badge: "Scalable Pipelines" }
        ]
    },
    {
        category: "Analytics & BI",
        tools: [
            { name: "Domo", icon: BarChart2, badge: "Specialist", highlight: true },
            { name: "Google Analytics", icon: TrendingUp, badge: "Certified" },
            { name: "Power BI", icon: PieChart, badge: "Proficient" }
        ]
    },
    {
        category: "Programming",
        tools: [
            { name: "Python", icon: Terminal, badge: "Data Scripting" },
            { name: "R", icon: Code, badge: "Statistical Analysis" },
            { name: "JavaScript", icon: Braces, badge: "Frontend Viz" }
        ]
    }
];

const ToolCard = ({ tool, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(45, 212, 191, 0.1)" }}
            className={`relative p-4 rounded-xl border transition-all duration-300 ${tool.highlight
                ? "bg-neon-green/10 border-neon-green/30 dark:bg-neon-green/5 dark:border-neon-green/20"
                : "bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-neon-green/50 dark:hover:border-neon-green/50"
                } backdrop-blur-sm group`}
        >
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${tool.highlight ? "bg-neon-green text-matte-black" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:text-neon-green group-hover:bg-slate-900 transition-colors"}`}>
                    <tool.icon size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{tool.name}</h4>
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.05) + 0.2 }}
                        className="text-xs font-medium text-neon-green block"
                    >
                        {tool.badge}
                    </motion.span>
                </div>
            </div>
            {tool.highlight && (
                <span className="absolute top-2 right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
            )}
        </motion.div>
    );
};

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
                        {/* Left Column: Bio & Toolkit */}
                        <div className="md:col-span-2">
                            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-12">
                                <p className="mb-6">
                                    I turn data into a strategic driver for business success. From leading the design of revenue-reporting solutions in Domo to automating forecasting with leadership, I build the robust foundations required for modern analytics. My work ensures that every dashboard and data mart is built on a framework of security, compliance, and forward-looking strategy.
                                </p>
                            </div>

                            {/* Technical Toolkit */}
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    Technical Toolkit
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {toolkitData.map((category, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></div>
                                                {category.category}
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {category.tools.map((tool, toolIdx) => (
                                                    <ToolCard key={toolIdx} tool={tool} index={toolIdx} />
                                                ))}
                                            </div>
                                        </div>
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
