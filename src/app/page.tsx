'use client';

import { Background } from '@/components/ui/Background';
import { AppCard } from '@/components/ui/AppCard';
import {
  ShoppingBag,
  LayoutTemplate,
  Users,
  Send,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FeatureSection } from '@/components/ui/FeatureSection';
import { ComparisonTable } from '@/components/ui/ComparisonTable';

export default function Home() {
  const apps = [
    { name: 'Market', path: 'https://market.bluelime.cool/', description: 'Premium Templates & Design Assets', icon: ShoppingBag },
    { name: 'Editor', path: 'https://bluelimepage.com', description: 'Visual No-Code Builder', icon: LayoutTemplate },
    { name: 'Leads', path: 'https://bluelimeleads.com', description: 'Advanced Lead Generation & Scraping', icon: Users },
    { name: 'Sender', path: 'https://bluelimeflow.com', description: 'High-Volume Email Dispatcher', icon: Send },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans overflow-x-hidden">
      <Background />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center w-full">

        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 max-w-7xl mx-auto pt-10">

          {/* Main Title: BlueLimeUniverse */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-8 font-ubuntu tracking-tight"
          >
            <span className="text-blue-500">BlueLime</span>
            <span className="text-green-500">Universe</span>
          </motion.h1>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
            <Image
              src="/logoDEF200px.png"
              alt="BlueLime Universe Logo"
              width={220}
              height={220}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Headline: Build. Scrape. Send. Sell. */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight whitespace-nowrap font-ubuntu"
          >
            Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Scrape.</span> Send. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sell.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            The comprehensive suite to dominate your market. <br />
            From lead generation to email infrastructure to monetization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="https://bluelimeflow.com" className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors">
              Start with Flow
            </Link>
            <Link href="#features" className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-colors border border-white/10">
              Explore Universe
            </Link>
          </motion.div>
        </section>

        {/* Comparison Section */}
        <ComparisonTable />

        {/* Feature Deep Dives */}
        <div id="features" className="w-full">
          <FeatureSection
            title="BlueLime Flow"
            tagline="Infrastructure & Delivery"
            description="The backbone of your outreach. A high-volume email dispatcher built for deliverability and scale. Similar to Mailscale but integrated deeply into your workflow."
            benefits={[
              "Instant Inbox Provisioning",
              "99.9% Deliverability Optimization",
              "Seamless Mailcow Integration",
              "Automated DNS Configuration"
            ]}
            ctaText="Open Sender"
            ctaLink="https://bluelimeflow.com"
            icon={Send}
            color="emerald"
          />

          <FeatureSection
            title="BlueLime Leads"
            tagline="Data & Intelligence"
            description="Stop buying stale lists. Generate fresh, validated leads on demand. Scrape complex data sources and verify contacts in real-time."
            benefits={[
              "Advanced Web Scraping Engine",
              "Real-time Email Verification",
              "Batch List Processing",
              "Export to CSV/CRM"
            ]}
            ctaText="Get Leads"
            ctaLink="https://bluelimeleads.com"
            icon={Users}
            reversed={true}
            color="blue"
          />

          <FeatureSection
            title="BlueLime Market"
            tagline="Monetization & Community"
            description="Your personal digital empire. Sell courses, templates, and software. Build a thriving community with 'The Club' to validate ideas before you build."
            benefits={[
              "Digital Product Storefront (Gumroad alternative)",
              "Built-in Affiliate Dashboard",
              "The Club: Social Network for Makers",
              "Instant Payouts"
            ]}
            ctaText="Visit Market"
            ctaLink="https://market.bluelime.cool/"
            icon={ShoppingBag}
            color="purple"
          />

          <FeatureSection
            title="BlueLime Page"
            tagline="Creation & Design"
            description="Visual no-code builder for landing pages, forms, and newsletters. Create high-converting assets without writing a single line of code."
            benefits={[
              "Drag-and-Drop Editor",
              "Pre-built High-Conversion Templates",
              "Responsive Design by Default",
              "One-Click Publishing"
            ]}
            ctaText="Start Building"
            ctaLink="https://bluelimepage.com"
            icon={LayoutTemplate}
            reversed={true}
            color="orange"
          />
        </div>

        {/* Mini Grid for Quick Access */}
        <section className="py-24 w-full max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Quick Access</h2>
            <p className="text-gray-400">Jump straight into your tools</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {apps.map((app, index) => (
              <AppCard
                key={app.name}
                {...app}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

      </main>

      <footer className="relative z-10 py-12 border-t border-white/10 text-gray-600 text-sm bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Systems Operational</span>
          </div>
          <div className="text-gray-500">
            &copy; {new Date().getFullYear()} BlueLime Universe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
