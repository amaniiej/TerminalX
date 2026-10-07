// src/views/marketing/components/Compliance.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gavel, FileLock, Scale } from 'lucide-react';

const Item = ({ icon: Icon, title, desc }: any) => (
  <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
    <Icon size={16} color="#6798ff" style={{ marginTop: '3px', flexShrink: 0 }} />
    <div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.17px', marginBottom: '4px' }}>{title}</div>
      <p style={{ fontSize: '14px', fontWeight: 400, color: '#a7a7a7', lineHeight: 1.5, letterSpacing: '-0.17px', margin: 0 }}>{desc}</p>
    </div>
  </div>
);

export default function Compliance() {
  return (
    <section style={{ background: '#141414', padding: '96px 40px', borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a7a7a7', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Government Ready
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.84px', marginBottom: '48px', margin: '0 0 48px 0' }}>
            Built for the<br /><span style={{ color: '#6798ff' }}>Ethiopian Legal Framework.</span>
          </h2>
          <Item icon={Scale} title="ERCA Directive Alignment" desc="Our calculation engine is hard-coded to match the latest Ministry of Revenues VAT (15%) and TOT (2%) directives." />
          <Item icon={FileLock} title="Encrypted Audit Trail" desc="Every transaction is cryptographically hashed. In a surprise audit, generate a verified history in under 60 seconds." />
          <Item icon={Gavel} title="Withholding Tax Automation" desc="Automatically detect and withhold the required 2% for local payments over 10,000 ETB, as per legal requirements." />
        </motion.div>

        {/* Card */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ background: '#1e1e1e', border: '1px solid #313131', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
            <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 4, repeat: Infinity }}>
              <ShieldCheck size={56} color="#6798ff" style={{ marginBottom: '24px' }} />
            </motion.div>
            <div style={{ fontSize: '20px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.42px', marginBottom: '12px' }}>Security Certified</div>
            <p style={{ fontSize: '14px', color: '#a7a7a7', lineHeight: 1.5, marginBottom: '32px', letterSpacing: '-0.17px' }}>
              Your data instance is logically isolated and encrypted using AES-256 standards.
            </p>
            <div style={{ borderTop: '1px solid #313131', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#7c7c7c', letterSpacing: '0.85px' }}>STATUS</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#6798ff', letterSpacing: '0.85px' }}>● COMPLIANT</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#7c7c7c', letterSpacing: '0.85px' }}>LAST AUDIT</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#ffffff', letterSpacing: '0.85px' }}>28 JAN 2026</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
