import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';
import './Clients.css';

export default function Clients() {
  const { association } = companyData;

  const clientLogos = [
    {
      name: "GfK Retail and Technology",
      src: "/clientes/GFK.webp",
      floatDelay: "0s",
      floatDuration: "4.8s"
    },
    {
      name: "Provokers Research S.A.",
      src: "/clientes/Provokers-Research-S.A..webp",
      floatDelay: "1.2s",
      floatDuration: "5.4s"
    },
    {
      name: "Delta Research & Consulting",
      src: "/clientes/Delta Research & Consulting-Photoroom.webp",
      floatDelay: "0.6s",
      floatDuration: "4.6s"
    },
    {
      name: "Inn Audit S.R.L. / iNn Information Now",
      src: "/clientes/Inn Audit S.R.L..webp",
      floatDelay: "1.8s",
      floatDuration: "5.2s"
    },
    {
      name: "Enfoque Retail",
      src: "/clientes/enfoque_retail-Photoroom.webp",
      floatDelay: "2.4s",
      floatDuration: "4.9s",
      isEnfoque: true
    }
  ];

  return (
    <section id="clientes" className="clients-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-kicker">Confianza & Respaldo</span>
          <h2 className="section-title heading-display">
            Empresas que Confían en <span className="text-gradient">Nuestro Trabajo</span>
          </h2>
          <p className="section-lead">
            Acompañamos a las principales agencias de investigación, consultoras de mercado y marcas corporativas.
          </p>
        </div>

        {/* Floating Client Logos without boxes or cards */}
        <div className="clients-logos-cloud">
          {clientLogos.map((client, idx) => (
            <div 
              key={idx} 
              className="client-logo-item"
              title={client.name}
              style={{
                animationDelay: client.floatDelay,
                animationDuration: client.floatDuration
              }}
            >
              <img 
                src={client.src} 
                alt={client.name} 
                className={`client-logo-img ${client.isEnfoque ? 'client-logo-img-enfoque' : ''}`} 
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Association & Institutional Trust Banner */}
        <div className="association-banner glass-panel">
          <div className="assoc-content">
            <div className="assoc-icon-wrap">
              <Award size={36} />
            </div>
            <div className="assoc-info">
              <span className="assoc-badge">{association.badge}</span>
              <h3 className="assoc-title">{association.name}</h3>
              <p className="assoc-desc">
                {association.fullName}. Estricto cumplimiento de los estándares éticos, de confidencialidad y rigor metodológico para la investigación de mercado en la República Argentina.
              </p>
            </div>
          </div>
          <div className="assoc-seal">
            <div className="seal-badge">
              <ShieldCheck size={28} />
              <span>DATA FISCAL VERIFICADA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
