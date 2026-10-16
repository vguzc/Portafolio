import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './News.css';

const DEFAULT_NEWS = {
  ciberseguridad: [
    {
      id: 1,
      titulo: "Actualización de OWASP Top 10 para APIs y Aplicaciones Web",
      fecha: "12 de Octubre, 2024",
      resumen: "Análisis de las principales fallas de seguridad modernas, priorizando vulnerabilidades de autorización BOLA, control de acceso roto y configuración defectuosa.",
      categoria: "Ciberseguridad",
      autor: "Vicente Guzmán",
      leidoMinutos: 4,
      enlace: "https://owasp.org"
    },
    {
      id: 2,
      titulo: "Estrategias de Autenticación Multifactor (MFA / 2FA)",
      fecha: "28 de Septiembre, 2024",
      resumen: "Guía práctica para implementar flujos de autenticación robustos mediante OAuth 2.0 y verificación en dos pasos en aplicaciones modernas.",
      categoria: "Ciberseguridad",
      autor: "Vicente Guzmán",
      leidoMinutos: 5,
      enlace: "https://auth0.com"
    }
  ],
  desarrolloWeb: [
    {
      id: 3,
      titulo: "Pruebas Unitarias Efectivas en Frontend con Jasmine y Karma",
      fecha: "05 de Octubre, 2024",
      resumen: "Metodología para testear componentes React, simulación de eventos en el DOM, creación de mocks e integración de reportes de cobertura.",
      categoria: "Desarrollo Web",
      autor: "Vicente Guzmán",
      leidoMinutos: 6,
      enlace: "https://jasmine.github.io"
    },
    {
      id: 4,
      titulo: "Arquitectura de Componentes Reutilizables con Bootstrap 5",
      fecha: "18 de Septiembre, 2024",
      resumen: "Cómo combinar el sistema de cuadrículas responsivo de Bootstrap con props y estado en React para interfaces accesibles y de alto rendimiento.",
      categoria: "Desarrollo Web",
      autor: "Vicente Guzmán",
      leidoMinutos: 3,
      enlace: "https://getbootstrap.com"
    }
  ]
};

const News = ({ initialNews = null }) => {
  const [newsData, setNewsData] = useState(initialNews || DEFAULT_NEWS);
  const [loading, setLoading] = useState(!initialNews);

  useEffect(() => {
    if (initialNews) {
      setNewsData(initialNews);
      setLoading(false);
      return;
    }

    const loadNews = async () => {
      try {
        const response = await fetch('./data/noticias.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON de noticias');
        }
        const data = await response.json();
        setNewsData(data);
      } catch (err) {
        setNewsData(DEFAULT_NEWS);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [initialNews]);

  return (
    <section id="noticias" className="news-section py-5" aria-labelledby="news-main-heading">
      <div className="container py-lg-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-info-subtle text-info-emphasis border border-info-subtle text-uppercase px-3 py-2 rounded-pill fw-semibold mb-2">
              Publicaciones & Artículos
            </span>
            <h2 id="news-main-heading" className="display-5 fw-bold text-dark">
              Noticias y Aprendizajes Técnicos
            </h2>
            <p className="lead text-secondary">
              Artículos técnicos clasificados en dos secciones especializadas: Ciberseguridad y Desarrollo Frontend.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5" data-testid="news-loading-indicator">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Cargando noticias...</span>
            </div>
          </div>
        ) : (
          <div className="row g-5">
            {/* Sección 1: Ciberseguridad */}
            <div className="col-lg-6" data-testid="news-section-cybersecurity">
              <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom">
                <span className="section-icon bg-danger-subtle text-danger rounded p-2">
                  <i className="bi bi-shield-lock-fill fs-5" aria-hidden="true"></i>
                </span>
                <h3 className="h4 fw-bold mb-0 text-dark">1. Ciberseguridad & Seguridad Web</h3>
              </div>

              <div className="row g-3">
                {newsData.ciberseguridad && newsData.ciberseguridad.map((item) => (
                  <div key={item.id} className="col-12">
                    <NewsCard {...item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Sección 2: Desarrollo Web */}
            <div className="col-lg-6" data-testid="news-section-webdev">
              <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom">
                <span className="section-icon bg-primary-subtle text-primary rounded p-2">
                  <i className="bi bi-code-slash fs-5" aria-hidden="true"></i>
                </span>
                <h3 className="h4 fw-bold mb-0 text-dark">2. Desarrollo Frontend & Testing</h3>
              </div>

              <div className="row g-3">
                {newsData.desarrolloWeb && newsData.desarrolloWeb.map((item) => (
                  <div key={item.id} className="col-12">
                    <NewsCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
