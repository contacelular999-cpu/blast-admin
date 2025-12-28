"use client";

import { useState } from "react";

export default function ComunidadesPage() {
  const [ativo, setAtivo] = useState(false);

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Comunidade BLAST 💎</h1>

      <div style={styles.card}>
        <h2>Plano Diamante</h2>
        <p>Acesso completo à comunidade</p>
        <p><strong>💎 1 Diamante / mês</strong></p>

        {ativo ? (
          <p style={{ color: "#22c55e" }}>✅ Assinatura ativa</p>
        ) : (
          <button style={styles.button} onClick={() => setAtivo(true)}>
            Assinar Comunidade
          </button>
        )}
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    background: "#0b1020",
    color: "#fff",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: "20px",
  },
  card: {
    background: "#111827",
    padding: "24px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center" as const,
  },
  button: {
    marginTop: "16px",
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "none",
    background: "#7c3aed",
    color: "#fff",
    cursor: "pointer",
  },
};
