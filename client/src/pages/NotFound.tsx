import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Home, Rocket } from 'lucide-react';

/**
 * NotFound Page
 * Design: Cyberpunk Neon Cosmos
 * - 404 error page with futuristic design
 */

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-glow-purple mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sepertinya Anda telah melayang terlalu jauh ke luar angkasa. Halaman yang
            Anda cari tidak ada di sini.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <span className="inline-flex px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 items-center gap-2 justify-center cursor-pointer">
                <Home className="w-5 h-5" />
                Kembali ke Home
              </span>
            </Link>
            <Link href="/belajar">
              <span className="inline-flex px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 items-center gap-2 justify-center cursor-pointer">
                <Rocket className="w-5 h-5" />
                Mulai Belajar
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
