// src/views/marketing/components/CTA.tsx
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section style={{ background: '#141414', padding: '96px 40px', borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#6798ff', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Founder's Early Access
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.84px', marginBottom: '16px', margin: '0 0 16px 0' }}>
            Ready to secure your<br />business future?
          </h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.5, letterSpacing: '-0.19px', marginBottom: '32px', maxWidth: '400px', margin: '0 0 32px 0' }}>
            Join 10 exclusive "Founding Partners" this month and lock in a 50% lifetime discount on our Business Plan.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={onGetStarted}
              style={{ background: '#ffffff', color: '#0a0a0a', border: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '-0.17px' }}
            >
              Get Started Now <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Right: rings */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '200px' }}>
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 12 * i, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', width: `${80 + i * 48}px`, height: `${80 + i * 48}px`, border: '1px solid #313131', borderRadius: '50%' }}
            />
          ))}
          <div style={{ position: 'relative', zIndex: 2, background: '#1e1e1e', border: '1px solid #313131', borderRadius: '8px', padding: '20px' }}>
            <ShieldCheck size={32} color="#6798ff" />
          </div>
        </div>
      </div>
    </section>
  );
}
