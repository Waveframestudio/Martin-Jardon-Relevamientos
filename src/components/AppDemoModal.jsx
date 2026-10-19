import React, { useState, useEffect } from 'react';
import { 
  X, 
  Smartphone, 
  ScanBarcode, 
  Layers, 
  CheckCircle2, 
  FileSpreadsheet, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { companyData } from '../data/companyData';
import './AppDemoModal.css';

export default function AppDemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('scan');

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-app-demo-modal', handleOpen);
    return () => window.removeEventListener('open-app-demo-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="app-modal-overlay" onClick={() => setIsOpen(false)}>
      <div 
        className="app-modal-card glass-panel" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="app-modal-header">
          <div className="app-modal-title-group">
            <div className="app-icon-badge">
              <ScanBarcode size={24} />
            </div>
            <div>
              <div className="app-modal-kicker">
                <span>Tecnología Propietaria</span>
                <span className="badge-tag">Desarrollo Propio</span>
              </div>
              <h3 id="modal-title" className="app-modal-heading">
                Aplicación Móvil de Lectura de Códigos de Barra (EAN)
              </h3>
            </div>
          </div>
          <button 
            className="app-modal-close" 
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Subhead Info */}
        <p className="app-modal-desc">
          Herramienta ágil y personalizada de auditoría en terreno para captura instantánea de códigos EAN, auditoría de planogramas, verificación de frentes y reporte automatizado en planillas Excel estructuradas.
        </p>

        {/* Feature Highlights Pills */}
        <div className="app-features-row">
          <div className="app-feature-pill">
            <CheckCircle2 size={15} className="text-cyan" />
            <span>Escaneo EAN de Alta Velocidad</span>
          </div>
          <div className="app-feature-pill">
            <CheckCircle2 size={15} className="text-cyan" />
            <span>Control de Planogramas & Góndola</span>
          </div>
          <div className="app-feature-pill">
            <CheckCircle2 size={15} className="text-cyan" />
            <span>Exportación Directa a Excel</span>
          </div>
        </div>

        {/* Interactive Demo Viewports / Tabs */}
        <div className="app-demo-tabs-bar">
          <button 
            className={`demo-tab-btn ${activeTab === 'scan' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('scan')}
          >
            <ScanBarcode size={16} />
            <span>1. Captura & Escaneo EAN</span>
          </button>
          <button 
            className={`demo-tab-btn ${activeTab === 'planogram' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('planogram')}
          >
            <Layers size={16} />
            <span>2. Control de Góndola & Frentes</span>
          </button>
          <button 
            className={`demo-tab-btn ${activeTab === 'excel' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('excel')}
          >
            <FileSpreadsheet size={16} />
            <span>3. Matriz Excel de Salida</span>
          </button>
        </div>

        {/* Screen Showcase Container with Placeholder Ready for Client Screenshots */}
        <div className="app-screen-container">
          {activeTab === 'scan' && (
            <div className="screen-card">
              <div className="phone-mockup">
                <div className="phone-screen-header">
                  <span className="phone-time">10:42</span>
                  <div className="phone-notch"></div>
                  <span className="phone-status">4G 98%</span>
                </div>
                <div className="phone-app-ui">
                  <div className="app-scanner-frame">
                    <div className="laser-line"></div>
                    <div className="scanner-corners"></div>
                    <div className="scanner-info-badge">
                      <ScanBarcode size={28} />
                      <span>Escanear Código EAN</span>
                    </div>
                  </div>
                  <div className="scanned-result-card">
                    <div className="scan-item-row">
                      <span className="item-label">Código EAN:</span>
                      <span className="item-code">7791234567890</span>
                    </div>
                    <div className="scan-item-row">
                      <span className="item-label">Producto:</span>
                      <span className="item-val">Pañales Confort Sec G - Pack x40</span>
                    </div>
                    <div className="scan-item-row">
                      <span className="item-label">Posición:</span>
                      <span className="item-val">Góndola Central • Nivel 3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-explanation">
                <h4>Captura Instantánea en Salón de Ventas</h4>
                <p>
                  El relevador escanea el código EAN del producto directamente con la cámara del dispositivo. La app valida la base de datos precargada, asociando de forma automática marca, SKU, descripción y categoría sin errores de tipeo.
                </p>
                <div className="screen-badge-list">
                  <span className="mini-tag">Tolerancia a baja luz</span>
                  <span className="mini-tag">Validación en tiempo real</span>
                  <span className="mini-tag">Geolocalización del local</span>
                </div>
                <div className="client-upload-placeholder">
                  <Sparkles size={16} className="text-cyan" />
                  <span>Espacio reservado para captura de pantalla de la app (se actualizará con las imágenes del cliente)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'planogram' && (
            <div className="screen-card">
              <div className="phone-mockup">
                <div className="phone-screen-header">
                  <span className="phone-time">10:45</span>
                  <div className="phone-notch"></div>
                  <span className="phone-status">4G 98%</span>
                </div>
                <div className="phone-app-ui">
                  <div className="planogram-form">
                    <div className="form-header-bar">
                      <span>Auditoría de Planograma</span>
                    </div>
                    <div className="form-field-item">
                      <label>Categoría</label>
                      <input type="text" readOnly value="Cuidado del Bebé / Pañales" />
                    </div>
                    <div className="form-field-grid">
                      <div className="form-field-item">
                        <label>Frentes</label>
                        <input type="text" readOnly value="4 Frentes" />
                      </div>
                      <div className="form-field-item">
                        <label>Posición</label>
                        <input type="text" readOnly value="Estante 2 (Ojos)" />
                      </div>
                    </div>
                    <div className="form-field-grid">
                      <div className="form-field-item">
                        <label>Precio Regular</label>
                        <input type="text" readOnly value="$ 18.450" />
                      </div>
                      <div className="form-field-item">
                        <label>¿En Oferta?</label>
                        <span className="pill-active-offer">SÍ • 20% Desc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-explanation">
                <h4>Auditoría Integral de Góndola</h4>
                <p>
                  Permite relevar en segundos la cantidad de frentes asignados, posición exacta (ojos, manos, suelo), precio visible y cartelería de promoción, garantizando el cumplimiento del planograma pactado.
                </p>
                <div className="screen-badge-list">
                  <span className="mini-tag">Posicionamiento vertical & horizontal</span>
                  <span className="mini-tag">Detección de promociones</span>
                  <span className="mini-tag">Conteo de caras y frentes</span>
                </div>
                <div className="client-upload-placeholder">
                  <Sparkles size={16} className="text-cyan" />
                  <span>Espacio reservado para captura de pantalla de la app (se actualizará con las imágenes del cliente)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'excel' && (
            <div className="screen-card">
              <div className="excel-table-mockup">
                <div className="excel-sheet-header">
                  <FileSpreadsheet size={18} className="text-emerald" />
                  <span>Reporte_Planograma_Consolidado.xlsx</span>
                </div>
                <div className="excel-table-wrap">
                  <table className="excel-table">
                    <thead>
                      <tr>
                        <th>CATEGORÍA</th>
                        <th>ÍTEM / SKU</th>
                        <th>POSICIÓN</th>
                        <th>FRENTES</th>
                        <th>PRECIO</th>
                        <th>OFERTA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pañales</td>
                        <td>Pañales G x40</td>
                        <td>Góndola P3</td>
                        <td>4</td>
                        <td>$ 18.450</td>
                        <td>20% Promo</td>
                      </tr>
                      <tr>
                        <td>Pañales</td>
                        <td>Pañales XG x36</td>
                        <td>Góndola P3</td>
                        <td>3</td>
                        <td>$ 19.200</td>
                        <td>Sin oferta</td>
                      </tr>
                      <tr>
                        <td>Pañales</td>
                        <td>Toallitas Húmedas x50</td>
                        <td>Puntera Der.</td>
                        <td>6</td>
                        <td>$ 5.900</td>
                        <td>2x1</td>
                      </tr>
                      <tr>
                        <td>Higiene</td>
                        <td>Jabón Líquido Bebé</td>
                        <td>Góndola P1</td>
                        <td>2</td>
                        <td>$ 8.300</td>
                        <td>Sin oferta</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="screen-explanation">
                <h4>Reportería Inmediata para Toma de Decisiones</h4>
                <p>
                  Tablas dinámicas y planillas Excel listas para trabajarse a la preferencia de su equipo de Trade Marketing, Categoría o Inteligencia Comercial.
                </p>
                <div className="screen-badge-list">
                  <span className="mini-tag">Estructura limpia para BI</span>
                  <span className="mini-tag">Disponibilidad durante o después</span>
                  <span className="mini-tag">Filtrable por plaza y cadena</span>
                </div>
                <div className="client-upload-placeholder">
                  <Sparkles size={16} className="text-cyan" />
                  <span>Espacio reservado para planilla Excel de muestra enviada por el cliente</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="app-modal-footer">
          <div className="modal-footer-note">
            <ShieldCheck size={16} className="text-cyan" />
            <span>Desarrollo propio y exclusivo para operaciones de campo de Martín Jardón</span>
          </div>
          <a 
            href={companyData.contact.whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-quote modal-cta-btn"
          >
            <span>Consultar por Implementación</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
