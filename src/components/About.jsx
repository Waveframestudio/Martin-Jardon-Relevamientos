import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Sliders, 
  Target, 
  Eye, 
  Award, 
  Quote, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('objetivo');

  const processSteps = [
    {
      step: '01',
      title: 'Relevamiento In-Situ',
      desc: 'Supervisores en terreno auditando variables críticas con geolocalización y fotos en tiempo real.'
    },
    {
      step: '02',
      title: 'Validación Metodológica',
      desc: 'Control de consistencia y protocolos bajo rigurosos estándares normativos de alta calidad.'
    },
    {
      step: '03',
      title: 'Entrega en Tablas & BI',
      desc: 'Tablas dinámicas y/o planilla Excel listos para trabajarlos a la preferencia del Cliente.'
    }
  ];

  const highlights = [
    {
      icon: <Zap size={24} />,
      title: "Información en Tiempo Real",
      desc: "Datos disponibles DURANTE o DESPUÉS del proceso para un control instantáneo del canal.",
      tag: "Velocidad Operativa",
      metric: "< 24 hs",
      metricLabel: "Disponibilidad de datos",
      accent: "cyan"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Supervisión Permanente",
      desc: "Supervisión directa y rigurosos estándares normativos de alta calidad en puntos críticos.",
      tag: "Rigor Metodológico",
      metric: "100%",
      metricLabel: "Control auditado in-situ",
      accent: "emerald"
    },
    {
      icon: <Sliders size={24} />,
      title: "Logística a Medida",
      desc: "Despliegue ágil en Argentina y Latam con optimización sustancial de costos operativos.",
      tag: "Cobertura Flexible",
      metric: "11 Países",
      metricLabel: "Equipos y operaciones",
      accent: "indigo"
    }
  ];

  const tabsContent = {
    objetivo: {
      title: "Nuestro Objetivo",
      badge: "Claridad & Precisión",
      text: "Brindar información actualizada, clara y precisa que complemente el análisis que define la toma de decisiones estratégicas en su negocio, eliminando la incertidumbre en góndola.",
      icon: <Target size={28} />
    },
    vision: {
      title: "Nuestra Visión",
      badge: "Excelencia Analítica",
      text: "Formar parte de las alternativas de análisis indispensables en toda empresa que compite por el liderazgo y la máxima eficiencia en el punto de contacto.",
      icon: <Eye size={28} />
    },
    mision: {
      title: "Nuestra Misión",
      badge: "Herramienta Decisiva",
      text: "Ser el socio de campo de referencia, aportando herramientas de diagnóstico exactas y ágiles que acompañen de forma continua la estrategia comercial.",
      icon: <Award size={28} />
    }
  };

  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="section-kicker">Trayectoria & Filosofía</span>
          <h2 className="section-title heading-display">
            Somos su <span className="text-gradient">"Socio Estratégico"</span>
          </h2>
          <div className="about-manifesto-box glass-panel">
            <p className="about-primary-quote">
              "Somos un grupo de personas con experiencia sólida en relevamiento de datos, información y Variables observables adquirida en consultoras de primera línea a través de más de 20 años, con amplios conocimientos en metodologías y técnicas de toma de datos y observación."
            </p>
          </div>
          <p className="section-lead">
            Nuestros servicios aplican al exacto requerimiento del Cliente, adaptando o diseñando la metodología a aplicar en el Campo, según sea la necesidad.
          </p>
        </div>

        {/* Visual 3 Pillars - Distinct High-Impact Architecture */}
        <div className="pillars-grid">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className={`pillar-card pillar-accent-${item.accent}`}
            >
              <div className="pillar-glass-glow"></div>
              
              <div className="pillar-card-top">
                <div className="pillar-header-badge-row">
                  <div className="pillar-icon-box">
                    {item.icon}
                  </div>
                  <span className="pillar-tag">{item.tag}</span>
                </div>
                <span className="pillar-num">0{idx + 1}</span>
              </div>

              <h3 className="pillar-title">{item.title}</h3>
              <p className="pillar-desc">{item.desc}</p>

              <div className="pillar-metric-footer">
                <span className="pillar-metric-val">{item.metric}</span>
                <span className="pillar-metric-lbl">{item.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Process Flow Diagram */}
        <div className="process-flow-banner glass-panel">
          <div className="process-flow-header">
            <div className="flow-badge">
              <Cpu size={14} />
              <span>Flujo Metodológico de Relevamiento</span>
            </div>
            <h3 className="flow-heading">Del punto de venta a su tablero de decisiones</h3>
          </div>

          <div className="process-steps-row">
            {processSteps.map((s, idx) => (
              <React.Fragment key={s.step}>
                <div className="step-card">
                  <div className="step-indicator">
                    <span className="step-num">{s.step}</span>
                  </div>
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-desc">{s.desc}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="step-connector">
                    <ArrowRight size={20} className="connector-arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Tabs for Principles */}
        <div className="principles-interactive-card glass-panel">
          <div className="interactive-tabs-bar">
            <button 
              className={`tab-btn ${activeTab === 'objetivo' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('objetivo')}
            >
              <Target size={16} />
              <span>Objetivo</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'vision' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <Eye size={16} />
              <span>Visión</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'mision' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('mision')}
            >
              <Award size={16} />
              <span>Misión</span>
            </button>
          </div>

          <div className="tab-pane-content">
            <div className="tab-pane-header">
              <div className="tab-icon-wrap">
                {tabsContent[activeTab].icon}
              </div>
              <div>
                <span className="tab-badge">{tabsContent[activeTab].badge}</span>
                <h4 className="tab-title">{tabsContent[activeTab].title}</h4>
              </div>
            </div>
            <p className="tab-text">{tabsContent[activeTab].text}</p>
            
            <div className="tab-checklist">
              <div className="check-row">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Supervisores en terreno para asegurar veracidad absoluta del dato.</span>
              </div>
              <div className="check-row">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Reportes en tablas dinámicas, Excel o bases de datos configurables.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
