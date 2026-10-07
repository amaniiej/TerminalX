// src/views/marketing/components/HowItWorks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Link2, Rocket } from 'lucide-react';

const steps = [
  { num: '01', icon: UserPlus, title: 'Create Your Account', desc: 'Register your enterprise with your TIN and business details to create a secure, isolated data instance.' },
  { num: '02', icon: Link2, title: 'Bridge Your Channels', desc: 'Seamlessly record sales, track expenses, and consolidate your business activity. Our smart interface handles the heavy lifting, ensuring every transaction is instantly captured in your master ledger.' },
  { num: '03', icon: Rocket, title: 'Scale with Clarity', desc: 'Access your real-time ledger, track tax risk, and generate legal reports instantly from any device.' },
];

export default function HowItWorks() {
  return (
    <section style={{ background: '#141414', padding: '96px 40px', borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a7a7a7', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '16px' }}>
            How It Works
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.84px', margin: 0 }}>
            Onboard in 5 minutes.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#1e1e1e', borderRadius: '8px', overflow: 'hidden' }}>
          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ background: '#141414', padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <Icon size={16} color="#6798ff" />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a7a7a7', letterSpacing: '0.85px' }}>{num}</span>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.19px', marginBottom: '12px' }}>{title}</div>
              <p style={{ fontSize: '14px', color: '#7c7c7c', lineHeight: 1.5, letterSpacing: '-0.17px', margin: 0 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
