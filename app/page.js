"use client";
import React, { useState } from 'react';
import { Shield, Film, Zap, UserCheck, BarChart, Globe, Cpu, Video } from 'lucide-react';

export default function EonQualitiesStudio() {
  const qualities = [
    { name: "16K VIDEO GEN", icon: <Video size={18}/>, status: "ULTRA-HD" },
    { name: "HUMAN CONSISTENCY", icon: <UserCheck size={18}/>, status: "LOCKED" },
    { name: "AI CINEMATOGRAPHY", icon: <Film size={18}/>, status: "ACTIVE" },
    { name: "ETHOS LLM", icon: <Cpu size={18}/>, status: "SOVEREIGN" },
    { name: "MARKETING AUTO", icon: <BarChart size={18}/>, status: "SYNCED" }
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', padding: '40px' }}>
      <header style={{ borderBottom: '1px solid #111', paddingBottom: '20px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Shield color="#d4af37" size={30} />
          <h1 style={{ letterSpacing: '10px', fontSize: '1.5rem', fontWeight: '900' }}>EON SUPREME</h1>
        </div>
        <div style={{ color: '#d4af37', fontSize: '0.7rem', letterSpacing: '3px' }}>HOLLYWOOD STANDARD V25.0</div>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {qualities.map((q, i) => (
          <div key={i} style={{ background: '#050505', border: '1px solid #111', padding: '25px', borderRadius: '15px' }}>
            <div style={{ color: '#d4af37', marginBottom: '15px' }}>{q.icon}</div>
            <h3 style={{ fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '5px' }}>{q.name}</h3>
            <p style={{ fontSize: '0.6rem', color: '#00ff00', fontWeight: 'bold' }}>● {q.status}</p>
          </div>
        ))}
      </main>

      <footer style={{ marginTop: '50px', textAlign: 'center', opacity: 0.3 }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '5px' }}>INDEPENDENT AI STUDIO | NO EXTERNAL LINKS</p>
      </footer>
    </div>
  );
}
