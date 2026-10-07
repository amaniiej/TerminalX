// src/views/marketing/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, AlertTriangle, Clock } from 'lucide-react';

const D = {
  carbon: '#04040b', graphite: '#121113', obsidian: '#1a191b', slate: '#232225',
  basalt: '#2b292d', iron: '#323035', fog: '#7c7a85', silver: '#b5b2bc',
  ash: '#eeeef0', chalk: '#e5e5e5', green: '#71d083', ledGreen: '#366740',
  mossBorder: '#2d5736', forestWash: '#1d3a24', fernGround: '#1b2a1e',
  lilac: '#baa7ff', linkBlue: '#70b8ff',
  display: "'Red Hat Display', sans-serif",
  text: "'Red Hat Text', sans-serif",
  mono: "'Red Hat Mono', monospace",
};

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: D.fernGround, border: `1px solid ${D.mossBorder}`, borderRadius: '2px', padding: '3px 8px', fontFamily: D.text, fontSize: '12px', fontWeight: 500, color: D.green, letterSpacing: '0.025em', textTransform: 'uppercase' }}>
    {children}
  </span>
);

// Terminal-style live ledger mockup
const LedgerPanel = () => (
  <div style={{ background: D.graphite, border: `1px solid ${D.basalt}`, borderRadius: '6px', overflow: 'hidden', boxShadow: 'rgba(255,255,255,0.06) 0px 1px 0px 0px inset' }}>
    {/* Header */}
    <div style={{ background: D.obsidian, borderBottom: `1px solid ${D.basalt}`, padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: D.mono, fontSize: '12px', color: D.fog, letterSpacing: '0.05em' }}>TERMINALX — LIVE LEDGER</span>
      <div style={{ display: 'flex', gap: '6px' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: D.green, display: 'inline-block', boxShadow: `0 0 6px ${D.green}` }} />
        <span style={{ fontFamily: D.mono, fontSize: '11px', color: D.green }}>LIVE</span>
      </div>
    </div>
    {/* Rows */}
    {[
      { time: '14:32', source: 'TELEBIRR', ref: 'TXN-88291', amount: '+ETB 4,500', type: 'income', status: 'verified' },
      { time: '14:18', source: 'CBE', ref: 'TRF-20041', amount: '+ETB 12,000', type: 'income', status: 'verified' },
      { time: '13:55', source: 'CASH', ref: 'EXP-0091', amount: '-ETB 2,300', type: 'expense', status: 'logged' },
      { time: '13:20', source: 'TELEBIRR', ref: 'TXN-88180', amount: '+ETB 8,750', type: 'income', status: 'verified' },
      { time: '12:44', source: 'CBE', ref: 'TRF-19980', amount: '-ETB 15,000', type: 'expense', status: 'logged' },
    ].map((row, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: '50px 80px 1fr auto auto', gap: '16px', alignItems: 'center', padding: '10px 16px', borderBottom: i < 4 ? `1px solid ${D.iron}` : 'none' }}>
        <span style={{ fontFamily: D.mono, fontSize: '11px', color: D.fog }}>{row.time}</span>
        <span style={{ fontFamily: D.mono, fontSize: '11px', color: D.silver }}>{row.source}</span>
        <span style={{ fontFamily: D.mono, fontSize: '11px', color: D.fog }}>{row.ref}</span>
        <span style={{ fontFamily: D.mono, fontSize: '13px', fontWeight: 600, color: row.type === 'income' ? D.green : '#f87171', letterSpacing: '0.025em' }}>{row.amount}</span>
        <span style={{ fontFamily: D.text, fontSize: '11px', color: row.status === 'verified' ? D.green : D.fog, letterSpacing: '0.025em' }}>● {row.status}</span>
      </div>
    ))}
    {/* Footer stat bar */}
    <div style={{ background: D.obsidian, borderTop: `1px solid ${D.basalt}`, padding: '10px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
      {[
        { label: 'TODAY\'S REVENUE', value: 'ETB 25,250', color: D.green },
        { label: 'VAT DUE', value: 'ETB 3,787', color: D.silver },
        { label: 'NET POSITION', value: '+ETB 7,963', color: D.green },
      ].map(({ label, value, color }) => (
        <div key={label}>
          <div style={{ fontFamily: D.mono, fontSize: '10px', color: D.fog, letterSpacing: '0.05em', marginBottom: '4px' }}>{label}</div>
          <div style={{ fontFamily: D.display, fontSize: '16px', fontWeight: 600, color, letterSpacing: '-0.5px' }}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section style={{ background: D.carbon, paddingTop: '120px', paddingBottom: '80px', borderBottom: `1px solid ${D.basalt}` }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        {/* ── CENTERED TEXT BLOCK with image backdrop ── */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '80px', paddingBottom: '80px', marginBottom: '64px', overflow: 'hidden' }}>
          {/* Image only behind this block, radial-faded to carbon */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: 'url(/images/imgg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.35,
            maskImage: 'radial-gradient(ellipse 75% 80% at 50% 50%, black 0%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 80% at 50% 50%, black 0%, black 30%, transparent 75%)',
          }} />
          {/* Dark tint so text stays legible over image */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse 75% 80% at 50% 50%, rgba(4,4,11,0.5) 0%, rgba(4,4,11,0.85) 60%, rgba(4,4,11,1) 75%)' }} />

          {/* Content — above both image layers */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: '24px' }}>
              <Tag>ERCA-Compliant ERP for Ethiopia</Tag>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: D.display, fontSize: '60px', fontWeight: 700, color: D.chalk, lineHeight: 1, letterSpacing: '-1.5px', margin: '0 0 24px 0', maxWidth: '680px' }}
            >
              Master Your<br />Business Finance.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: D.text, fontSize: '18px', fontWeight: 400, color: D.silver, lineHeight: 1.56, letterSpacing: '0.025em', margin: '0 0 32px 0', maxWidth: '480px' }}
            >
              Consolidate Telebirr, CBE, and Cash into a single legal ledger.
              The only ERP built specifically for the Ethiopian tax landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
            >
              <button
                onClick={onGetStarted}
                style={{ background: D.green, border: `1px solid ${D.ledGreen}`, color: D.carbon, padding: '10px 20px', borderRadius: '6px', fontFamily: D.text, fontSize: '14px', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.025em', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Get started free <ArrowRight size={14} />
              </button>
              <button
                onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'transparent', border: `1px solid ${D.basalt}`, color: D.ash, padding: '10px 20px', borderRadius: '6px', fontFamily: D.text, fontSize: '14px', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.025em', boxShadow: 'rgba(255,255,255,0.06) 0px 1px 0px 0px inset' }}
              >
                See how it works
              </button>
            </motion.div>
          </div>
        </div>

        {/* ── LEDGER PANEL — plain carbon, no image ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontFamily: D.mono, fontSize: '12px', color: D.fog }}>— Real-time ledger view. No manual entry.</span>
          </div>
          <LedgerPanel />
        </motion.div>

        {/* ── TRUST STRIP ── */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '32px', alignItems: 'center', borderTop: `1px solid ${D.basalt}`, paddingTop: '24px', flexWrap: 'wrap' }}>
          {[
            { icon: CheckCircle, text: 'ERCA VAT & TOT engine built-in' },
            { icon: TrendingUp, text: 'Telebirr & CBE SMS auto-parse' },
            { icon: AlertTriangle, text: 'Anti-fraud audit trail on every edit' },
            { icon: Clock, text: 'Saves 15+ hours/week vs. manual books' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon size={13} color={D.green} />
              <span style={{ fontFamily: D.text, fontSize: '13px', color: D.fog, letterSpacing: '0.025em' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
