// src/views/ComingSoon.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ComingSoon: React.FC<Props> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      {/* Blue accent splash — top right */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '420px', height: '420px',
        background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      {/* Ink splash — bottom left */}
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '340px', height: '340px',
        background: 'radial-gradient(circle, rgba(15,23,42,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      {/* Back button */}
      <motion.button
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.97 }}
        onClick={onBack}
        style={{
          position: 'absolute', top: '36px', left: '8%',
          background: 'none', border: '1px solid #e2e8f0',
          color: '#64748b', borderRadius: '8px',
          display: 'flex', alignItems: 'center', gap: '8px',
          cursor: 'pointer', fontSize: '13px', fontWeight: 600,
          padding: '8px 16px', zIndex: 10,
          transition: 'border-color 0.2s, color 0.2s',
        }}
      >
        <ArrowLeft size={14} /> Back to site
      </motion.button>

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center', maxWidth: '700px', padding: '0 32px',
      }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '28px' }}
        >
          <span style={{
            fontSize: '11px', fontWeight: 800, color: '#2563EB',
            letterSpacing: '3px', textTransform: 'uppercase',
          }}>
            TERMINALX — IN DEVELOPMENT
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontSize: 'clamp(48px, 7vw, 80px)',
            fontWeight: 900,
            color: '#0f172a',
            lineHeight: 1.05,
            letterSpacing: '-4px',
            margin: '0 0 32px',
          }}
        >
          Something powerful<br />
          <span style={{
            background: 'linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            is on its way.
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #e2e8f0, transparent)',
            margin: '40px auto',
            width: '100%',
          }}
        />

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ fontSize: '13px', color: '#94a3b8', margin: 0, fontWeight: 500 }}
        >
          © {new Date().getFullYear()} TerminalX — Addis Ababa, Ethiopia
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ComingSoon;
