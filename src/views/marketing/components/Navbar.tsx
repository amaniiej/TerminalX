// src/views/marketing/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const D = {
  carbon: '#04040b', graphite: '#121113', obsidian: '#1a191b',
  basalt: '#2b292d', ash: '#eeeef0', chalk: '#e5e5e5',
  fog: '#7c7a85', green: '#71d083', ledGreen: '#366740',
  display: "'Red Hat Display', sans-serif",
  text: "'Red Hat Text', sans-serif",
  mono: "'Red Hat Mono', monospace",
};

export default function Navbar({ onGetStarted }: { onGetStarted: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const links = [
    { name: 'Features', id: 'features-section' },
    { name: 'Compliance', id: 'compliance-section' },
    { name: 'Pricing', id: 'pricing-section' },
    { name: 'Contact', id: 'contact-section' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: '56px',
      background: scrolled ? 'rgba(4,4,11,0.95)' : D.carbon,
      borderBottom: `1px solid ${D.basalt}`,
      backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px', boxSizing: 'border-box',
      transition: 'background 0.2s',
    }}>
      {/* Brand */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flexShrink: 0 }}
      >
        <ShieldCheck size={16} color={D.green} strokeWidth={2} />
        <span style={{ fontFamily: D.display, fontSize: '14px', fontWeight: 600, color: D.chalk, letterSpacing: '0.025em' }}>
          TerminalX
        </span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map(l => (
          <span
            key={l.id}
            onClick={() => scrollTo(l.id)}
            style={{ fontFamily: D.text, fontSize: '14px', fontWeight: 500, color: D.fog, cursor: 'pointer', letterSpacing: '0.025em', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = D.ash)}
            onMouseLeave={e => (e.currentTarget.style.color = D.fog)}
          >{l.name}</span>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {/* Ghost sign in */}
        <button
          onClick={onGetStarted}
          style={{ background: D.obsidian, border: `1px solid ${D.basalt}`, color: D.ash, padding: '6px 14px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: D.text, letterSpacing: '0.025em', boxShadow: 'rgba(255,255,255,0.06) 0px 1px 0px 0px inset' }}
        >
          Sign in
        </button>
        {/* Green CTA */}
        <button
          onClick={onGetStarted}
          style={{ background: D.green, border: `1px solid ${D.ledGreen}`, color: D.carbon, padding: '6px 14px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: D.text, letterSpacing: '0.025em' }}
        >
          Get started
        </button>
      </div>
    </nav>
  );
}
