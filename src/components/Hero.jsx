import React from 'react';
import { ArrowRight, BarChart3, Database, Globe2, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background Graphic Elements */}
      <div className="hero-glow-blob hero-glow-1"></div>
      <div className="hero-glow-blob hero-glow-2"></div>

      <div className="container hero-container">
        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">Organización de Relevamientos & Auditoría de Campo</span>
          </div>

          <h1 className="hero-title heading-display">
            La Información por Especialistas. <br />
            <span className="text-gradient">Su Socio Estratégico en el Punto de Venta.</span>
          </h1>

          <p className="hero-subtitle">
            Auditorías de campo, Mystery Shopper y control de precios y góndola en tiempo real en Argentina y Latinoamérica con supervisión directa y a través de aplicación de lectura de códigos de barra, de{' '}
            <button 
              type="button"
              className="hero-app-link" 
              onClick={() => {
                const event = new CustomEvent('open-app-demo-modal');
                window.dispatchEvent(event);
              }}
              title="Ver demostración de pantallas de la app de lectura de código de barras"
            >
              desarrollo propio
            </button>:
          </p>

          <div className="hero-actions">
            <a 
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              <span>Solicitar Cotización Inmediata</span>
              <ArrowRight size={18} />
            </a>
            <a href="#servicios" className="btn-hero-secondary">
              <span>Explorar Servicios</span>
              <ChevronRight size={18} />
            </a>
          </div>

          {/* Quick Value Props */}
          <div className="hero-value-props">
            <div className="value-item">
              <CheckCircle2 size={18} className="val-icon" />
              <span>Supervisión On-Line & Tiempo Real</span>
            </div>
            <div className="value-item">
              <CheckCircle2 size={18} className="val-icon" />
              <span>Reducción de Costos Operativos</span>
            </div>
            <div className="value-item">
              <CheckCircle2 size={18} className="val-icon" />
              <span>Entrega en Tablas Dinámicas & BI</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visual Dashboard Card */}
        <div className="hero-visual">
          <div className="hero-card-main glass-panel">
            <div className="card-header-bar">
              <div className="status-indicators">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="card-status-tag">
                <span className="live-dot"></span> Relevamientos en Directo
              </div>
            </div>

            <div className="card-body-content">
              <div className="kpi-grid">
                <div className="kpi-box">
                  <div className="kpi-icon-wrap">
                    <BarChart3 size={20} />
                  </div>
                  <div className="kpi-data">
                    <span className="kpi-num">+20 Plazas</span>
                    <span className="kpi-label">Cobertura Nacional Federal</span>
                  </div>
                </div>

                <div className="kpi-box">
                  <div className="kpi-icon-wrap">
                    <Globe2 size={20} />
                  </div>
                  <div className="kpi-data">
                    <span className="kpi-num">11 Países</span>
                    <span className="kpi-label">Operaciones en Latinoamérica</span>
                  </div>
                </div>
              </div>

              {/* Mock Dashboard Feed */}
              <div className="dashboard-feed">
                <div className="feed-title">
                  <span>Módulos de Auditoría Activos</span>
                  <Database size={15} className="text-dim" />
                </div>
                
                <div className="feed-item">
                  <div className="feed-item-left">
                    <span className="feed-badge bg-cyan">Mystery Shopper</span>
                    <span className="feed-name">Control de Experiencia & Protocolos</span>
                  </div>
                  <span className="feed-status status-ok">En curso</span>
                </div>

                <div className="feed-item">
                  <div className="feed-item-left">
                    <span className="feed-badge bg-emerald">Precios & Góndola</span>
                    <span className="feed-name">Alertas de Quiebre de Stock</span>
                  </div>
                  <span className="feed-status status-alert">Instantáneo</span>
                </div>

                <div className="feed-item">
                  <div className="feed-item-left">
                    <span className="feed-badge bg-indigo">App Móvil EAN</span>
                    <span className="feed-name">Lectura de Códigos & Planogramas</span>
                  </div>
                  <span className="feed-status status-ok">En vivo</span>
                </div>
              </div>

              {/* Endorsement Footnote */}
              <div className="card-endorsement">
                <ShieldCheck size={20} className="endorsement-icon" />
                <div>
                  <strong>Estándares Normativos de Alta Calidad</strong>
                  <p>Metodología y rigor profesional en captura de datos de campo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
