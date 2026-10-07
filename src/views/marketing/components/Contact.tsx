// src/views/marketing/components/Contact.tsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { supabase } from '../../../services/supabase';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState('error');
      setErrorMsg('Please fill in all fields');
      return;
    }
    setFormState('loading');
    setErrorMsg('');
    try {
      if (!supabase) throw new Error('Service unavailable. Please try again later.');
      const { error } = await supabase.from('contact_submissions').insert([
        { name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim() },
      ]);
      if (error) throw new Error(error.message);
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setFormState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px', fontWeight: 400, color: '#a7a7a7',
    letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '8px', display: 'block',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid #313131', padding: '10px 0',
    color: '#ffffff', fontSize: '14px', outline: 'none',
    transition: 'border-color 0.2s', letterSpacing: '-0.17px',
    boxSizing: 'border-box',
  };

  const infoItems = [
    { icon: Mail, label: 'Email Us', value: 'support@terminalx.et' },
    { icon: Phone, label: 'Call Direct', value: '+251 911 00 00 00' },
    { icon: MapPin, label: 'Headquarters', value: 'Bole, Addis Ababa, Ethiopia' },
  ];

  return (
    <section style={{ background: '#141414', padding: '96px 40px', borderTop: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#a7a7a7', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Direct Line
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, letterSpacing: '-0.84px', margin: 0 }}>
            Let's talk <span style={{ color: '#6798ff' }}>Business.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '96px' }}>
          {/* Left: info */}
          <div>
            <p style={{ fontSize: '16px', color: '#a7a7a7', lineHeight: 1.5, letterSpacing: '-0.19px', marginBottom: '48px', margin: '0 0 48px 0' }}>
              Have a specific requirement for your branch? Or need a custom enterprise integration? Our team is ready to scale with you.
            </p>
            {infoItems.map(({ icon: Icon, label, value }) => (
              <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '28px' }}>
                <div style={{ width: '36px', height: '36px', background: '#1e1e1e', border: '1px solid #313131', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} color="#6798ff" />
                </div>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#7c7c7c', letterSpacing: '0.85px', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.17px' }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div>
            {formState === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', padding: '40px', background: '#1e1e1e', border: '1px solid #313131', borderRadius: '8px' }}>
                <CheckCircle size={32} color="#6798ff" />
                <div style={{ fontSize: '20px', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.42px' }}>Message Sent!</div>
                <p style={{ fontSize: '14px', color: '#a7a7a7', letterSpacing: '-0.17px', margin: 0 }}>We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setFormState('idle')}
                  style={{ background: 'transparent', border: '1px solid #454545', color: '#ffffff', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 500, letterSpacing: '-0.17px', marginTop: '8px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} style={inputStyle} placeholder="full name"
                      onFocus={e => e.target.style.borderBottomColor = '#6798ff'}
                      onBlur={e => e.target.style.borderBottomColor = '#313131'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="example@gmail.com"
                      onFocus={e => e.target.style.borderBottomColor = '#6798ff'}
                      onBlur={e => e.target.style.borderBottomColor = '#313131'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    style={{ ...inputStyle, minHeight: '100px', resize: 'none' }}
                    placeholder="How can we help your business scale?"
                    onFocus={e => e.target.style.borderBottomColor = '#6798ff'}
                    onBlur={e => e.target.style.borderBottomColor = '#313131'}
                  />
                </div>

                {formState === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontSize: '13px', marginBottom: '16px', padding: '10px 14px', background: 'rgba(248,113,113,0.06)', borderRadius: '8px', border: '1px solid rgba(248,113,113,0.15)' }}>
                    <AlertCircle size={14} />
                    {errorMsg || 'Something went wrong. Please try again.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  style={{
                    background: '#ffffff', color: '#0a0a0a', border: 'none',
                    padding: '10px 20px', borderRadius: '8px', fontWeight: 500,
                    fontSize: '14px', cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    opacity: formState === 'loading' ? 0.6 : 1, letterSpacing: '-0.17px',
                  }}
                >
                  {formState === 'loading' ? (
                    <><Loader size={14} className="spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
