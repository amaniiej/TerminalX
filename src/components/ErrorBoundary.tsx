// src/components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  reset = () => this.setState({ hasError: false, error: null });

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div style={{
          minHeight: '100vh', background: '#020617', display: 'flex',
          alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px'
        }}>
          <p style={{ color: '#94A3B8', fontSize: '16px' }}>Something went wrong.</p>
          <button
            onClick={this.reset}
            style={{
              background: '#2563EB', color: 'white', border: 'none',
              padding: '10px 24px', borderRadius: '10px', cursor: 'pointer', fontWeight: 700
            }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
