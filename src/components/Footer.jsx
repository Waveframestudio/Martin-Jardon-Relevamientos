import React from 'react';
import { ArrowUp, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { companyData } from '../data/companyData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-logo footer-logo">
              <div className="brand-icon-wrap">
                <img 
                  src="/logo-remastered.webp" 
                  alt="Martín Jardón Logo" 
                  className="brand-svg-icon" 
                  width="40" 
                  height="40" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="brand-text">
                <span className="brand-name">{companyData.name}</span>
                <span className="brand-sub">{companyData.subtitle}</span>
              </div>
            </div>
            <p className="footer-brand-motto">
              "{companyData.tagline}"
            </p>
            <p className="footer-brand-desc">
              Organización de relevamientos, cliente incógnito, monitoreo de precios y auditorías sistemáticas en puntos de venta con cobertura federal y en Latinoamérica.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#nosotros">Nosotros & Filosofía</a></li>
              <li><a href="#servicios">Servicios Especializados</a></li>
              <li><a href="#cobertura">Cobertura Geográfica</a></li>
              <li><a href="#clientes">Clientes & Respaldo</a></li>
              <li><a href="#contacto">Contacto & Cotizaciones</a></li>
            </ul>
          </div>

          {/* Top Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Servicios Principales</h4>
            <ul className="footer-links">
              <li><a href="#servicios" onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: 'mystery-shopper' }))}>Mystery Shopper</a></li>
              <li><a href="#servicios" onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: 'precios-presencia' }))}>Precios & Quiebres de Stock</a></li>
              <li><a href="#servicios" onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: 'relevamientos-sistematicos' }))}>Relevamientos Sistemáticos</a></li>
              <li><a href="#servicios" onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: 'promociones-pop' }))}>Material POP & Promociones</a></li>
              <li><a href="#servicios" onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: 'facing-gondola' }))}>Facing & Share of Shelf</a></li>
              <li><a href="#servicios" onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: 'rotacion-vencimientos' }))}>Rotación & Vencimientos</a></li>
            </ul>
          </div>

          {/* Institutional SAIMO info */}
          <div className="footer-col footer-col-institution">
            <h4 className="footer-col-title">Acreditación Institucional</h4>
            <div className="saimo-footer-box">
              <ShieldCheck size={28} className="text-cyan" />
              <div>
                <strong>Miembro Asociado SAIMO</strong>
                <p>Sociedad Argentina de Investigadores de Marketing y Opinión</p>
              </div>
            </div>
            <div className="footer-data-fiscal">
              <span className="fiscal-tag">AFIP • Data Fiscal Conforme</span>
              <span className="fiscal-period">2014 - 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} Martín Jardón - Organización de Relevamientos. Todos los derechos reservados.
          </div>

          <div className="footer-developer">
            <span className="dev-lead">Desarrollado por</span>
            <a 
              href="https://waveframe.com.ar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="developer-pill"
              title="Visitar WaveFrame Studio"
            >
              <span className="developer-name">WaveFrame Studio</span>
              <div className="waveframe-3d-wrapper">
                <model-viewer
                  src="/3D/waveframelogo3dmodel.glb"
                  alt="WaveFrame Studio 3D Logo"
                  loading="lazy"
                  reveal="auto"
                  auto-rotate
                  rotation-per-second="45deg"
                  interaction-prompt="none"
                  disable-zoom
                  disable-pan
                  camera-controls="false"
                  shadow-intensity="0"
                  style={{ width: '32px', height: '32px', pointerEvents: 'none', background: 'transparent' }}
                />
              </div>
            </a>
          </div>

          <button 
            className="btn-back-to-top" 
            onClick={scrollToTop}
            aria-label="Volver al inicio"
          >
            <span>Subir</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
