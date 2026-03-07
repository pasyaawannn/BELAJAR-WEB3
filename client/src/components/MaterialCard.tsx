import { ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Material Card Component
 * Design: Cyberpunk Neon Cosmos
 * - Glassmorphic card with neon border
 * - Hover effects with glow and lift
 * - Smooth animations
 */

interface MaterialCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  color?: 'purple' | 'blue' | 'cyan';
  onClick?: () => void;
  children?: ReactNode;
  index?: number;
}

export function MaterialCard({
  title,
  description,
  icon,
  color = 'purple',
  onClick,
  children,
  index = 0,
}: MaterialCardProps) {
  const colorClasses = {
    purple: 'neon-border-purple hover:from-purple-500/20 hover:to-purple-500/10',
    blue: 'neon-border-blue hover:from-blue-500/20 hover:to-blue-500/10',
    cyan: 'neon-border-cyan hover:from-cyan-500/20 hover:to-cyan-500/10',
  };

  const glowColors = {
    purple: 'group-hover:neon-glow-purple',
    blue: 'group-hover:neon-glow-blue',
    cyan: 'group-hover:neon-glow-cyan',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div
        className={`glass-purple rounded-xl p-6 transition-all duration-300 ${colorClasses[color]} ${glowColors[color]}`}
      >
        {/* Icon */}
        {icon && (
          <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors">
          {description}
        </p>

        {/* Children */}
        {children && <div className="mt-4">{children}</div>}

        {/* Arrow indicator */}
        <div className="flex items-center gap-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Pelajari</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
