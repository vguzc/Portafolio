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
    <section id="contacto" className="contact-section py-5" aria-labelledby="contact-heading">
      <div className="container py-lg-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge crt-badge font-monospace text-uppercase px-3 py-2 rounded-pill fw-semibold mb-2">
              [ CANAL DE COMUNICACIÓN CIFRADO ]
            </span>
            <h2 id="contact-heading" className="display-5 fw-bold text-light">
              Contacto & Transmisión
            </h2>
            <p className="lead text-secondary">
              Inicia una comunicación para colaborar en desarrollo fullstack o auditoría de seguridad.
            </p>
          </div>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Tarjeta lateral informativa */}
          <div className="col-lg-5">
            <div className="card h-100 shadow-sm border-0 contact-info-panel p-4 p-lg-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="dot dot-green"></span>
                <h3 className="h4 fw-bold mb-0 text-light font-monospace">Nodo de Contacto</h3>
              </div>
              
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-box">
                  <i className="bi bi-envelope-at-fill fs-5" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1 text-light font-monospace">Correo Institucional</h4>
                  <a href="mailto:vi.guzmanc@duocuc.cl" className="text-success text-decoration-none font-monospace">
                    vi.guzmanc@duocuc.cl
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-box">
                  <i className="bi bi-geo-alt-fill fs-5" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1 text-light font-monospace">Base de Operaciones</h4>
                  <p className="mb-0 text-secondary">Santiago, Chile (Duoc UC)</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-box">
                  <i className="bi bi-shield-check fs-5" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1 text-light font-monospace">Disponibilidad</h4>
                  <p className="mb-0 text-secondary">Prácticas profesionales & Proyectos Fullstack</p>
                </div>
              </div>

              <hr className="border-secondary my-4" />

              <div className="d-flex align-items-center gap-3">
                <span className="text-muted small font-monospace">Redes:</span>
                <a href="https://github.com/Vguzc" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub de Vicente">
                  <i className="bi bi-github" aria-hidden="true"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn de Vicente">
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 p-4 p-lg-5 contact-form-panel rounded-3">
              {submitted ? (
                <div className="text-center py-4" data-testid="contact-success-alert">
                  <div className="text-success mb-3">
                    <i className="bi bi-check-circle-fill display-4" aria-hidden="true"></i>
                  </div>
                  <h3 className="h4 fw-bold text-light font-monospace">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-secondary mb-4">
                    Transmisión recibida con éxito. Responderé a tu mensaje a la brevedad.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-success font-monospace rounded-pill px-4"
                    onClick={resetForm}
                  >
                    Nueva Transmisión
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate data-testid="contact-form">
                  {error && (
                    <div className="alert alert-danger d-flex align-items-center font-monospace" role="alert" data-testid="contact-error-alert">
                      <i className="bi bi-exclamation-triangle-fill me-2" aria-hidden="true"></i>
                      <div>{error}</div>
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label font-monospace small text-light">
                        Nombre completo <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control crt-input font-monospace"
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
                      <label htmlFor="email" className="form-label font-monospace small text-light">
                        Correo electrónico <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control crt-input font-monospace"
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
                      <label htmlFor="asunto" className="form-label font-monospace small text-light">
                        Asunto
                      </label>
                      <input
                        type="text"
                        className="form-control crt-input font-monospace"
                        id="asunto"
                        name="asunto"
                        placeholder="Ej. Propuesta de proyecto / Consulta"
                        value={formData.asunto}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="mensaje" className="form-label font-monospace small text-light">
                        Mensaje <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control crt-input font-monospace"
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        placeholder="Escribe tu mensaje..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn btn-crt-primary w-100 font-monospace py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
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
