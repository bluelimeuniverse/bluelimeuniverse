'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export function ComparisonTable() {
    const features = [
        { name: "Integrated Ecosystem", old: false, new: true },
        { name: "Unlimited Scaling", old: false, new: true },
        { name: "Advanced Data Validation", old: false, new: true },
        { name: "0% Transaction Fees", old: false, new: true },
        { name: "Community & Networking", old: false, new: true },
        { name: "One Monthly Subscription", old: false, new: true },
    ];

    return (
        <section className="py-24 bg-white/5 relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Stop Paying for Fragmented Tools
                    </h2>
                    <p className="text-xl text-gray-400">
                        The old way is expensive and disconnected. The BlueLime way is unified and limitless.
                    </p>
                </div>

                <div className="bg-black/40 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-md">
                    <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5">
                        <div className="font-bold text-gray-400">Feature</div>
                        <div className="font-bold text-red-400 text-center">The Old Way</div>
                        <div className="font-bold text-emerald-400 text-center">BlueLime Universe</div>
                    </div>

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors items-center"
                        >
                            <div className="text-gray-300 font-medium">{feature.name}</div>
                            <div className="flex justify-center">
                                {feature.old ? (
                                    <Check className="text-emerald-500 w-6 h-6" />
                                ) : (
                                    <X className="text-red-500 w-6 h-6" />
                                )}
                            </div>
                            <div className="flex justify-center">
                                {feature.new ? (
                                    <Check className="text-emerald-500 w-6 h-6" />
                                ) : (
                                    <X className="text-red-500 w-6 h-6" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
