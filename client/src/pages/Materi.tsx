import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Materi Page
 * Design: Cyberpunk Neon Cosmos
 * - Detailed learning materials
 * - Expandable sections
 * - Progress tracking
 */

interface MaterialSection {
  id: string;
  title: string;
  description: string;
  content: string[];
  completed: boolean;
}

export default function Materi() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [completedSections, setCompletedSections] = useState<Set<string>>(
    new Set()
  );

  const materials: MaterialSection[] = [
    {
      id: 'web1-web2-web3',
      title: 'Web1, Web2, dan Web3: Evolusi Internet',
      description: 'Memahami perbedaan dan evolusi dari tiga generasi web',
      content: [
        'Web1 (1990-2005): Era read-only, website statis, konten satu arah dari penyedia ke pengguna. Contoh: Yahoo, AOL.',
        'Web2 (2005-sekarang): Era read-write, media sosial, user-generated content. Namun data terpusat di perusahaan besar (Facebook, Google, Amazon).',
        'Web3 (sekarang): Era read-write-own, desentralisasi, blockchain, pengguna memiliki kontrol penuh atas data mereka.',
        'Perbedaan kunci: Web1 = informasi, Web2 = platform, Web3 = kepemilikan.',
      ],
      completed: false,
    },
    {
      id: 'blockchain-basics',
      title: 'Blockchain: Fondasi Web3',
      description: 'Teknologi dasar yang menggerakkan Web3',
      content: [
        'Blockchain adalah buku besar terdistribusi yang mencatat transaksi secara permanen dan transparan.',
        'Setiap blok berisi data, timestamp, dan hash dari blok sebelumnya, menciptakan rantai yang tidak dapat diubah.',
        'Teknologi consensus (Proof of Work, Proof of Stake) memastikan jaringan setuju pada keadaan blockchain.',
        'Keamanan blockchain dijamin oleh kriptografi dan desentralisasi - tidak ada satu titik kegagalan.',
        'Aplikasi: cryptocurrency, smart contracts, supply chain, voting, dan banyak lagi.',
      ],
      completed: false,
    },
    {
      id: 'cryptocurrency',
      title: 'Cryptocurrency: Uang Digital',
      description: 'Mata uang yang beroperasi di blockchain',
      content: [
        'Cryptocurrency adalah aset digital yang menggunakan kriptografi untuk keamanan dan verifikasi transaksi.',
        'Bitcoin (BTC) adalah cryptocurrency pertama, diciptakan oleh Satoshi Nakamoto pada 2009.',
        'Ethereum (ETH) memperkenalkan smart contracts, memungkinkan aplikasi terdesentralisasi.',
        'Cara kerja: transaksi ditandatangani dengan private key, diverifikasi jaringan, dicatat di blockchain.',
        'Keuntungan: cepat, murah, tidak perlu perantara. Tantangan: volatilitas, regulasi, skalabilitas.',
      ],
      completed: false,
    },
    {
      id: 'smart-contracts',
      title: 'Smart Contracts: Kontrak Otomatis',
      description: 'Program yang berjalan di blockchain',
      content: [
        'Smart contract adalah program yang otomatis mengeksekusi perjanjian ketika kondisi terpenuhi.',
        'Ditulis dalam bahasa pemrograman seperti Solidity (Ethereum), berjalan di blockchain tanpa perantara.',
        'Keuntungan: transparan, tidak dapat diubah, otomatis, mengurangi biaya dan waktu.',
        'Contoh: asuransi otomatis, pembiayaan terjamin, voting terdesentralisasi, game on-chain.',
        'Risiko: bug dalam kode dapat menyebabkan kerugian finansial (lihat DAO hack 2016).',
      ],
      completed: false,
    },
    {
      id: 'wallet-crypto',
      title: 'Wallet Crypto: Menyimpan Aset Digital',
      description: 'Cara aman menyimpan dan mengelola cryptocurrency',
      content: [
        'Wallet crypto adalah aplikasi yang menyimpan private key dan public key Anda.',
        'Public key: alamat Anda di blockchain, dapat dibagikan untuk menerima dana.',
        'Private key: kunci rahasia untuk mengakses dan mengirim aset, JANGAN bagikan kepada siapa pun.',
        'Jenis wallet: hot wallet (online, mudah tapi kurang aman), cold wallet (offline, lebih aman).',
        'Contoh: MetaMask, Ledger, Coinbase Wallet. Selalu gunakan wallet terpercaya dan backup seed phrase Anda.',
      ],
      completed: false,
    },
    {
      id: 'defi-basics',
      title: 'DeFi: Keuangan Tanpa Bank',
      description: 'Layanan keuangan terdesentralisasi',
      content: [
        'DeFi (Decentralized Finance) adalah layanan keuangan yang berjalan di blockchain tanpa bank.',
        'Layanan utama: lending (peminjaman), borrowing (pinjaman), trading, yield farming.',
        'Keuntungan: akses 24/7, bunga lebih tinggi, transparansi, tidak perlu KYC untuk semua layanan.',
        'Risiko: volatilitas harga, smart contract bugs, impermanent loss di liquidity pools.',
        'Platform populer: Uniswap, Aave, Curve, Compound.',
      ],
      completed: false,
    },
    {
      id: 'nft-basics',
      title: 'NFT: Aset Digital Unik',
      description: 'Token yang tidak dapat ditukar',
      content: [
        'NFT (Non-Fungible Token) adalah aset digital unik yang tidak dapat ditukar dengan aset lain yang sama.',
        'Berbeda dengan cryptocurrency (fungible) yang dapat ditukar 1:1, setiap NFT memiliki nilai unik.',
        'Standar: ERC-721 (satu NFT per token), ERC-1155 (multiple NFTs per token).',
        'Aplikasi: seni digital, koleksi, gaming, real estate virtual, identitas digital.',
        'Pasar: OpenSea, Blur, Magic Eden. Hati-hati dengan scam dan rug pulls.',
      ],
      completed: false,
    },
    {
      id: 'getting-started',
      title: 'Memulai Web3: Panduan Langkah Demi Langkah',
      description: 'Cara memulai perjalanan Web3 Anda',
      content: [
        'Langkah 1: Pilih dan install wallet (MetaMask untuk browser, Trust Wallet untuk mobile).',
        'Langkah 2: Catat seed phrase Anda dan simpan di tempat aman (jangan di internet).',
        'Langkah 3: Beli cryptocurrency di exchange (Binance, Coinbase, Kraken).',
        'Langkah 4: Transfer crypto dari exchange ke wallet Anda.',
        'Langkah 5: Jelajahi aplikasi Web3 (DEX, lending, NFT marketplace).',
        'Tips keamanan: gunakan wallet baru untuk eksperimen, jangan click link mencurigakan, verify alamat kontrak.',
      ],
      completed: false,
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const toggleCompleted = (id: string) => {
    const newCompleted = new Set(completedSections);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedSections(newCompleted);
  };

  const progressPercentage = Math.round(
    (completedSections.size / materials.length) * 100
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-glow-purple mb-4">
          Materi Pembelajaran
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-6">
          Materi lengkap Web3 dengan penjelasan detail. Tandai setiap bagian saat
          Anda menyelesaikannya.
        </p>

        {/* Progress Bar */}
        <div className="max-w-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Progress Belajar</span>
            <span className="text-sm font-bold text-accent">{progressPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Materials List */}
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-purple rounded-xl neon-border-purple overflow-hidden"
            >
              <button
                onClick={() => toggleSection(material.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-500/10 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <input
                    type="checkbox"
                    checked={completedSections.has(material.id)}
                    onChange={() => toggleCompleted(material.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-5 h-5 rounded cursor-pointer accent-cyan-500"
                  />
                  <div>
                    <h3
                      className={`font-bold text-lg transition-colors ${
                        completedSections.has(material.id)
                          ? 'text-muted-foreground line-through'
                          : 'text-foreground'
                      }`}
                    >
                      {material.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {material.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform ${
                    expandedSection === material.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedSection === material.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 border-t border-purple-500/30 bg-purple-500/5"
                >
                  <ul className="space-y-3">
                    {material.content.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
                        <span className="text-accent font-bold flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
