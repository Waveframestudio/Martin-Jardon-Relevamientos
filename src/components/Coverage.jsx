import React, { useState } from 'react';
import { MapPin, Globe, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import './Coverage.css';

export default function Coverage() {
  const { coverage } = companyData;
  const [showAllCities, setShowAllCities] = useState(false);

  return (
    <section id="cobertura" className="coverage-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-kicker">Despliegue Territorial</span>
          <h2 className="section-title heading-display">
            Cobertura a Nivel <span className="text-gradient">Nacional e Internacional</span>
          </h2>
          <p className="section-lead">
            Disponemos de equipos propios allí donde usted nos necesite. Operatividad inmediata en toda la República Argentina y plazas clave de Latinoamérica.
          </p>
        </div>

        {/* Stats Row */}
        <div className="coverage-stats-row">
          {coverage.highlights.map((h, i) => (
            <div key={i} className="cov-stat-card glass-panel">
              <span className="stat-number text-gradient-cyan">{h.number}</span>
              <span className="stat-label">{h.label}</span>
            </div>
          ))}
        </div>

        {/* Two Columns: Argentina & Latam */}
        <div className="coverage-grid">
          {/* Argentina Block */}
          <div className="coverage-card glass-panel">
            <div className="card-top-header">
              <div className="card-header-icon-box">
                <MapPin size={24} />
              </div>
              <div>
                <span className="cov-card-kicker">Red Federal</span>
                <h3 className="cov-card-title">Argentina • Cobertura Nacional</h3>
              </div>
            </div>

            <p className="cov-card-desc">
              Presencia en las principales cabeceras del país, centros urbanos, corredores comerciales y puntos de venta estratégicos.
            </p>

            <div className={`cities-tag-cloud ${showAllCities ? 'is-expanded' : 'is-collapsed'}`}>
              {coverage.argentina.map((city, idx) => (
                <div key={idx} className="city-pill">
                  <span className="city-dot"></span>
                  <span>{city}</span>
                </div>
              ))}
            </div>

            <button 
              className="btn-toggle-cities"
              onClick={() => setShowAllCities(!showAllCities)}
            >
              <span>{showAllCities ? 'Mostrar menos plazas' : `Ver las ${coverage.argentina.length} plazas cubiertas`}</span>
            </button>

            <div className="coverage-card-bottom">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>Capacidad de extensión inmediata a localidades del interior y zonas rurales.</span>
            </div>
          </div>

          {/* Latam Block */}
          <div className="coverage-card glass-panel">
            <div className="card-top-header">
              <div className="card-header-icon-box bg-indigo-icon">
                <Globe size={24} />
              </div>
              <div>
                <span className="cov-card-kicker">Expansión Regional</span>
                <h3 className="cov-card-title">Latinoamérica • Equipos Propios</h3>
              </div>
            </div>

            <p className="cov-card-desc">
              Coordinación y relevamiento de campo estandarizado para marcas regionales con presencia en múltiples países.
            </p>

            <div className="latam-countries-grid">
              {coverage.latam.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`latam-country-box ${item.activeService ? 'latam-country-featured' : ''}`}
                >
                  <div className="latam-country-main-row">
                    <span className="country-code-badge">{item.code}</span>
                    <span className="country-name">{item.country}</span>
                    {item.activeService && (
                      <span className="country-active-tag">Operación Activa</span>
                    )}
                  </div>
                  {item.activeService && (
                    <div className="country-details-box">
                      <span className="country-service-title">{item.activeService}</span>
                      <p className="country-service-desc">{item.reportInfo}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="latam-cta-box">
              <p>¿Precisa auditar puntos de venta en otra plaza de la región?</p>
              <a 
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="latam-cta-link"
              >
                <span>Consultar factibilidad logística</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
