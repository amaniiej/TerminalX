// src/views/marketing/components/Pricing.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    title: 'Starter', price: '1,999', desc: 'Perfect for shop owners wanting to eliminate staff theft and bad math.',
    features: ['Master Ledger (Telebirr/CBE/Cash)', 'SMS Parser (The Magic Moment)', 'Single User (Owner only)', 'Daily Cash Position Report'],
    outcome: 'Know exactly where your money is at 6 PM.',
    highlight: false, enterprise: false,
  },
  {
    title: 'Business', price: '4,499', desc: 'For growing businesses scared of ERCA audits and payroll complexity.',
    features: ['Everything in Starter', 'Automated Pension & Income Tax', 'Live VAT/TOT Liability Tracker', 'Proforma & VAT Invoice PDF Gen', 'Owner + 1 Accountant Access'],
    outcome: 'Be safe from tax penalties, staff paid correctly.',
    highlight: true, enterprise: false,
  },
  {
    title: 'Enterprise', price: '14,999+', desc: 'For factories, distributors, and multi-location franchises.',
    features: ['Multi-Branch Sync (3+ Locations)', 'Asset & Equipment Registry', 'AI Business Assistant (Insights)', 'Audit Journal (Anti-Fraud Logs)', 'A4 Official Document + QR Code'],
    outcome: 'Manage your whole empire from your phone.',
    highlight: false, enterprise: true,
  },
];

export default function Pricing({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section style={{ background: '#0a0a0a', padding: '96px 40px', borderTop: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a7a7a7', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Pricing
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.84px', margin: '0 0 8px 0' }}>Prices.</h2>
          <p style={{ fontSize: '16px', color: '#a7a7a7', letterSpacing: '-0.19px', margin: 0 }}>Scale as you grow in the Ethiopian market.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1e1e1e', borderRadius: '8px', overflow: 'hidden' }}>
          {plans.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: p.highlight ? '#141414' : '#0a0a0a',
                padding: '32px',
                display: 'flex', flexDirection: 'column', gap: '24px',
                position: 'relative',
              }}
            >
              {p.highlight && (
                <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '2px', background: '#6798ff' }} />
              )}

              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: p.highlight ? '#6798ff' : '#a7a7a7', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '12px' }}>{p.title}</div>
                <div style={{ fontSize: '40px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.84px', lineHeight: 1 }}>{p.price}</div>
                <div style={{ fontSize: '14px', color: '#7c7c7c', letterSpacing: '-0.17px', marginTop: '2px' }}>ETB / month</div>
                <p style={{ fontSize: '14px', color: '#a7a7a7', lineHeight: 1.5, letterSpacing: '-0.17px', marginTop: '12px', marginBottom: 0 }}>{p.desc}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {p.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <Check size={13} color="#6798ff" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#a7a7a7', letterSpacing: '-0.17px' }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '16px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#7c7c7c', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '6px' }}>Outcome</div>
                <p style={{ fontSize: '13px', color: '#ffffff', fontWeight: 500, letterSpacing: '-0.17px', margin: 0 }}>"{p.outcome}"</p>
              </div>

              <button
                onClick={onGetStarted}
                style={{
                  width: '100%', padding: '10px 16px', borderRadius: '8px', border: p.highlight ? 'none' : '1px solid #454545',
                  background: p.highlight ? '#ffffff' : 'transparent',
                  color: p.highlight ? '#0a0a0a' : '#ffffff',
                  fontWeight: 500, cursor: 'pointer', fontSize: '14px', letterSpacing: '-0.17px',
                }}
              >
                {p.enterprise ? 'Contact for Onboarding' : 'Start Free Trial'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
