'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface FeatureSectionProps {
    title: string;
    tagline: string;
    description: string;
    benefits: string[];
    ctaText: string;
    ctaLink: string;
    icon: React.ElementType;
    reversed?: boolean;
    color?: string;
}

export function FeatureSection({
    title,
    tagline,
    description,
    benefits,
    ctaText,
    ctaLink,
    icon: Icon,
    reversed = false,
    color = "blue"
}: FeatureSectionProps) {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>

                    {/* Content Side */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className={`text-${color}-400 font-black tracking-wider uppercase text-sm mb-2 block font-ubuntu`}>
                                {tagline}
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-ubuntu tracking-tight">
                                {title}
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                {description}
                            </p>
                        </motion.div>

                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className={`w-6 h-6 text-${color}-400 shrink-0 mt-1`} />
                                    <span className="text-gray-300 text-lg">{benefit}</span>
                                </li>
                            ))}
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={ctaLink}
                                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-${color}-600 hover:bg-${color}-500 text-white font-bold transition-all text-lg hover:scale-105`}
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-${color}-900/50 to-transparent border border-white/10 backdrop-blur-sm flex items-center justify-center`}
                        >
                            <div className={`absolute inset-0 bg-${color}-500/20 blur-3xl`} />
                            <Icon className={`w-48 h-48 text-${color}-400 relative z-10 drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]`} />

                            {/* Decorative elements */}
                            <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-white/50 animate-pulse" />
                            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-white/30 animate-pulse delay-700" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
