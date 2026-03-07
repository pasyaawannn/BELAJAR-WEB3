import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

/**
 * Navigation Component
 * Design: Cyberpunk Neon Cosmos
 * - Sticky glassmorphic top nav
 * - Neon purple/blue colors
 * - Responsive mobile menu
 */

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Belajar Web3', href: '/belajar' },
    { label: 'Materi', href: '/materi' },
    { label: 'Tools', href: '/tools' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Tentang', href: '/tentang' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center neon-glow-purple">
                <span className="text-white font-bold text-lg">W3</span>
              </div>
              <span className="hidden md:inline text-glow-purple font-bold text-lg">Web3 Space</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-foreground hover:text-accent transition-colors duration-300 hover:text-glow-cyan font-medium">
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-accent" />
            ) : (
              <Menu className="w-6 h-6 text-accent" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block px-4 py-2 rounded-lg hover:bg-purple-500/20 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
