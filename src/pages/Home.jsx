import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/content';

const Home = () => {
    const headingText = heroData.welcome;
    const [headingProgress, setHeadingProgress] = useState(0);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Typing effect for Heading Only
        if (headingProgress < headingText.length) {
            const timeout = setTimeout(() => {
                setHeadingProgress(prev => prev + 1);
            }, 100 + Math.random() * 50); // Natural typing variance
            return () => clearTimeout(timeout);
        } else {
            // Once typing is done, show the rest
            const timeout = setTimeout(() => setShowContent(true), 300);
            return () => clearTimeout(timeout);
        }
    }, [headingProgress, headingText.length]);

    const renderHeading = () => {
        const visibleText = headingText.slice(0, headingProgress);
        // Assumes format "Hi, I'm [Name]." - we colorize the last word
        const words = headingText.split(' ');
        const namePart = words[words.length - 1]; // "Yash."
        const prefix = headingText.slice(0, headingText.lastIndexOf(namePart)); // "Hi, I'm "

        const hasReachedName = headingProgress > prefix.length;

        return (
            <span className="whitespace-nowrap">
                <span className="text-slate-900 dark:text-white">
                    {visibleText.slice(0, prefix.length)}
                </span>
                {hasReachedName && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                        {visibleText.slice(prefix.length)}
                    </span>
                )}
                {/* Cursor only shows while typing */}
                {!showContent && (
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-[4px] md:w-[6px] h-[0.9em] ml-1 md:ml-2 align-baseline bg-slate-900 dark:bg-white"
                    />
                )}
            </span>
        );
    };

    return (
        <div className="flex flex-col items-start justify-center min-h-[80vh] px-4">
            <div className="mb-12 min-h-[4rem] md:min-h-[6rem]">
                <h1 className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                    {renderHeading()}

                    {/* Inline Subtitle: Fades in after typing */}
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                            opacity: showContent ? 1 : 0,
                            x: showContent ? 0 : -10
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-2xl md:text-4xl font-light text-slate-400 dark:text-slate-500"
                    >
                        {heroData.subtitle}
                    </motion.span>
                </h1>
            </div>

            {/* Bio Paragraph */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: showContent ? 1 : 0,
                    y: showContent ? 0 : 10
                }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                    {heroData.bio}
                </p>
            </motion.div>

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
        </div>
    );
};

export default Home;
