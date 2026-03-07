import { motion } from 'framer-motion';
import {
  ExternalLink,
  Wallet,
  Search,
  Code,
  Zap,
  BookOpen,
} from 'lucide-react';

/**
 * Tools Page
 * Design: Cyberpunk Neon Cosmos
 * - Web3 tools recommendations
 * - Categorized by type
 * - External links
 */

interface Tool {
  name: string;
  description: string;
  url: string;
  category: 'wallet' | 'explorer' | 'developer' | 'learning' | 'defi';
  icon: React.ReactNode;
  color: 'purple' | 'blue' | 'cyan';
}

export default function Tools() {
  const tools: Tool[] = [
    // Wallets
    {
      name: 'MetaMask',
      description: 'Browser extension wallet untuk Ethereum dan EVM chains. Paling populer untuk pemula.',
      url: 'https://metamask.io',
      category: 'wallet',
      icon: <Wallet className="w-6 h-6" />,
      color: 'purple',
    },
    {
      name: 'Trust Wallet',
      description: 'Mobile wallet dengan support untuk 60+ blockchain. User-friendly dan aman.',
      url: 'https://trustwallet.com',
      category: 'wallet',
      icon: <Wallet className="w-6 h-6" />,
      color: 'blue',
    },
    {
      name: 'Ledger',
      description: 'Hardware wallet untuk keamanan maksimal. Terbaik untuk menyimpan aset jangka panjang.',
      url: 'https://www.ledger.com',
      category: 'wallet',
      icon: <Wallet className="w-6 h-6" />,
      color: 'cyan',
    },
    {
      name: 'Coinbase Wallet',
      description: 'Wallet dari exchange terpercaya Coinbase. Mudah digunakan dan aman.',
      url: 'https://www.coinbase.com/wallet',
      category: 'wallet',
      icon: <Wallet className="w-6 h-6" />,
      color: 'purple',
    },

    // Explorers
    {
      name: 'Etherscan',
      description: 'Block explorer untuk Ethereum. Lihat semua transaksi, smart contracts, dan data on-chain.',
      url: 'https://etherscan.io',
      category: 'explorer',
      icon: <Search className="w-6 h-6" />,
      color: 'blue',
    },
    {
      name: 'Polygonscan',
      description: 'Block explorer untuk Polygon (Layer 2 Ethereum). Transaksi lebih cepat dan murah.',
      url: 'https://polygonscan.com',
      category: 'explorer',
      icon: <Search className="w-6 h-6" />,
      color: 'cyan',
    },
    {
      name: 'BscScan',
      description: 'Block explorer untuk Binance Smart Chain. Lihat transaksi dan smart contracts di BSC.',
      url: 'https://bscscan.com',
      category: 'explorer',
      icon: <Search className="w-6 h-6" />,
      color: 'purple',
    },

    // Developer Tools
    {
      name: 'Remix IDE',
      description: 'IDE online untuk menulis dan deploy smart contracts Solidity. Tidak perlu install.',
      url: 'https://remix.ethereum.org',
      category: 'developer',
      icon: <Code className="w-6 h-6" />,
      color: 'cyan',
    },
    {
      name: 'Hardhat',
      description: 'Framework Ethereum untuk development, testing, dan deployment smart contracts.',
      url: 'https://hardhat.org',
      category: 'developer',
      icon: <Code className="w-6 h-6" />,
      color: 'purple',
    },
    {
      name: 'Foundry',
      description: 'Toolchain Rust untuk Ethereum development. Cepat dan powerful untuk smart contracts.',
      url: 'https://book.getfoundry.sh',
      category: 'developer',
      icon: <Code className="w-6 h-6" />,
      color: 'blue',
    },
    {
      name: 'Web3.js',
      description: 'Library JavaScript untuk interact dengan Ethereum. Essential untuk Web3 frontend.',
      url: 'https://web3js.readthedocs.io',
      category: 'developer',
      icon: <Code className="w-6 h-6" />,
      color: 'cyan',
    },
    {
      name: 'Ethers.js',
      description: 'Alternative Web3.js dengan API lebih modern. Semakin populer di kalangan developer.',
      url: 'https://docs.ethers.org',
      category: 'developer',
      icon: <Code className="w-6 h-6" />,
      color: 'purple',
    },

    // Learning
    {
      name: 'CryptoZombies',
      description: 'Game interaktif untuk belajar Solidity. Fun dan educational untuk pemula.',
      url: 'https://cryptozombies.io',
      category: 'learning',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'blue',
    },
    {
      name: 'Ethereum.org',
      description: 'Dokumentasi resmi Ethereum. Sumber terbaik untuk informasi akurat tentang Ethereum.',
      url: 'https://ethereum.org',
      category: 'learning',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'cyan',
    },
    {
      name: 'Solidity Docs',
      description: 'Dokumentasi resmi bahasa Solidity. Referensi lengkap untuk smart contract development.',
      url: 'https://docs.soliditylang.org',
      category: 'learning',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'purple',
    },

    // DeFi
    {
      name: 'Uniswap',
      description: 'Decentralized exchange (DEX) terbesar. Trade token tanpa KYC dan terpercaya.',
      url: 'https://uniswap.org',
      category: 'defi',
      icon: <Zap className="w-6 h-6" />,
      color: 'purple',
    },
    {
      name: 'Aave',
      description: 'Lending protocol terbesar di DeFi. Pinjam dan deposit crypto untuk earn interest.',
      url: 'https://aave.com',
      category: 'defi',
      icon: <Zap className="w-6 h-6" />,
      color: 'blue',
    },
    {
      name: 'Curve',
      description: 'DEX khusus stablecoin. Slippage rendah untuk trading stablecoin.',
      url: 'https://curve.fi',
      category: 'defi',
      icon: <Zap className="w-6 h-6" />,
      color: 'cyan',
    },
  ];

  const categories = [
    { id: 'wallet', label: 'Wallet', color: 'purple' as const },
    { id: 'explorer', label: 'Explorer', color: 'blue' as const },
    { id: 'developer', label: 'Developer Tools', color: 'cyan' as const },
    { id: 'learning', label: 'Learning', color: 'purple' as const },
    { id: 'defi', label: 'DeFi', color: 'blue' as const },
  ];

  const colorClasses = {
    purple: 'neon-border-purple',
    blue: 'neon-border-blue',
    cyan: 'neon-border-cyan',
  };

  const groupedTools = categories.reduce((acc, cat) => {
    acc[cat.id] = tools.filter((t) => t.category === cat.id);
    return acc;
  }, {} as Record<string, Tool[]>);

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
          Web3 Tools
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Koleksi tools terpercaya untuk memulai perjalanan Web3 Anda. Dari wallet
          hingga developer tools, semua yang Anda butuhkan ada di sini.
        </p>
      </motion.div>

      {/* Tools by Category */}
      <div className="container mx-auto px-4">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-glow-cyan mb-8">
              {category.label}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedTools[category.id].map((tool, toolIndex) => (
                <motion.a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: toolIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`glass-purple rounded-xl p-6 ${colorClasses[tool.color]} group cursor-pointer transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className="mb-4 p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg w-fit text-white group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {tool.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {tool.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Kunjungi</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Resources */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-20"
      >
        <h2 className="text-3xl font-bold text-glow-cyan mb-8">
          Sumber Daya Tambahan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Discord Communities',
              items: [
                'Ethereum Developers',
                'OpenZeppelin',
                'Hardhat',
                'Web3 Indonesia',
              ],
            },
            {
              title: 'Twitter Accounts to Follow',
              items: [
                'Vitalik Buterin',
                'OpenZeppelin',
                'Ethereum Foundation',
                'Web3 Influencers',
              ],
            },
            {
              title: 'Blogs dan Websites',
              items: [
                'Mirror.xyz',
                'Dev.to',
                'Medium',
                'Hackernoon',
              ],
            },
            {
              title: 'YouTube Channels',
              items: [
                'Ethereum Foundation',
                'Patrick Collins',
                'Web3 Academy',
                'Dapp University',
              ],
            },
          ].map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-blue rounded-xl p-6 neon-border-blue"
            >
              <h3 className="text-xl font-bold text-accent mb-4">
                {resource.title}
              </h3>
              <ul className="space-y-2">
                {resource.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
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
            Pilih Tool Favorit Anda
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Mulai dengan wallet, jelajahi block explorer, dan experiment dengan
            developer tools. Setiap tool memiliki dokumentasi lengkap untuk
            membantu Anda.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Kembali ke Materi
          </button>
        </div>
      </motion.div>
    </div>
  );
}
