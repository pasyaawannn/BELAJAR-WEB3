import { motion } from 'framer-motion';
import { Heart, Zap, Globe, Users } from 'lucide-react';

/**
 * Tentang (About) Page
 * Design: Cyberpunk Neon Cosmos
 * - Platform information
 * - Mission and vision
 * - Team and contact
 */

export default function Tentang() {
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
          Tentang Web3 Space
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Platform edukasi Web3 yang dirancang untuk membuat teknologi blockchain
          mudah dipahami oleh semua orang.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass-purple rounded-xl p-8 neon-border-purple">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-accent">Misi Kami</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Memberdayakan setiap orang dengan pengetahuan Web3 dan blockchain.
              Kami percaya bahwa teknologi desentralisasi adalah masa depan
              internet, dan semua orang berhak memahaminya. Platform kami
              menyediakan materi pembelajaran yang mudah dipahami, dari pemula
              hingga tingkat lanjut.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-blue rounded-xl p-8 neon-border-blue">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold text-accent">Visi Kami</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Menciptakan komunitas global Web3 yang teredukasi, aman, dan
              bertanggung jawab. Kami ingin menjadi jembatan antara teknologi
              blockchain yang kompleks dan pengguna yang ingin belajar. Dengan
              edukasi yang tepat, kami percaya Web3 dapat mengubah dunia menjadi
              lebih baik.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why Web3 Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-glow-cyan mb-8">
          Mengapa Web3 Penting?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Desentralisasi',
              description:
                'Tidak ada satu entitas yang mengontrol. Kekuatan ada di tangan pengguna, bukan perusahaan besar.',
            },
            {
              title: 'Keamanan',
              description:
                'Teknologi blockchain menggunakan kriptografi tingkat militer untuk melindungi aset dan data Anda.',
            },
            {
              title: 'Transparansi',
              description:
                'Semua transaksi tercatat di blockchain dan dapat diverifikasi siapa saja. Tidak ada yang tersembunyi.',
            },
            {
              title: 'Kepemilikan',
              description:
                'Anda memiliki kontrol penuh atas aset digital Anda tanpa perlu perantara atau bank.',
            },
            {
              title: 'Inovasi',
              description:
                'Smart contracts memungkinkan aplikasi baru yang sebelumnya tidak mungkin. Kemungkinannya tidak terbatas.',
            },
            {
              title: 'Inklusi Finansial',
              description:
                'Web3 membuka akses keuangan untuk semua orang, terlepas dari lokasi atau status bank mereka.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-cyan rounded-xl p-6 neon-border-cyan"
            >
              <h3 className="text-lg font-bold text-accent mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-glow-cyan mb-8">
          Fitur Platform Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Heart className="w-6 h-6" />,
              title: 'Materi Berkualitas Tinggi',
              description:
                'Materi pembelajaran yang ditulis oleh expert Web3 dan diupdate secara berkala.',
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Interaktif dan Engaging',
              description:
                'Belajar dengan cara yang menyenangkan melalui card interaktif, progress tracking, dan animasi.',
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: 'Roadmap Jelas',
              description:
                'Panduan lengkap dari pemula hingga developer. Tahu persis apa yang harus dipelajari.',
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: 'Komunitas Supportif',
              description:
                'Bergabung dengan komunitas learner lain dan saling membantu dalam perjalanan Web3.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-purple rounded-xl p-6 neon-border-purple"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-accent">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-glow-cyan mb-8">
          Pertanyaan Umum
        </h2>

        <div className="space-y-4">
          {[
            {
              q: 'Apakah saya perlu pengetahuan teknis sebelumnya?',
              a: 'Tidak! Platform kami dirancang untuk pemula. Kami menjelaskan setiap konsep dari dasar.',
            },
            {
              q: 'Berapa lama waktu yang diperlukan untuk belajar Web3?',
              a: 'Tergantung tujuan Anda. Untuk pemahaman dasar: 2-3 minggu. Untuk menjadi developer: 3-4 bulan.',
            },
            {
              q: 'Apakah ada biaya untuk menggunakan platform ini?',
              a: 'Materi pembelajaran kami gratis untuk semua orang. Kami percaya edukasi harus dapat diakses.',
            },
            {
              q: 'Bagaimana jika saya stuck atau tidak mengerti?',
              a: 'Bergabunglah dengan komunitas kami di Discord. Ada banyak learner dan expert yang siap membantu.',
            },
            {
              q: 'Apakah Web3 aman untuk pemula?',
              a: 'Web3 aman jika Anda mengikuti best practices. Kami mengajarkan keamanan sejak awal.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-blue rounded-xl p-6 neon-border-blue"
            >
              <h3 className="text-lg font-bold text-accent mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <div className="glass-purple rounded-xl p-8 neon-border-purple">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Kami ingin mendengar
            dari Anda. Hubungi kami melalui email atau bergabunglah dengan komunitas
            Discord kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Email Kami
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
              Join Discord
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
