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
    <section id="contacto" className="contact-terminal-section py-5" aria-labelledby="contact-heading">
      <div className="container py-lg-4">
        {/* Encabezado minimalista de sección */}
        <div className="mb-4 pb-2 border-bottom border-secondary-subtle">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="dot-mini-green"></span>
            <span className="small text-muted text-uppercase font-monospace">Terminal de Contacto & Despacho</span>
          </div>
          <h2 id="contact-heading" className="display-6 fw-bold text-light mb-1">
            Canal de Transmisión Directo
          </h2>
          <p className="text-secondary small mb-0">
            Envía una propuesta, consulta o saludo a través de la consola segura de comunicación.
          </p>
        </div>

        {/* Consola Terminal de Contacto (Misma estética que Home) */}
        <div className="contact-terminal-window shadow-lg">
          {/* Barra de título estilo ventana macOS / Consola minimalista */}
          <div className="contact-terminal-header d-flex align-items-center justify-content-between px-3 px-md-4 py-2 border-bottom border-secondary-subtle">
            <div className="d-flex align-items-center gap-2">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title ms-2 font-monospace">bash - root@vguzc:~/contacto (dispatch_service)</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="badge-online font-monospace small text-success d-flex align-items-center gap-1">
                <span className="pulse-dot"></span>
                <span>● SECURE CHANNEL / READY</span>
              </span>
              <span className="text-muted font-monospace d-none d-sm-inline" aria-hidden="true">+</span>
            </div>
          </div>

          {/* Cuerpo interior de la terminal */}
          <div className="contact-terminal-body p-4 p-md-5">
            {/* Metadatos y comentarios iniciales del canal */}
            <div className="terminal-comments-block font-monospace mb-4 pb-3 border-bottom border-secondary-subtle">
              <div className="terminal-session-meta small text-muted mb-2">
                // vguzc-dispatch-service :: canal seguro inicializado
              </div>
              <div className="terminal-comment-line small text-muted mb-1">
                <span className="text-secondary"># [DESTINO]:</span>{' '}
                <a href="mailto:vi.guzmanc@duocuc.cl" className="text-light text-decoration-none">
                  vi.guzmanc@duocuc.cl
                </a>{' '}
                <span className="text-muted">(Vicente Guzmán)</span>
              </div>
              <div className="terminal-comment-line small text-muted mb-1">
                <span className="text-secondary"># [UBICACIÓN]:</span>{' '}
                <span className="text-light">Santiago, Chile (Duoc UC)</span>
              </div>
              <div className="terminal-comment-line small text-muted">
                <span className="text-secondary"># [DISPONIBILIDAD]:</span>{' '}
                <span className="text-emerald-sober">Desarrollo Fullstack & Ciberseguridad</span>
              </div>
            </div>

            <div className="row g-4">
              {/* Columna lateral: Canales directos e info del sistema */}
              <div className="col-lg-4 border-end-lg border-secondary-subtle pe-lg-4">
                <div className="d-flex flex-column gap-3 font-monospace">
                  <div>
                    <span className="small text-muted d-block mb-1">// PROTOCOLO</span>
                    <span className="badge text-uppercase p-2" style={{ background: '#172025', border: '1px solid #233038', color: '#cbd5e1', fontSize: '0.72rem' }}>
                      TLS 1.3 / OWASP SANITIZED
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="small text-muted d-block mb-2">// CANALES DIRECTOS</span>
                    <div className="d-flex flex-column gap-2">
                      <a
                        href="mailto:vi.guzmanc@duocuc.cl"
                        className="terminal-channel-pill d-flex align-items-center gap-2 p-2 rounded text-decoration-none"
                        aria-label="Enviar correo directo a Vicente Guzmán"
                      >
                        <i className="bi bi-envelope-at-fill text-success"></i>
                        <span className="small text-light">vi.guzmanc@duocuc.cl</span>
                      </a>
                      <a
                        href="https://github.com/Vguzc"
                        target="_blank"
                        rel="noreferrer"
                        className="terminal-channel-pill d-flex align-items-center gap-2 p-2 rounded text-decoration-none"
                        aria-label="GitHub de Vicente Guzmán"
                      >
                        <i className="bi bi-github text-white"></i>
                        <span className="small text-light">github.com/Vguzc</span>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="terminal-channel-pill d-flex align-items-center gap-2 p-2 rounded text-decoration-none"
                        aria-label="LinkedIn de Vicente Guzmán"
                      >
                        <i className="bi bi-linkedin text-info"></i>
                        <span className="small text-light">linkedin.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna principal: Formulario de comandos interactivo */}
              <div className="col-lg-8 ps-lg-4">
                {submitted ? (
                  <div className="terminal-success-screen p-4 rounded-3 font-monospace" data-testid="contact-success-alert">
                    <div className="d-flex align-items-center gap-2 text-success mb-3">
                      <i className="bi bi-check-circle-fill fs-4" aria-hidden="true"></i>
                      <h3 className="h5 fw-bold mb-0 text-white">[STATUS 200 OK] ¡Mensaje Enviado con Éxito!</h3>
                    </div>
                    <p className="text-secondary small mb-3">
                      &gt; Transmisión recibida y registrada en el servidor.<br />
                      &gt; Gracias por tu mensaje. Te responderé a la brevedad posible.
                    </p>
                    <button
                      type="button"
                      className="btn btn-sm btn-slide-action font-monospace rounded px-3"
                      onClick={resetForm}
                    >
                      &gt; Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate data-testid="contact-form">
                    {error && (
                      <div
                        className="alert alert-danger font-monospace d-flex align-items-center gap-2 py-2 px-3 small mb-3"
                        role="alert"
                        data-testid="contact-error-alert"
                        style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid #ef4444', color: '#fca5a5' }}
                      >
                        <i className="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
                        <div>{error}</div>
                      </div>
                    )}

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label small text-secondary font-monospace d-flex align-items-center gap-1 mb-1">
                          <span className="text-success">&gt;</span>
                          <span>Nombre completo</span>
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control terminal-cli-input font-monospace"
                          id="nombre"
                          name="nombre"
                          placeholder="root@guest:~$ nombre..."
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          aria-required="true"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label small text-secondary font-monospace d-flex align-items-center gap-1 mb-1">
                          <span className="text-success">&gt;</span>
                          <span>Correo electrónico</span>
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control terminal-cli-input font-monospace"
                          id="email"
                          name="email"
                          placeholder="guest@mail.com..."
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="asunto" className="form-label small text-secondary font-monospace d-flex align-items-center gap-1 mb-1">
                          <span className="text-success">&gt;</span>
                          <span>Asunto</span>
                        </label>
                        <input
                          type="text"
                          className="form-control terminal-cli-input font-monospace"
                          id="asunto"
                          name="asunto"
                          placeholder="Propuesta / Consulta..."
                          value={formData.asunto}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="mensaje" className="form-label small text-secondary font-monospace d-flex align-items-center gap-1 mb-1">
                          <span className="text-success">&gt;</span>
                          <span>Mensaje</span>
                          <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control terminal-cli-input font-monospace"
                          id="mensaje"
                          name="mensaje"
                          rows="4"
                          placeholder="Escribe tu mensaje o payload aquí..."
                          value={formData.mensaje}
                          onChange={handleChange}
                          required
                          aria-required="true"
                        ></textarea>
                      </div>

                      <div className="col-12 mt-4">
                        <button
                          type="submit"
                          className="btn btn-minimal-primary font-monospace w-100 py-2 d-flex align-items-center justify-content-center gap-2 shadow-sm"
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
      </div>
    </section>
  );
};

export default Contact;
