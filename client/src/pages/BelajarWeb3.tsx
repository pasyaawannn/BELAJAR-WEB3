import { motion } from 'framer-motion';
import { MaterialCard } from '@/components/MaterialCard';
import {
  Zap,
  Lock,
  Wallet,
  Coins,
  Shield,
  Rocket,
  Database,
  Code,
} from 'lucide-react';

/**
 * Belajar Web3 Page
 * Design: Cyberpunk Neon Cosmos
 * - Comprehensive Web3 learning content
 * - Interactive material cards
 * - Smooth animations
 */

export default function BelajarWeb3() {
  const learningModules = [
    {
      title: 'Web1, Web2, dan Web3',
      description:
        'Pahami evolusi internet dari Web1 (read-only), Web2 (read-write, centralized), hingga Web3 (read-write-own, decentralized)',
      icon: <Zap className="w-6 h-6" />,
      color: 'purple' as const,
    },
    {
      title: 'Blockchain Dijelaskan',
      description:
        'Teknologi dasar di balik Web3. Pelajari bagaimana blockchain menyimpan data secara terdesentralisasi dan aman',
      icon: <Database className="w-6 h-6" />,
      color: 'blue' as const,
    },
    {
      title: 'Cryptocurrency',
      description:
        'Mata uang digital yang beroperasi tanpa bank. Pelajari cara kerja Bitcoin, Ethereum, dan token lainnya',
      icon: <Coins className="w-6 h-6" />,
      color: 'cyan' as const,
    },
    {
      title: 'Smart Contract',
      description:
        'Program yang berjalan di blockchain. Kontrak otomatis yang mengeksekusi perjanjian tanpa perantara',
      icon: <Code className="w-6 h-6" />,
      color: 'purple' as const,
    },
    {
      title: 'Wallet Crypto',
      description:
        'Dompet digital untuk menyimpan dan mengelola aset crypto. Pahami private key, public key, dan keamanan',
      icon: <Wallet className="w-6 h-6" />,
      color: 'blue' as const,
    },
    {
      title: 'DeFi (Decentralized Finance)',
      description:
        'Layanan keuangan tanpa bank. Lending, borrowing, trading, dan yield farming di blockchain',
      icon: <Rocket className="w-6 h-6" />,
      color: 'cyan' as const,
    },
    {
      title: 'NFT (Non-Fungible Token)',
      description:
        'Aset digital unik yang tidak dapat ditukar. Seni, koleksi, dan kepemilikan digital di blockchain',
      icon: <Shield className="w-6 h-6" />,
      color: 'purple' as const,
    },
    {
      title: 'Memulai Web3 untuk Pemula',
      description:
        'Panduan langkah demi langkah untuk memulai perjalanan Web3 Anda. Dari setup wallet hingga transaksi pertama',
      icon: <Rocket className="w-6 h-6" />,
      color: 'blue' as const,
    },
  ];

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
          Belajar Web3
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Pelajari konsep-konsep fundamental Web3 dari dasar hingga paham. Setiap
          modul dirancang untuk pemula dengan penjelasan yang sederhana dan mudah
          dipahami.
        </p>
      </motion.div>

      {/* Learning Modules Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningModules.map((module, index) => (
            <MaterialCard
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
              color={module.color}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Key Concepts Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-20"
      >
        <h2 className="text-3xl font-bold text-glow-cyan mb-8">
          Konsep Kunci Web3
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Desentralisasi',
              content:
                'Tidak ada satu entitas pusat yang mengontrol. Kekuatan ada di tangan pengguna.',
            },
            {
              title: 'Transparansi',
              content:
                'Semua transaksi tercatat di blockchain dan dapat diverifikasi siapa saja.',
            },
            {
              title: 'Keamanan',
              content:
                'Menggunakan kriptografi untuk melindungi aset dan data Anda.',
            },
            {
              title: 'Kepemilikan',
              content:
                'Anda memiliki kontrol penuh atas aset digital Anda tanpa perantara.',
            },
          ].map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-blue rounded-xl p-6 neon-border-blue"
            >
              <h3 className="text-xl font-bold text-accent mb-3">
                {concept.title}
              </h3>
              <p className="text-muted-foreground">{concept.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-20 text-center"
      >
        <div className="glass-purple rounded-xl p-8 neon-border-purple">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Siap Memulai Perjalanan Web3 Anda?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk menjadi bagian dari revolusi digital.
            Mulai belajar sekarang dan kuasai Web3 dari dasar.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Mulai Belajar Sekarang
          </button>
        </div>
      </motion.div>
    </div>
  );
}
