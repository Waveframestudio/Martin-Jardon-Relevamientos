import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyData';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <a 
      href={companyData.contact.whatsappLink}
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-wa-btn"
      aria-label="Contactar por WhatsApp directamente con Martín Jardón"
    >
      <div className="wa-icon-box">
        <MessageSquare size={20} />
      </div>
      <span className="wa-btn-tooltip">¿Consultar relevamiento?</span>
    </a>
  );
}
