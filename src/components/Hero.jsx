import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, Database, Globe2, ShieldCheck, CheckCircle2, ChevronRight, Activity, Radio } from 'lucide-react';
import { companyData } from '../data/companyData';
import './Hero.css';

export default function Hero() {
  const liveFeeds = [
    {
      badge: 'Mystery Shopper',
      badgeClass: 'bg-cyan',
      name: 'Auditoría en Carrefour San Martín',
      status: 'En curso',
      statusClass: 'status-ok',
      time: 'hace 2 min'
    },
    {
      badge: 'Precios & Góndola',
      badgeClass: 'bg-emerald',
      name: 'Alerta Quiebre Stock: Cuidado Bebé',
      status: 'Instantáneo',
      statusClass: 'status-alert',
      time: 'hace 5 min'
    },
    {
      badge: 'App Móvil EAN',
      badgeClass: 'bg-indigo',
      name: 'Planograma auditado: 12 SKUs validados',
      status: 'En vivo',
      statusClass: 'status-ok',
      time: 'hace 1 min'
    },
    {
      badge: 'Relevamiento Federal',
      badgeClass: 'bg-amber',
      name: 'Plaza Córdoba & Rosario sincronizadas',
      status: 'Completado',
      statusClass: 'status-ok',
      time: 'hace 8 min'
    }
  ];

  const [activeFeedIndex, setActiveFeedIndex] = useState(0);

  // Cycle feeds dynamically for an ultra-alive executive dashboard feel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeedIndex((prev) => (prev + 1) % liveFeeds.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [liveFeeds.length]);

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Cyber Light Beams & Particle Grid */}
      <div className="hero-cyber-beam hero-beam-1"></div>
      <div className="hero-cyber-beam hero-beam-2"></div>
      <div className="hero-glow-blob hero-glow-1"></div>
      <div className="hero-glow-blob hero-glow-2"></div>

      {/* Floating Ambient Live Radar Particles */}
      <div className="hero-particle-constellation" aria-hidden="true">
        <span className="p-particle p-1"></span>
        <span className="p-particle p-2"></span>
        <span className="p-particle p-3"></span>
        <span className="p-particle p-4"></span>
      </div>

      <div className="container hero-container">
        {/* Main Content */}
        <div className="hero-content reveal-from-left is-revealed">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">Organización de Relevamientos & Auditoría de Campo</span>
          </div>

          <h1 className="hero-title heading-display">
            La Información por Especialistas. <span className="hero-title-break"><br /></span>
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
        <div className="hero-visual reveal-from-right is-revealed reveal-delay-2">
          <div className="hero-card-main glass-panel interactive-shimmer">
            <div className="card-header-bar">
              <div className="status-indicators">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="card-status-tag">
                <span className="live-dot pulse-animation"></span>
                <span className="live-tag-text">Relevamientos en Directo</span>
                <Radio size={13} className="text-cyan radio-icon-live" />
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

              {/* Dynamic Live Activity Feed */}
              <div className="dashboard-feed">
                <div className="feed-title">
                  <div className="feed-title-left">
                    <Activity size={14} className="text-cyan" />
                    <span>Módulos de Auditoría Activos</span>
                  </div>
                  <span className="feed-count-badge">4 activos</span>
                </div>
                
                <div className="feed-items-stream">
                  {liveFeeds.map((feed, idx) => {
                    const isCurrent = idx === activeFeedIndex;
                    return (
                      <div 
                        key={idx} 
                        className={`feed-item ${isCurrent ? 'is-active-feed' : ''}`}
                      >
                        <div className="feed-item-left">
                          <span className={`feed-badge ${feed.badgeClass}`}>{feed.badge}</span>
                          <span className="feed-name">{feed.name}</span>
                        </div>
                        <div className="feed-item-right">
                          <span className={`feed-status ${feed.statusClass}`}>{feed.status}</span>
                        </div>
                      </div>
                    );
                  })}
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
