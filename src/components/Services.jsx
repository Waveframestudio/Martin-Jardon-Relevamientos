import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  Tag, 
  CalendarCheck, 
  Binoculars, 
  Sparkles, 
  Megaphone, 
  LayoutGrid, 
  ClockAlert, 
  Store, 
  ShieldAlert, 
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Sparkle
} from 'lucide-react';
import { companyData } from '../data/companyData';
import './Services.css';

export default function Services() {
  const [expandedServiceId, setExpandedServiceId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    const handleSelectService = (e) => {
      const targetId = e.detail;
      const found = companyData.services.find(s => s.id === targetId || s.title.toLowerCase().includes(targetId.toLowerCase()));
      if (found) {
        setExpandedServiceId(found.id);
        const el = document.getElementById(`service-card-${found.id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    window.addEventListener('select-service', handleSelectService);
    return () => window.removeEventListener('select-service', handleSelectService);
  }, []);

  const categories = ['Todos', 'Punto de Venta', 'Trade Marketing', 'Experiencia & Servicio', 'Operaciones'];

  // Map icons to service IDs
  const getServiceIcon = (id) => {
    switch (id) {
      case 'mystery-shopper': return <UserCheck size={22} />;
      case 'precios-presencia': return <Tag size={22} />;
      case 'relevamientos-sistematicos': return <CalendarCheck size={22} />;
      case 'observacion-simple': return <Binoculars size={22} />;
      case 'one-shot': return <Sparkles size={22} />;
      case 'promociones-pop': return <Megaphone size={22} />;
      case 'facing-gondola': return <LayoutGrid size={22} />;
      case 'rotacion-vencimientos': return <ClockAlert size={22} />;
      case 'exhibiciones-stands': return <Store size={22} />;
      case 'procesos-atencion': return <ShieldAlert size={22} />;
      case 'distribucion-folders': return <FileSpreadsheet size={22} />;
      default: return <UserCheck size={22} />;
    }
  };

  const filteredServices = activeCategory === 'Todos' 
    ? companyData.services 
    : companyData.services.filter(s => s.category === activeCategory || (activeCategory === 'Operaciones' && (s.category === 'Operaciones' || s.category === 'Investigación')));

  const toggleExpand = (id) => {
    setExpandedServiceId(prev => prev === id ? null : id);
  };

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-kicker">Catálogo Desplegable</span>
          <h2 className="section-title heading-display">
            Servicios de Relevamiento <span className="text-gradient">Especializados</span>
          </h2>
          <p className="section-lead">
            Metodología rigurosa y reportería ágil. Toque cualquier servicio para ver su ficha técnica y cotizar de inmediato.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Accordion List */}
        <div className="services-accordion-list">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div 
                key={service.id} 
                id={`service-card-${service.id}`}
                className={`service-accordion-card glass-panel ${isExpanded ? 'is-expanded' : ''}`}
              >
                {/* Header Row - Always Visible & Clickable */}
                <div 
                  className="accordion-header"
                  onClick={() => toggleExpand(service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(service.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="accordion-header-left">
                    <div className="service-icon-box">
                      {getServiceIcon(service.id)}
                    </div>
                    <div className="accordion-title-wrap">
                      <div className="accordion-badges">
                        <span className="service-badge">{service.badge}</span>
                        <span className="category-mini-badge">{service.category}</span>
                      </div>
                      <h3 className="accordion-card-title">{service.title}</h3>
                    </div>
                  </div>

                  <div className="accordion-header-right">
                    <span className="accordion-action-hint">
                      {isExpanded ? 'Cerrar' : 'Ver ficha'}
                    </span>
                    <div className="accordion-chevron">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Content Body */}
                {isExpanded && (
                  <div className="accordion-body">
                    <p className="accordion-full-desc">{service.fullDesc}</p>

                    <div className="accordion-benefits-box">
                      <div className="benefits-header">
                        <Sparkle size={15} className="text-cyan" />
                        <span>Aportes y Beneficios Clave</span>
                      </div>
                      <div className="benefits-grid">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="benefit-item">
                            <CheckCircle2 size={16} className="text-cyan" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="accordion-footer">
                      <a 
                        href={`https://wa.me/54911558408320?text=Hola%20Mart%C3%ADn,%20quisiera%20cotizar%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-quote accordion-wa-btn"
                      >
                        <MessageSquare size={16} />
                        <span>Cotizar {service.title} por WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
