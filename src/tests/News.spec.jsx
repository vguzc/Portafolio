import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import News from '../components/News/News';

describe('Componente News (Dos secciones dinámicas de noticias)', () => {
  afterEach(() => {
    cleanup();
  });

  const mockNewsData = {
    ciberseguridad: [
      {
        id: 101,
        titulo: 'Vulnerabilidades OWASP en Producción',
        fecha: '10 de Octubre, 2024',
        resumen: 'Resumen de prueba de ciberseguridad.',
        categoria: 'Ciberseguridad',
        autor: 'Vicente Guzmán',
        leidoMinutos: 4,
        enlace: 'https://owasp.org'
      }
    ],
    desarrolloWeb: [
      {
        id: 201,
        titulo: 'Novedades de React y Testing con Karma',
        fecha: '08 de Octubre, 2024',
        resumen: 'Resumen de prueba de desarrollo web.',
        categoria: 'Desarrollo Web',
        autor: 'Vicente Guzmán',
        leidoMinutos: 5,
        enlace: 'https://react.dev'
      }
    ]
  };

  it('debe renderizar los encabezados de las dos secciones de noticias', () => {
    render(<News initialNews={mockNewsData} />);
    expect(screen.getByText(/1\. Ciberseguridad & Seguridad Web/i)).not.toBeNull();
    expect(screen.getByText(/2\. Desarrollo Frontend & Testing/i)).not.toBeNull();
  });

  it('debe renderizar los artículos correspondientes a cada sección con sus fechas', () => {
    render(<News initialNews={mockNewsData} />);
    expect(screen.getByText('Vulnerabilidades OWASP en Producción')).not.toBeNull();
    expect(screen.getByText('10 de Octubre, 2024')).not.toBeNull();

    expect(screen.getByText('Novedades de React y Testing con Karma')).not.toBeNull();
    expect(screen.getByText('08 de Octubre, 2024')).not.toBeNull();
  });
});
