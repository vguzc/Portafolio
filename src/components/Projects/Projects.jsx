import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const DEFAULT_PROJECTS = [
  {
    id: 1,
    titulo: "Pastelería Mil Sabores",
    descripcion: "Plataforma e-commerce para repostería tradicional chilena. Incluye catálogo interactivo con 8 categorías, carrito dinámico con cálculo de impuestos y cupones, autenticación multi-rol y mantenedores CRUD.",
    imagen: "./assets/pasteleria-mil-sabores.png",
    tecnologias: ["HTML5", "CSS3", "JavaScript ES6+", "LocalStorage", "Bootstrap 5"],
    enlaceDemo: "https://vguzc.github.io/Pasteleria_Mil_Sabores_P1_FSII/",
    enlaceRepo: "https://github.com/vguzc/Pasteleria_Mil_Sabores_P1_FSII",
    destacado: true
  },
  {
    id: 2,
    titulo: "Próximamente",
    descripcion: "Nuevo proyecto de software en etapa de diseño de arquitectura y desarrollo. Próximamente disponible con demostración en vivo y código abierto.",
    imagen: "./assets/proximamente.svg",
    tecnologias: ["En Desarrollo", "Próximamente"],
    enlaceDemo: "",
    enlaceRepo: "",
    destacado: false
  },
  {
    id: 3,
    titulo: "Próximamente",
    descripcion: "Nueva solución tecnológica enfocada en seguridad y escalabilidad. La versión beta y repositorio serán publicados próximamente.",
    imagen: "./assets/proximamente.svg",
    tecnologias: ["En Desarrollo", "Próximamente"],
    enlaceDemo: "",
    enlaceRepo: "",
    destacado: false
  }
];

