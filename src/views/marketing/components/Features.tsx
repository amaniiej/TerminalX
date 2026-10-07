// src/views/marketing/components/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Scale, Lock, FileBarChart, History, MessageSquare } from 'lucide-react';

const FEATURES = [
  { color: '#6798ff', icon: Smartphone, title: 'Telebirr & CBE Sync', large: true, desc: 'Automatically convert SMS confirmations into ledger entries. 100% accurate daily reconciliation without lifting a finger.', badge: 'MAGIC MOMENT' },
  { color: '#6798ff', icon: Scale, title: 'ERCA Engine', large: false, desc: 'Live VAT (15%) & TOT math as you sell. No more tax-day panic.' },
  { color: '#6798ff', icon: MessageSquare, title: 'AI Assistant', large: false, desc: 'Ask about margin drops or spending spikes. Get instant advice.' },
  { color: '#6798ff', icon: FileBarChart, title: 'Legal Reports', large: true, desc: 'Generate official A4 tax reports and proforma invoices ready for government submission in one click.', badge: 'OFFICIAL' },
  { color: '#6798ff', icon: Lock, title: 'Military Vault', large: false, desc: 'AES-256 encryption. Your data is your fortress.' },
  { color: '#6798ff', icon: History, title: 'Anti-Theft Journal', large: true, desc: 'Every price change and deleted transaction is logged. Complete transparency for owners to prevent internal fraud.' },
];

export default function Features() {
  return (
    <section style={{ background: '#0a0a0a', padding: '96px 40px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
      {/* Eyebrow + header */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a7a7a7', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '16px' }}>
          The Ecosystem
        </div>
        <h2 style={{ fontSize: '56px', fontWeight: 600, color: '#ffffff', lineHeight: 1.14, letterSpacing: '-2.02px', margin: 0 }}>
          Everything you need<br />to <span style={{ color: '#6798ff' }}>Dominate.</span>
        </h2>
      </div>

      {/* Bento grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(180px, auto)', gap: '1px', background: '#1e1e1e', borderRadius: '8px', overflow: 'hidden' }}>
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            style={{
              gridColumn: f.large ? 'span 2' : 'span 1',
              background: '#0a0a0a', padding: '32px',
              display: 'flex', flexDirection: f.large ? 'row' : 'column',
              gap: '20px', alignItems: f.large ? 'flex-start' : 'flex-start',
              transition: 'background 0.15s',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#141414')}
            onMouseLeave={e => (e.currentTarget.style.background = '#0a0a0a')}
          >
            <f.icon size={18} color="#6798ff" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.19px' }}>{f.title}</span>
                {f.badge && (
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#6798ff', letterSpacing: '0.85px', border: '1px solid #6798ff33', borderRadius: '4px', padding: '1px 6px' }}>
                    {f.badge}
                  </span>
                )}
              </div>
              <p style={{ fontSize: '14px', fontWeight: 400, color: '#a7a7a7', lineHeight: 1.5, letterSpacing: '-0.17px', margin: 0, maxWidth: f.large ? '420px' : '100%' }}>
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
