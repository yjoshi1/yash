import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';
import { projectsData } from '../data/content';

// --- Abstract Data Visualizations ---
// Updated to "Matte Black & Neon Green" aesthetic
// Slate/Gray for structure, Neon Green for data/highlights

const VizGrowth = () => (
    <div className="relative w-full h-full flex items-end justify-between px-8 py-10 gap-2 overflow-hidden bg-slate-50 dark:bg-[#0A1010] border-b border-slate-100 dark:border-slate-800/50">
        {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((h, i) => (
            <motion.div
                key={i}
                initial={{ height: "10%" }}
                whileInView={{ height: `${h * 100}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: "backOut" }}
                className="w-full bg-slate-200 dark:bg-slate-800/40 rounded-t-sm relative group-hover:bg-teal-900/20 transition-colors"
            >
                {/* Active data fill - Reduced Opacity for Contrast */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                    className="absolute bottom-0 left-0 w-full bg-slate-400 dark:bg-neon-green opacity-60 dark:opacity-50"
                />
            </motion.div>
        ))}
        {/* Analytics Growth Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <motion.path
                d="M0,100 C50,80 100,90 150,40 C200,10 250,50 350,10"
                fill="none"
                stroke="currentColor"
                className="text-slate-900 dark:text-white"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                style={{ filter: "drop-shadow(0px 2px 4px rgba(45, 212, 191, 0.2))" }}
            />
        </svg>
    </div>
);

const VizPulse = () => (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-50 dark:bg-[#0A1010] overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 p-4 opacity-10">
            {Array.from({ length: 24 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0.1 }}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, delay: Math.random() * 2, repeat: Infinity }}
                    className="bg-slate-500 dark:bg-neon-green rounded-sm"
                />
            ))}
        </div>
        {/* Radar Scanner */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 border border-slate-300 dark:border-slate-800 rounded-full flex items-center justify-center relative"
        >
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent to-neon-green left-1/2 top-1/2 origin-left transform -translate-y-1/2 opacity-60" />
        </motion.div>

        {/* Central Pulse Point */}
        <div className="absolute w-2 h-2 bg-neon-green rounded-full animate-ping z-10" />

        <div className="absolute font-mono text-xs text-neon-green bottom-4 right-4 animate-pulse uppercase tracking-widest opacity-80">
            Live Monitoring
        </div>
    </div>
);

const VizNetwork = () => (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-50 dark:bg-[#0A1010]">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                className="absolute border border-slate-300 dark:border-neon-green/20 rounded-full"
                initial={{ width: 100, height: 100, opacity: 0 }}
                animate={{
                    width: [100, 200, 250],
                    height: [100, 200, 250],
                    opacity: [0.6, 0.1, 0]
                }}
                transition={{
                    duration: 3,
                    delay: i,
                    repeat: Infinity,
                    ease: "easeOut"
                }}
            />
        ))}
        <div className="relative z-10 flex items-center justify-center gap-12">
            <div className="w-4 h-4 rounded-full bg-slate-900 dark:bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10" />
            <div className="w-4 h-4 rounded-full bg-neon-green shadow-[0_0_15px_rgba(45,212,191,0.5)] z-10" />
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Connection Line */}
            <motion.line
                x1="45%" y1="50%" x2="55%" y2="50%"
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="4 4"
            />
            <motion.circle
                cx="50%" cy="50%" r="3" fill="#2DD4BF"
                animate={{ cx: ["45%", "55%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
        </svg>
    </div>
);

const VizPrediction = () => (
    <div className="relative w-full h-full flex items-center px-4 overflow-hidden bg-slate-50 dark:bg-[#0A1010]">
        <svg className="w-full h-32 overflow-visible">
            {/* Historical Data (Solid) */}
            <motion.path
                d="M 0 60 Q 20 80, 40 50 T 80 60 T 120 40"
                fill="none"
                stroke="currentColor"
                className="text-slate-400 dark:text-slate-600"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1 }}
            />
            {/* Prediction (Dashed) */}
            <motion.path
                d="M 120 40 Q 150 10, 200 30 T 300 10"
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="3"
                strokeDasharray="6 6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            />
            {/* Divergence Point */}
            <circle cx="120" cy="40" r="4" className="fill-slate-900 dark:fill-white" />

            {/* Confidence Interval */}
            <motion.path
                d="M 120 40 L 300 0 L 300 50 Z"
                fill="url(#predictionGrid)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            />
            <defs>
                <pattern id="predictionGrid" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="#2DD4BF" />
                </pattern>
            </defs>
        </svg>
    </div>
);

// Map string keys to actual visual components
const VizMap = {
    VizGrowth,
    VizPulse,
    VizNetwork,
    VizPrediction
};

// --- Animation Components ---

const Typewriter = ({ text, delay = 0 }) => {
    const sentenceVars = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.01,
                delayChildren: delay
            }
        }
    };
    const charVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <motion.p
            variants={sentenceVars}
            initial="hidden"
            animate="visible"
            className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[4rem]"
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={charVars}>
                    {char}
                </motion.span>
            ))}
        </motion.p>
    );
};

const ProjectCard = ({ project, index }) => {
    // Resolve visualization from string key, fallback to VizGrowth
    const Viz = VizMap[project.vizKey] || VizGrowth;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative overflow-hidden rounded-3xl border 
                bg-white dark:bg-slate-900/50 
                border-slate-200 dark:border-slate-800
                shadow-sm hover:shadow-xl dark:hover:shadow-neon-green/5
                hover:border-slate-300 dark:hover:border-neon-green/30
                transition-all duration-500`}
            >
                {/* --- Top Visual Area --- */}
                <div className="h-48 w-full bg-slate-50 dark:bg-[#0A1010] relative border-b border-slate-100 dark:border-slate-800 transition-all duration-500 ease-in-out z-10">
                    <div className="absolute inset-0 opacity-100 dark:opacity-90">
                        <Viz />
                    </div>

                    {/* Gradient Protection Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/50 to-transparent dark:from-[#0A1010] dark:via-[#0A1010]/60 dark:to-transparent z-0 pointer-events-none" />

                    {/* Floating Title Overlay */}
                    <div className="absolute top-6 left-6 z-10 pointer-events-none">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/90 dark:bg-[#0A1010]/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 mb-3 group-hover:text-neon-green transition-colors">
                            {project.role}
                        </span>
                        {/* Removed default neon-green hover text to ensure contrast against colorful background */}
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight drop-shadow-sm transition-colors duration-500">
                            {project.title}
                        </h3>
                    </div>

                    {/* Expand Indicator */}
                    <div className={`absolute bottom-4 right-4 text-xs font-mono text-slate-400 dark:text-slate-600 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-60'}`}>
                        /// DECRYPT
                    </div>
                </div>

                {/* --- Content Area (Reveals on Hover) --- */}
                <motion.div
                    initial={false}
                    animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden bg-white dark:bg-slate-900/50"
                >
                    <div className="p-8 border-t border-slate-100 dark:border-slate-800/50">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h4>
                                {isHovered && <Typewriter text={project.problem} delay={0.1} />}
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1">
                                    <Zap size={12} className="text-neon-green" /> The Solution
                                </h4>
                                {isHovered && <Typewriter text={project.solution} delay={0.6} />}
                            </div>
                        </div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex items-center gap-4 py-6 border-y border-slate-100 dark:border-slate-800/50 mb-6"
                        >
                            {project.stats.map((stat, i) => (
                                <div key={i} className="flex-1">
                                    <span className="block text-2xl font-bold text-slate-900 dark:text-white mb-0.5">{stat.value}</span>
                                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <div className="mb-20 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight"
                >
                    Body of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Work</span>.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-light"
                >
                    Selected case studies demonstrating my process from chaos to clarity.
                    <span className="block text-sm mt-4 text-slate-400 dark:text-slate-500 italic">
                        * Data anonymized for confidentiality
                    </span>
                </motion.p>
            </div>

            <div className="flex flex-col gap-12">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
