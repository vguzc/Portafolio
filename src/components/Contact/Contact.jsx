import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor introduce un correo electrónico válido.');
      return;
    }

    // Simulación de envío exitoso
    setSubmitted(true);
    setError('');
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="contacto" className="contact-section py-5 bg-light" aria-labelledby="contact-heading">
      <div className="container py-lg-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-success-subtle text-success-emphasis border border-success-subtle text-uppercase px-3 py-2 rounded-pill fw-semibold mb-2">
              Conversemos
            </span>
            <h2 id="contact-heading" className="display-5 fw-bold text-dark">
              Contacto y Colaboración
            </h2>
            <p className="lead text-secondary">
              ¿Tienes una propuesta o proyecto? Envíame un mensaje y te responderé a la brevedad.
            </p>
          </div>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Tarjeta lateral informativa */}
          <div className="col-lg-5">
            <div className="card h-100 shadow-sm border-0 contact-info-card text-white p-4 p-lg-5">
              <h3 className="h4 fw-bold mb-4">Información de Contacto</h3>
              
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-box">
                  <i className="bi bi-envelope-check-fill fs-5" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1 text-light">Correo Institucional</h4>
                  <a href="mailto:vi.guzmanc@duocuc.cl" className="text-info text-decoration-none">
                    vi.guzmanc@duocuc.cl
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-box">
                  <i className="bi bi-geo-alt-fill fs-5" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1 text-light">Ubicación</h4>
                  <p className="mb-0 text-white-50">Santiago, Chile (Duoc UC)</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="contact-icon-box">
                  <i className="bi bi-briefcase-fill fs-5" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1 text-light">Disponibilidad</h4>
                  <p className="mb-0 text-white-50">Prácticas profesionales & Proyectos Fullstack</p>
                </div>
              </div>

              <hr className="border-secondary my-4" />

              <div className="d-flex align-items-center gap-3">
                <span className="text-white-50 small">Sígueme:</span>
                <a href="https://github.com/Vguzc" target="_blank" rel="noreferrer" className="text-white fs-5" aria-label="GitHub de Vicente">
                  <i className="bi bi-github" aria-hidden="true"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white fs-5" aria-label="LinkedIn de Vicente">
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 p-4 p-lg-5 bg-white rounded-4">
              {submitted ? (
                <div className="text-center py-4" data-testid="contact-success-alert">
                  <div className="text-success mb-3">
                    <i className="bi bi-check-circle-fill display-4" aria-hidden="true"></i>
                  </div>
                  <h3 className="h4 fw-bold text-dark">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-secondary mb-4">
                    Gracias por ponerte en contacto. Responderé a tu mensaje cuanto antes.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={resetForm}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate data-testid="contact-form">
                  {error && (
                    <div className="alert alert-danger d-flex align-items-center" role="alert" data-testid="contact-error-alert">
                      <i className="bi bi-exclamation-triangle-fill me-2" aria-hidden="true"></i>
                      <div>{error}</div>
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label fw-semibold text-dark">
                        Nombre completo <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
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
                      <label htmlFor="email" className="form-label fw-semibold text-dark">
                        Correo electrónico <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
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
                      <label htmlFor="asunto" className="form-label fw-semibold text-dark">
                        Asunto
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="asunto"
                        name="asunto"
                        placeholder="Ej. Propuesta de proyecto / Consulta"
                        value={formData.asunto}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="mensaje" className="form-label fw-semibold text-dark">
                        Mensaje <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        placeholder="Describe brevemente en qué puedo ayudarte..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        aria-required="true"
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 rounded-pill shadow-sm d-flex align-items-center justify-content-center gap-2"
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
