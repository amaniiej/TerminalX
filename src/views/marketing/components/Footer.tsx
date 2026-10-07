// src/views/marketing/components/Footer.tsx
import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Vault'] },
    { title: 'Company', links: ['About Us', 'Contact', 'Compliance', 'Security'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ];

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1e1e1e', padding: '64px 40px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <ShieldCheck size={16} color="#6798ff" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.17px' }}>TerminalX</span>
            </div>
            <p style={{ fontSize: '14px', color: '#7c7c7c', lineHeight: 1.5, letterSpacing: '-0.17px', margin: 0, maxWidth: '240px' }}>
              Building the financial backbone for the modern Ethiopian enterprise. Secure, compliant, and lightning-fast.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a7a7a7', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '16px' }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(l => (
                  <span key={l} style={{ fontSize: '14px', color: '#7c7c7c', cursor: 'pointer', letterSpacing: '-0.17px', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#7c7c7c')}
                  >{l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#454545', letterSpacing: '0.85px' }}>
            © {year} TERMINALX — ADDIS ABABA, ETHIOPIA
          </span>
        </div>
      </div>
    </footer>
  );
}