const Projects = ({ initialProjects = null, onFilterUsed }) => {
  const [projects, setProjects] = useState(initialProjects || []);
  const [filter, setFilter] = useState('todos');
  const [loading, setLoading] = useState(!initialProjects);

  // Estados interactivos para el carrusel 3D
  const [activeIndex, setActiveIndex] = useState(0);
  const [tiltAngle, setTiltAngle] = useState(0);
  const [tiltXAngle, setTiltXAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragCurrentX, setDragCurrentX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const stageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (initialProjects) {
      setProjects(initialProjects);
      setLoading(false);
      return;
    }

    const loadProjectsData = async () => {
      try {
        const response = await fetch('./data/proyectos.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON de proyectos');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setProjects(DEFAULT_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    loadProjectsData();
  }, [initialProjects]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setActiveIndex(0); // Reiniciar al primer proyecto del filtro
    if (onFilterUsed) onFilterUsed(newFilter);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === 'destacados') return project.destacado;
    return true;
  });

  const totalItems = filteredProjects.length;

  const slideLeft = () => {
    if (totalItems <= 1) return;
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const slideRight = () => {
    if (totalItems <= 1) return;
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const rotateToIndex = (index) => {
    setActiveIndex(index);
  };

  // Manejo de arrastre con mouse (Drag & Rotate)
  const handleMouseDown = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    // Inclinación sutil (tilt) de perspectiva inspirada en el CodePen de John Blazek
    if (stageRef.current) {
      const rect = stageRef.current.getBoundingClientRect();
      const mouseY = e.clientY - (rect.top + rect.height / 2);
      const mouseX = e.clientX - (rect.left + rect.width / 2);
      setTiltAngle(- (mouseY / (rect.height / 2)) * 5);
      setTiltXAngle((mouseX / (rect.width / 2)) * 4);
    }

    if (isDragging) {
      setDragCurrentX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const deltaX = dragCurrentX - dragStartX;
      if (deltaX < -50) {
        slideRight();
      } else if (deltaX > 50) {
        slideLeft();
      }
      setIsDragging(false);
      setDragStartX(0);
      setDragCurrentX(0);
    }
  };

  // Manejo de gestos táctiles (Touch & Swipe)
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStartX(e.touches[0].clientX);
      setDragCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1) {
      setDragCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      const deltaX = dragCurrentX - dragStartX;
      if (deltaX < -40) {
        slideRight();
      } else if (deltaX > 40) {
        slideLeft();
      }
      setIsDragging(false);
      setDragStartX(0);
      setDragCurrentX(0);
    }
  };

  // Función matemática de posicionamiento cilíndrico en 3D
  const getCardStyle = (index) => {
    if (totalItems <= 1) {
      return {
        transform: 'translateX(0px) translateZ(0px) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 30,
        filter: 'none',
        pointerEvents: 'auto'
      };
    }

    // Calcular distancia circular respecto al proyecto activo
    let diff = ((index - activeIndex) % totalItems + totalItems) % totalItems;
    if (diff > totalItems / 2) {
      diff -= totalItems;
    }

    const isCenter = diff === 0;
    const sign = Math.sign(diff);
    const abs = Math.abs(diff);

    const isMobile = windowWidth <= 576;
    const isTablet = windowWidth <= 768;
    const sideOffset = isMobile ? 220 : isTablet ? 270 : 330;
    const dragDenominator = isMobile ? 240 : 320;

    // Ajuste dinámico de arrastre si se está deslizando
    const dragRatio = isDragging ? Math.max(-1, Math.min(1, (dragCurrentX - dragStartX) / dragDenominator)) : 0;
    const effectiveDiff = diff - dragRatio;
    const effectiveSign = Math.sign(effectiveDiff);
    const effectiveAbs = Math.abs(effectiveDiff);

    if (effectiveAbs < 0.15) {
      return {
        transform: `translateX(${effectiveDiff * sideOffset}px) translateZ(${-effectiveAbs * 120}px) rotateY(${effectiveDiff * -35}deg) scale(1)`,
        opacity: 1,
        zIndex: 30,
        filter: 'none',
        pointerEvents: 'auto'
      };
    }

    if (effectiveAbs <= 1.2) {
      // Tarjetas adyacentes visibles en 3D a los lados
      return {
        transform: `translateX(${effectiveSign * sideOffset + (effectiveDiff - effectiveSign) * (sideOffset * 0.6)}px) translateZ(-160px) rotateY(${-effectiveSign * 35}deg) scale(0.88)`,
        opacity: 0.78,
        zIndex: 20,
        filter: 'brightness(0.75)',
        pointerEvents: 'auto'
      };
    }

    // Tarjetas posteriores más alejadas
    return {
      transform: `translateX(${effectiveSign * (sideOffset + (effectiveAbs - 1) * (sideOffset * 0.65))}px) translateZ(-340px) rotateY(${-effectiveSign * 50}deg) scale(0.72)`,
      opacity: 0.35,
      zIndex: Math.max(1, 10 - Math.round(effectiveAbs)),
      filter: 'brightness(0.5) blur(1px)',
      pointerEvents: 'none'
    };
  };

  return (
    <section id="proyectos" className="projects-slider-section py-5" aria-labelledby="projects-heading">
      <div className="container py-lg-4">
        {/* Encabezado y Controles del Carrusel 3D */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-4 pb-2 border-bottom border-secondary-subtle">
          <div>
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <span className="dot-mini-green"></span>
              <span className="small text-muted text-uppercase font-monospace">Carrusel 3D Interactivo</span>
            </div>
            <h2 id="projects-heading" className="display-6 fw-bold text-light mb-1">
              Proyectos Destacados
            </h2>
            <p className="text-secondary small mb-md-0">
              Arrastra horizontalmente o usa las flechas para explorar los proyectos en perspectiva 3D.
            </p>
          </div>

          <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
            {/* Filtro tipo píldora */}
            <div className="pill-filter-dock d-inline-flex p-1" role="group" aria-label="Filtro de proyectos">
              <button
                type="button"
                className={`btn btn-sm filter-pill-btn ${filter === 'todos' ? 'active' : ''}`}
                onClick={() => handleFilterChange('todos')}
              >
                Todos ({projects.length})
              </button>
              <button
                type="button"
                className={`btn btn-sm filter-pill-btn ${filter === 'destacados' ? 'active' : ''}`}
                onClick={() => handleFilterChange('destacados')}
              >
                Solo Destacados
              </button>
            </div>

            {/* Flechas de navegación para el carrusel 3D */}
            <div className="slider-nav-arrows d-none d-sm-flex gap-2">
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={slideLeft}
                aria-label="Desplazar a la izquierda"
                title="Girar a la izquierda"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={slideRight}
                aria-label="Desplazar a la derecha"
                title="Girar a la derecha"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Escenario 3D interactivo con perspectiva CSS */}
        {loading ? (
          <div className="text-center py-5" data-testid="loading-indicator">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Cargando proyectos...</span>
            </div>
          </div>
        ) : (
          <div className="carousel-3d-wrapper">
            <div
              className={`carousel-3d-stage ${isDragging ? 'is-dragging' : ''}`}
              ref={stageRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              role="region"
              aria-label="Carrusel 3D de proyectos"
              tabIndex={0}
            >
              <div
                className="carousel-3d-cylinder"
                style={{
                  transform: `rotateX(${tiltAngle}deg) rotateY(${tiltXAngle}deg)`
                }}
              >
                {filteredProjects.map((project, index) => {
                  let diff = ((index - activeIndex) % totalItems + totalItems) % totalItems;
                  if (diff > totalItems / 2) diff -= totalItems;
                  const isFront = diff === 0;
                  const style = getCardStyle(index);

                  return (
                    <div
                      key={project.id}
                      className={`carousel-3d-item ${isFront ? 'is-front' : 'is-side'}`}
                      style={style}
                      onClick={() => {
                        if (!isFront) rotateToIndex(index);
                      }}
                      title={!isFront ? `Ver ${project.titulo}` : undefined}
                    >
                      <ProjectCard {...project} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Barra de estado inferior estilo consola */}
            <div className="carousel-3d-footer d-flex align-items-center justify-content-between pt-3 px-2 font-monospace small text-muted">
              <div className="d-flex align-items-center gap-2">
                <span className="pulse-dot"></span>
                <span>3D PERSPECTIVE: {totalItems} PROYECTOS DISPONIBLES</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span>[ {String(activeIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')} ]</span>
                <span className="d-none d-md-inline">// HAZ CLIC EN LOS LATERALES O ARRASTRA PARA GIRAR</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
