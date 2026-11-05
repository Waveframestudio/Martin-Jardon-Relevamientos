import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  Home, 
  Users2, 
  Layers, 
  Globe2, 
  Award, 
  Send, 
  MessageSquare, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { companyData } from '../data/companyData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#hero', subtitle: 'Portada ejecutiva', icon: Home },
    { name: 'Nosotros', href: '#nosotros', subtitle: 'Metodología y pilares', icon: Users2 },
    { name: 'Servicios', href: '#servicios', subtitle: 'Auditoría & Mystery Shopper', icon: Layers },
    { name: 'Cobertura', href: '#cobertura', subtitle: 'Argentina & Latinoamérica', icon: Globe2 },
    { name: 'Clientes', href: '#clientes', subtitle: 'Casos y sellos SAIMO', icon: Award },
    { name: 'Contacto', href: '#contacto', subtitle: 'Cotización en 24h', icon: Send }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>

      {/* Top Banner with direct status and coverage */}
      <div className="navbar-top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="badge-audit-quality">
              <ShieldCheck size={14} className="badge-icon" />
              Estándares Normativos de Alta Calidad • Supervisión Directa
            </span>
          </div>
          <div className="top-bar-right">
            <a href={`tel:${companyData.contact.phoneRaw}`} className="top-contact-link">
              <Phone size={13} />
              <span>{companyData.contact.phoneFormatted}</span>
            </a>
            <span className="divider-dot">•</span>
            <span className="top-coverage-tag">
              <MapPin size={13} />
              Argentina & Latinoamérica
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar-main">
        <div className="container navbar-container">
          <a href="#hero" className="brand-logo" aria-label="Martín Jardón Inicio">
            <div className="brand-icon-wrap">
              <img 
                src="/logo-remastered.webp" 
                alt="Martín Jardón Logo" 
                className="brand-svg-icon" 
                width="40" 
                height="40" 
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">{companyData.name}</span>
              <span className="brand-sub">{companyData.subtitle}</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="nav-desktop-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="nav-actions">
            <a 
              href={companyData.contact.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-quote"
            >
              <span>Solicitar Relevamiento</span>
              <ArrowUpRight size={16} />
            </a>

            <button 
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="top-cyber-scanline"></div>
        </div>
      </nav>

    </header>

    {/* Premium Mobile Drawer Menu */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div 
          className="mobile-menu-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Ambient Glows inside Drawer */}
          <div className="drawer-glow-top"></div>
          <div className="drawer-glow-bottom"></div>

          {/* Drawer Top Header with Brand */}
          <div className="mobile-menu-header">
            <div className="drawer-brand-row">
              <div className="drawer-brand-icon">
                <img 
                  src="/logo-remastered.webp" 
                  alt="Martín Jardón Logo" 
                  width="36" 
                  height="36" 
                  loading="eager"
                />
              </div>
              <div className="brand-text">
                <span className="brand-name">{companyData.name}</span>
                <span className="brand-sub">{companyData.subtitle}</span>
              </div>
            </div>
            <button 
              type="button"
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>

          {/* Live Status Pill in Drawer */}
          <div className="drawer-status-pill">
            <span className="drawer-live-dot"></span>
            <span className="drawer-status-text">Operaciones activas en tiempo real</span>
          </div>

          {/* Navigation Links with Icons & Subtitles */}
          <div className="mobile-menu-links">
            {navLinks.map((link, idx) => {
              const IconComp = link.icon;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={handleLinkClick}
                  style={{ animationDelay: `${0.06 * idx}s` }}
                >
                  <div className="mobile-link-left">
                    <div className="mobile-link-icon-box">
                      <IconComp size={18} />
                    </div>
                    <div className="mobile-link-texts">
                      <span className="mobile-link-title">{link.name}</span>
                      <span className="mobile-link-sub">{link.subtitle}</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="mobile-nav-arrow" />
                </a>
              );
            })}
          </div>

          {/* Drawer Footer with High-Impact WhatsApp CTA and Contact */}
          <div className="mobile-menu-footer">
            <a 
              href={companyData.contact.whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-drawer-cta"
              onClick={handleLinkClick}
            >
              <div className="drawer-cta-content">
                <div className="drawer-cta-icon-wrap">
                  <MessageSquare size={18} />
                </div>
                <div className="drawer-cta-texts">
                  <span className="drawer-cta-title">Cotizar por WhatsApp</span>
                  <span className="drawer-cta-sub">Respuesta inmediata directa</span>
                </div>
              </div>
              <ArrowUpRight size={17} className="drawer-cta-arrow" />
            </a>

            <div className="drawer-meta-row">
              <a href={`tel:${companyData.contact.phoneRaw}`} className="drawer-meta-item">
                <Phone size={13} className="text-cyan" />
                <span>{companyData.contact.phoneFormatted}</span>
              </a>
              <span className="drawer-meta-divider">•</span>
              <span className="drawer-meta-item">
                <MapPin size={13} className="text-cyan" />
                <span>AR & Latam</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
