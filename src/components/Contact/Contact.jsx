import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ onMessageSent }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setError('Por favor completa todos los campos requeridos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor introduce un correo electrónico válido.');
      return;
    }

    setSubmitted(true);
    setError('');
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });

    if (onMessageSent) onMessageSent();
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="contacto" className="contact-minimal-section py-5" aria-labelledby="contact-heading">
      <div className="container py-lg-4">
        <div className="mb-5 pb-2 border-bottom border-secondary-subtle">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="dot-mini-green"></span>
            <span className="small text-muted text-uppercase font-monospace">Comunicación & Colaboración</span>
          </div>
          <h2 id="contact-heading" className="display-6 fw-bold text-light mb-1">
            Contacto
          </h2>
          <p className="text-secondary small mb-0">
            ¿Tienes una propuesta o proyecto? Envíame un mensaje directo.
          </p>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Tarjeta lateral con datos esenciales */}
          <div className="col-lg-5">
            <div className="card h-100 border-0 minimal-contact-info p-4 p-lg-5">
              <h3 className="h5 fw-bold mb-4 text-light">Canales de Contacto</h3>
              
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-minimal">
                  <i className="bi bi-envelope-at-fill" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="small text-muted mb-1 font-monospace">Correo Institucional</h4>
                  <a href="mailto:vi.guzmanc@duocuc.cl" className="text-light text-decoration-none fw-medium">
                    vi.guzmanc@duocuc.cl
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-minimal">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="small text-muted mb-1 font-monospace">Ubicación</h4>
                  <p className="mb-0 text-light fw-medium">Santiago, Chile (Duoc UC)</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-minimal">
                  <i className="bi bi-briefcase-fill" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="small text-muted mb-1 font-monospace">Disponibilidad</h4>
                  <p className="mb-0 text-light fw-medium">Desarrollo Fullstack & Prácticas profesionales</p>
                </div>
              </div>

              <hr className="border-secondary my-4" />

              <div className="d-flex align-items-center gap-3">
                <span className="text-muted small">Redes profesionales:</span>
                <a href="https://github.com/Vguzc" target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub de Vicente">
                  <i className="bi bi-github" aria-hidden="true"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn de Vicente">
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-lg-7">
            <div className="card border-0 p-4 p-lg-5 minimal-form-card rounded-4">
              {submitted ? (
                <div className="text-center py-4" data-testid="contact-success-alert">
                  <div className="text-success mb-3">
                    <i className="bi bi-check-circle-fill display-4" aria-hidden="true"></i>
                  </div>
                  <h3 className="h5 fw-bold text-light mb-2">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-secondary small mb-4">
                    Gracias por tu mensaje. Te responderé cuanto antes.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm rounded-pill px-4"
                    onClick={resetForm}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate data-testid="contact-form">
                  {error && (
                    <div className="alert alert-danger d-flex align-items-center small" role="alert" data-testid="contact-error-alert">
                      <i className="bi bi-exclamation-triangle-fill me-2" aria-hidden="true"></i>
                      <div>{error}</div>
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label small text-secondary">
                        Nombre completo <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control minimal-input"
                        id="nombre"
                        name="nombre"
                        placeholder="Ej. Juan Pérez"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label small text-secondary">
                        Correo electrónico <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control minimal-input"
                        id="email"
                        name="email"
                        placeholder="nombre@ejemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="asunto" className="form-label small text-secondary">
                        Asunto
                      </label>
                      <input
                        type="text"
                        className="form-control minimal-input"
                        id="asunto"
                        name="asunto"
                        placeholder="Ej. Propuesta de proyecto / Consulta"
                        value={formData.asunto}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="mensaje" className="form-label small text-secondary">
                        Mensaje <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control minimal-input"
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn btn-minimal-primary w-100 py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                      >
                        <i className="bi bi-send-fill" aria-hidden="true"></i>
                        <span>Enviar Mensaje</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
