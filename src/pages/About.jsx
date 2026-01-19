import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Workflow, BarChart2, TrendingUp, PieChart, Code, Terminal, Braces } from 'lucide-react';
import { bioData, toolkitData, timelineMilestones } from '../data/content';

// Map string keys from JSON to actual components
const IconMap = {
    Database, Server, Workflow, BarChart2, TrendingUp, PieChart, Code, Terminal, Braces
};

const ToolCard = ({ tool, index }) => {
    const IconComponent = IconMap[tool.icon] || Database;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(45, 212, 191, 0.1)" }}
            className={`relative p-4 rounded-xl border transition-all duration-300 ${tool.highlight
                ? "bg-teal-500/10 border-teal-500/30 dark:bg-neon-green/5 dark:border-neon-green/20"
                : "bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-teal-500/50 dark:hover:border-neon-green/50"
                } backdrop-blur-sm group`}
        >
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${tool.highlight ? "bg-teal-500 dark:bg-neon-green text-white dark:text-matte-black" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-neon-green group-hover:bg-slate-200 dark:group-hover:bg-slate-900 transition-colors"}`}>
                    <IconComponent size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{tool.name}</h4>
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.05) + 0.2 }}
                        className="text-xs font-medium text-teal-600 dark:text-neon-green block"
                    >
                        {tool.badge}
                    </motion.span>
                </div>
            </div>
            {tool.highlight && (
                <span className="absolute top-2 right-2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 dark:bg-neon-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500 dark:bg-neon-green"></span>
                </span>
            )}
        </motion.div>
    );
};

const TimelineNode = ({ milestone, isActive, onClick, delay, index, total }) => {
    const isFirst = index === 0;
    const isLast = index === total - 1;

    // Adjust popup positioning to prevent clipping
    let containerClasses = "left-1/2 -translate-x-1/2 origin-top";
    if (isFirst) containerClasses = "left-0 translate-x-0 origin-top-left";
    if (isLast) containerClasses = "right-0 translate-x-0 origin-top-right";

    // Live Indicator logic
    const isLive = isLast;

    return (
        <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: milestone.x, top: milestone.y }}
        >
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay, type: "spring", stiffness: 200 }}
                onClick={onClick}
                className="group focus:outline-none"
            >
                {/* 
                    Year Text Styling Sibling 
                    Use a flex container to hold Text and Dot side-by-side
                */}
                <div className="relative -translate-y-12 flex items-center gap-3 select-none">

                    {/* The Year Text - Has Opacity Logic */}
                    <div className={`
                        text-4xl md:text-5xl font-black tracking-tighter 
                        bg-clip-text text-transparent bg-gradient-to-b from-slate-700 to-slate-400 dark:from-white dark:to-slate-600
                        transition-all duration-500 ease-out
                        ${isActive
                            ? 'opacity-100 scale-110 filter drop-shadow-sm'
                            : 'opacity-40 hover:opacity-100 hover:scale-105'
                        }
                    `}>
                        {milestone.year}
                    </div>

                    {/* Live Indicator: Green Dot - Totally independent of text opacity */}
                    {isLive && (
                        <span className="relative flex h-3 w-3 mt-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                        </span>
                    )}
                </div>
            </motion.button>

            {/* Popup Detail Card */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-0 mt-4 w-72 md:w-80 bg-white/95 dark:bg-[#0A1010]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-2xl z-40 text-left ${containerClasses}`}
                    >
                        <div className="flex flex-col gap-6">
                            {milestone.events.map((event, i) => (
                                <div key={i} className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 last:border-0 hover:border-blue-500 dark:hover:border-neon-green transition-colors duration-300">
                                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-[#0A1010]"></span>

                                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-blue-600 dark:text-neon-green mb-1 block">
                                        {event.tag}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 leading-tight">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {event.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const About = () => {
    const [activeMilestone, setActiveMilestone] = useState(null);

    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-20 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">{bioData.title}</span>.
                    </h2>

                    {/* Bio & Toolkit Grid - Unchanged */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                        <div className="md:col-span-2">
                            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-12">
                                <p className="mb-6">
                                    {bioData.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                                        Technical Toolkit
                                    </span>
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
                                        <a href={`mailto:${bioData.email}`} className="hover:text-indigo-600 dark:hover:text-neon-green transition-colors">
                                            {bioData.email}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={bioData.resumeLink}
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

            {/* --- Interactive Story Curve --- */}
            <div className="mb-20">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                        The Journey
                    </span>
                </h3>

                <div className="relative w-full h-[450px] md:h-[400px]">

                    {/* Background SVG Curve */}
                    <div className="absolute inset-0 overflow-visible pointer-events-none">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>

                            {/* Adjusted Curve Path */}
                            <motion.path
                                d="M 0 300 C 150 300, 250 150, 400 200 C 550 250, 750 100, 900 200 C 1050 300, 1150 250, 1250 250"
                                fill="none"
                                stroke="url(#journeyGradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                className="drop-shadow-lg"
                            />
                            <motion.path
                                d="M 1250 250 C 1300 250, 1350 200, 1400 200"
                                fill="none"
                                stroke="#cbd5e1"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                className="opacity-30"
                            />
                        </svg>
                    </div>

                    {/* Interactive Nodes */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden md:overflow-visible">
                        <div className="relative w-[1200px] md:w-full h-full">
                            {timelineMilestones.map((m, i) => (
                                <TimelineNode
                                    key={m.id}
                                    milestone={m}
                                    isActive={activeMilestone === m.id}
                                    onClick={() => setActiveMilestone(activeMilestone === m.id ? null : m.id)}
                                    delay={2 + (i * 0.2)}
                                    index={i}
                                    total={timelineMilestones.length}
                                />
                            ))}
                        </div>
                        {/* Close on background click */}
                        {activeMilestone && (
                            <div className="absolute inset-0 z-0" onClick={() => setActiveMilestone(null)} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
