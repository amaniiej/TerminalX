// src/views/marketing/components/ProblemSolution.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Clock } from 'lucide-react';

const ProblemItem = ({ title, desc }: { title: string; desc: string }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
    <X size={14} color="#7c7c7c" style={{ marginTop: '3px', flexShrink: 0 }} />
    <div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.17px', marginBottom: '4px' }}>{title}</div>
      <p style={{ fontSize: '14px', color: '#7c7c7c', lineHeight: 1.5, letterSpacing: '-0.17px', margin: 0 }}>{desc}</p>
    </div>
  </motion.div>
);

const SolutionItem = ({ title, desc }: { title: string; desc: string }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
    <Check size={14} color="#6798ff" style={{ marginTop: '3px', flexShrink: 0 }} />
    <div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.17px', marginBottom: '4px' }}>{title}</div>
      <p style={{ fontSize: '14px', color: '#a7a7a7', lineHeight: 1.5, letterSpacing: '-0.17px', margin: 0 }}>{desc}</p>
    </div>
  </motion.div>
);

export default function ProblemSolution() {
  return (
    <section style={{ background: '#0a0a0a', padding: '96px 40px', borderTop: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a7a7a7', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '16px' }}>
            The Problem
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.84px', margin: 0 }}>
            Stop Guessing. <span style={{ color: '#6798ff' }}>Start Governing.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#1e1e1e', borderRadius: '8px', overflow: 'hidden' }}>
          {/* Problems */}
          <div style={{ background: '#0a0a0a', padding: '40px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#7c7c7c', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '32px' }}>
              Current Risk
            </div>
            <ProblemItem title="The Reconciliation Trap" desc="Spending hours every night scrolling through Telebirr and CBE SMS messages to manually update your books." />
            <ProblemItem title="ERCA Compliance Anxiety" desc="The constant fear of the 30th of the month. Manual VAT/TOT calculations are prone to errors and heavy penalties." />
            <ProblemItem title="Invisible Leakage" desc="Small expenses and staff errors go unnoticed because you don't have a real-time pulse on your actual daily profit." />
            <ProblemItem title="Paper Decay" desc="Physical receipts fade, get lost, or become disorganized, making you vulnerable during a surprise government audit." />
          </div>

          {/* Solutions */}
          <div style={{ background: '#141414', padding: '40px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#6798ff', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '32px' }}>
              The Ledger Standard
            </div>
            <SolutionItem title="Magic Intake Engine" desc="Just paste your bank confirmation text. Our system extracts the amount, ID, and date instantly. Bookkeeping done in seconds." />
            <SolutionItem title="Automated Regulatory Math" desc="The ERCA engine calculates your VAT and Withholding Tax liabilities live as you sell. No more guessing, no more fines." />
            <SolutionItem title="Total Managerial Clarity" desc="See your net profit after every sale. Monitor your margins by product and branch from your phone or office." />
            <SolutionItem title="Immutable Digital Vault" desc="Instantly upload and compress receipts. Every record is hashed and timestamped, creating a bulletproof audit trail." />
          </div>
        </div>

        {/* stat strip */}
        <div style={{ marginTop: '32px', background: '#141414', border: '1px solid #1e1e1e', borderRadius: '8px', padding: '20px 32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Clock size={16} color="#6798ff" />
          <span style={{ fontSize: '14px', fontWeight: 400, color: '#a7a7a7', letterSpacing: '-0.17px' }}>
            Average user saves <strong style={{ color: '#ffffff', fontWeight: 600 }}>15+ hours per week</strong> on manual accounting.
          </span>
        </div>
      </div>
    </section>
  );
}
