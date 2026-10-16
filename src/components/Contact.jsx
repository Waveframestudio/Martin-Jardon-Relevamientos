import React from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { companyData } from '../data/companyData';
import './Contact.css';

export default function Contact() {
  const { contact } = companyData;

  const quickFeatures = [
    "Atención inmediata personalizada con Martín Jardón",
    "Cotización ágil sin formularios extensos ni demoras",
    "Presupuestos a medida según plaza geográfica y frecuencia",
    "Confidencialidad absoluta bajo código ético de SAIMO"
  ];

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-kicker">Contacto Directo</span>
          <h2 className="section-title heading-display">
            Inicie su Consulta <span className="text-gradient">de inmediato</span>
          </h2>
          <p className="section-lead">
            Conéctese de forma directa con nosotros para coordinar su relevamiento en minutos.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Main Direct WhatsApp Hero Card */}
          <div className="contact-main-card glass-panel">
            <div className="main-card-badge">
              <Zap size={14} />
              <span>Canal Prioritario & Respuesta Inmediata</span>
            </div>

            <h3 className="main-card-title">
              ¿Precisa auditar un punto de venta o solicitar cotización?
            </h3>
            
            <p className="main-card-desc">
              Presione el botón debajo para abrir una conversación directa en WhatsApp con nuestro director ejecutivo. Responderemos al instante con factibilidad operativa y plazos.
            </p>

            <a 
              href={contact.whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp-direct"
              aria-label="Abrir WhatsApp para contactar con Martín Jardón"
            >
              <div className="btn-wa-icon-wrap">
                <MessageSquare size={24} />
              </div>
              <div className="btn-wa-text-wrap">
                <span className="btn-wa-title">Contactar por WhatsApp</span>
                <span className="btn-wa-sub">Respuesta inmediata</span>
                <span className="btn-wa-phone">+54 9 11 5584 0832</span>
              </div>
              <ArrowRight size={20} className="btn-wa-arrow" />
            </a>

            <div className="quick-features-list">
              {quickFeatures.map((feat, idx) => (
                <div key={idx} className="quick-feat-item">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Channels Column */}
          <div className="contact-secondary-panel glass-panel">
            <h4 className="secondary-panel-title">Otros Canales de Contacto</h4>
            <p className="secondary-panel-desc">
              Canales corporativos y acreditación profesional para pliegos y solicitudes formales.
            </p>

            <div className="contact-cards-list">
              {/* Phone card */}
              <a href={`tel:${contact.phoneRaw}`} className="contact-touchpoint">
                <div className="touchpoint-icon">
                  <Phone size={20} />
                </div>
                <div className="touchpoint-data">
                  <span className="tp-label">Llamada Telefónica Directa</span>
                  <span className="tp-val">{contact.phoneFormatted}</span>
                  <span className="tp-sub">Lunes a Viernes de 9 a 18 hs</span>
                </div>
              </a>

              {/* Email card */}
              <a href={`mailto:${contact.email}`} className="contact-touchpoint">
                <div className="touchpoint-icon">
                  <Mail size={20} />
                </div>
                <div className="touchpoint-data">
                  <span className="tp-label">Correo Electrónico Corporativo</span>
                  <span className="tp-val">{contact.email}</span>
                  <span className="tp-sub">Envío de pliegos y presentaciones</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href={contact.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-touchpoint"
              >
                <div className="touchpoint-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div className="touchpoint-data">
                  <span className="tp-label">LinkedIn Profesional</span>
                  <span className="tp-val">Martin Jardon</span>
                  <span className="tp-sub">Trayectoria ejecutiva y referencias</span>
                </div>
              </a>
            </div>

            <div className="security-notice">
              <ShieldCheck size={18} className="text-cyan" />
              <span>Garantía de confidencialidad bajo estándares SAIMO.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
