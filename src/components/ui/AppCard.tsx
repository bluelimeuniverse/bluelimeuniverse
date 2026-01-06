'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

interface AppCardProps {
    name: string;
    path: string;
    description: string;
    icon: LucideIcon;
    delay?: number;
}

export function AppCard({ name, path, description, icon: Icon, delay = 0 }: AppCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative"
        >
            <Link href={path} className="block relative z-10 h-full">
                <div className="relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20">

                    {/* Internal Glow Effect */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-500" />

                    <div className="relative flex flex-col gap-4">
                        <div className="p-3 w-fit rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:ring-blue-400/50 transition-all duration-300">
                            <Icon className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors flex items-center gap-2">
                                {name}
                                <motion.span
                                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400"
                                >
                                    →
                                </motion.span>
                            </h3>
                            <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
