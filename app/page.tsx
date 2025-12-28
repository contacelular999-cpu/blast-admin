'use client';

import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [logged, setLogged] = useState(false);

  if (logged) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#020617',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1>✅ Bem-vindo ao BLAST</h1>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f172a, #000)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    }}>
      <div style={{
        width: 320,
        background: '#020617',
        padding: 24,
        borderRadius: 20
      }}>
        <h1 style={{ textAlign: 'center' }}>🚀 BLAST</h1>
        <p style={{ textAlign: 'center', opacity: 0.7 }}>
          Entre para continuar
        </p>

        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: 12,
            marginTop: 16,
            borderRadius: 10,
            border: 'none'
          }}
        />

        <button
          onClick={() => setLogged(true)}
          style={{
            width: '100%',
            padding: 12,
            marginTop: 16,
            borderRadius: 10,
            border: 'none',
            background: '#7c3aed',
            color: '#fff',
            fontWeight: 'bold'
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
