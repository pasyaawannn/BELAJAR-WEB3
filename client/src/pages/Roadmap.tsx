import { motion } from 'framer-motion';
import {
  BookOpen,
  Wallet,
  Code,
  Zap,
  Shield,
  Rocket,
} from 'lucide-react';

/**
 * Roadmap Page
 * Design: Cyberpunk Neon Cosmos
 * - Learning path visualization
 * - Progressive stages
 * - Smooth animations
 */

interface RoadmapStage {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  color: 'purple' | 'blue' | 'cyan';
}

export default function Roadmap() {
  const roadmapStages: RoadmapStage[] = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Stage 1: Fundamental Blockchain',
      description: 'Pahami dasar-dasar blockchain dan Web3',
      topics: [
        'Apa itu blockchain',
        'Konsep desentralisasi',
        'Hash dan kriptografi',
        'Consensus mechanism',
        'Smart contracts basics',
      ],
      duration: '1-2 minggu',
      color: 'purple',
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: 'Stage 2: Wallet dan Transaksi',
      description: 'Belajar menggunakan wallet dan melakukan transaksi',
      topics: [
        'Cara membuat wallet',
        'Public dan private key',
        'Mengirim dan menerima crypto',
        'Gas fees dan network',
        'Keamanan wallet',
      ],
      duration: '1 minggu',
      color: 'blue',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Stage 3: Smart Contracts',
      description: 'Pelajari cara membuat smart contracts',
      topics: [
        'Solidity basics',
        'Fungsi dan variabel',
        'Inheritance dan interfaces',
        'Testing smart contracts',
        'Deploy ke testnet',
      ],
      duration: '3-4 minggu',
      color: 'cyan',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Stage 4: DApp Development',
      description: 'Bangun aplikasi terdesentralisasi',
      topics: [
        'Web3.js dan Ethers.js',
        'Connect wallet ke frontend',
        'Interact dengan smart contracts',
        'IPFS untuk storage',
        'Deploy DApp',
      ],
      duration: '4-6 minggu',
      color: 'purple',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Stage 5: DeFi dan NFT',
      description: 'Pelajari protokol DeFi dan NFT',
      topics: [
        'Uniswap dan DEX',
        'Lending protocols',
        'NFT standards (ERC-721, ERC-1155)',
        'NFT marketplace',
        'Yield farming',
      ],
      duration: '3-4 minggu',
      color: 'blue',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Stage 6: Security dan Best Practices',
      description: 'Keamanan dan praktik terbaik di Web3',
      topics: [
        'Smart contract security',
        'Common vulnerabilities',
        'Audit dan testing',
        'Wallet security',
        'Regulatory compliance',
      ],
      duration: '2-3 minggu',
      color: 'cyan',
    },
  ];

  const colorClasses = {
    purple: 'neon-border-purple',
    blue: 'neon-border-blue',
    cyan: 'neon-border-cyan',
  };

  const textGlowClasses = {
    purple: 'text-glow-purple',
    blue: 'text-glow-cyan',
    cyan: 'text-glow-cyan',
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-glow-purple mb-4">
          Roadmap Belajar Web3
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Panduan lengkap untuk menjadi Web3 developer. Ikuti setiap stage secara
          berurutan untuk membangun fondasi yang kuat.
        </p>
      </motion.div>

      {/* Roadmap Timeline */}
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-500"></div>

          {/* Stages */}
          <div className="space-y-12">
            {roadmapStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`md:flex md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div
                    className={`glass-purple rounded-xl p-6 ${colorClasses[stage.color]}`}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg text-white">
                        {stage.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${textGlowClasses[stage.color]}`}>
                          {stage.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {stage.duration}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{stage.description}</p>

                    {/* Topics */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-accent">Topik yang dipelajari:</p>
                      <ul className="space-y-2">
                        {stage.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex md:w-auto justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-4 border-slate-900 z-10"></div>
                </div>

                {/* Spacer for mobile */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-20"
      >
        <h2 className="text-3xl font-bold text-glow-cyan mb-8">Tips Sukses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Konsisten',
              description: 'Belajar sedikit setiap hari lebih baik daripada belajar banyak sekali.',
            },
            {
              title: 'Praktik',
              description: 'Jangan hanya membaca. Coba sendiri dengan testnet dan eksperimen.',
            },
            {
              title: 'Bergabung Komunitas',
              description: 'Ikuti Discord, Twitter, dan forum Web3 untuk belajar dari orang lain.',
            },
            {
              title: 'Baca Dokumentasi',
              description: 'Dokumentasi resmi adalah sumber terbaik untuk informasi akurat.',
            },
            {
              title: 'Keamanan Pertama',
              description: 'Selalu prioritaskan keamanan. Jangan pernah share private key Anda.',
            },
            {
              title: 'Tetap Update',
              description: 'Web3 berkembang cepat. Ikuti berita dan update terbaru.',
            },
          ].map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-blue rounded-xl p-6 neon-border-blue"
            >
              <h3 className="text-lg font-bold text-accent mb-2">{tip.title}</h3>
              <p className="text-muted-foreground text-sm">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-20 text-center"
      >
        <div className="glass-purple rounded-xl p-8 neon-border-purple">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Siap Memulai Roadmap?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Mulai dari Stage 1 dan ikuti setiap tahap dengan konsisten. Dalam 3-4
            bulan, Anda akan menjadi Web3 developer yang kompeten.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Mulai Stage 1 Sekarang
          </button>
        </div>
      </motion.div>
    </div>
  );
}
