import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { companyData } from '../data/companyData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Top Banner with SAIMO membership and direct status */}
      <div className="navbar-top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="badge-saimo">
              <ShieldCheck size={14} className="badge-icon" />
              Asociado a SAIMO • Sociedad Argentina de Investigadores de Marketing y Opinión
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

          {/* Action Button */}
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
          </div>
        </div>
      </nav>
    </header>
  );
}
