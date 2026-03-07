import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Astronaut3D } from '@/components/Astronaut3D';
import { MaterialCard } from '@/components/MaterialCard';
import { Zap, BookOpen, Rocket, Shield } from 'lucide-react';

/**
 * Home Page
 * Design: Cyberpunk Neon Cosmos
 * - Hero section with 3D astronaut
 * - Feature highlights
 * - Call to action
 */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-glow-purple">Belajar Web3</span>
                <br />
                <span className="text-glow-cyan">dari Dasar</span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Jelajahi dunia blockchain, cryptocurrency, smart contracts, dan
                DeFi. Platform edukasi Web3 yang dirancang untuk pemula dengan
                penjelasan yang mudah dipahami.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link href="/belajar">
                  <span className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                    Mulai Belajar
                  </span>
                </Link>
                <Link href="/roadmap">
                  <span className="inline-block px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer">
                    Lihat Roadmap
                  </span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex gap-8 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {[
                  { label: 'Modul', value: '8+' },
                  { label: 'Tools', value: '20+' },
                  { label: 'Learners', value: 'Unlimited' },
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Astronaut */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block h-96 md:h-[600px]"
            >
              <Astronaut3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-glow-purple mb-4">
              Mengapa Memilih Web3 Space?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Platform edukasi Web3 yang dirancang dengan sempurna untuk pemula
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Materi Lengkap',
                description:
                  'Dari Web1 hingga Web3, blockchain, crypto, smart contracts, dan DeFi',
                color: 'purple' as const,
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Mudah Dipahami',
                description: 'Penjelasan sederhana tanpa jargon teknis yang membingungkan',
                color: 'blue' as const,
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'Roadmap Jelas',
                description: 'Panduan langkah demi langkah dari pemula hingga developer',
                color: 'cyan' as const,
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Keamanan Prioritas',
                description: 'Pelajari best practices keamanan sejak hari pertama',
                color: 'purple' as const,
              },
            ].map((feature, index) => (
              <MaterialCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
              Jalur Pembelajaran
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              6 stage progresif untuk menguasai Web3 dari dasar hingga expert
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stage: '1', title: 'Fundamental', duration: '1-2 minggu' },
              { stage: '2', title: 'Wallet & Transaksi', duration: '1 minggu' },
              { stage: '3', title: 'Smart Contracts', duration: '3-4 minggu' },
              { stage: '4', title: 'DApp Development', duration: '4-6 minggu' },
              { stage: '5', title: 'DeFi & NFT', duration: '3-4 minggu' },
              { stage: '6', title: 'Security', duration: '2-3 minggu' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-purple rounded-xl p-6 neon-border-purple text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.stage}
                </div>
                <h3 className="text-lg font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-purple rounded-2xl p-12 neon-border-purple text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siap Memulai Perjalanan Web3 Anda?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Jangan lewatkan kesempatan untuk menjadi bagian dari revolusi digital.
              Mulai belajar sekarang dan kuasai Web3 dari dasar.
            </p>
            <Link href="/belajar">
              <span className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                Mulai Belajar Sekarang
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
