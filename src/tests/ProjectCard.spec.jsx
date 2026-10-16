import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ProjectCard from '../components/Projects/ProjectCard';

describe('Componente ProjectCard', () => {
  afterEach(() => {
    cleanup();
  });

  const mockProject = {
    id: 10,
    titulo: 'Sistema de Pruebas Unitarias',
    descripcion: 'Proyecto de verificación con Jasmine y Karma.',
    imagen: 'https://via.placeholder.com/300',
    tecnologias: ['React', 'Jasmine', 'Karma'],
    enlaceDemo: 'https://demo.example.com',
    enlaceRepo: 'https://github.com/test/repo',
    destacado: true
  };

  it('debe renderizar el título y la descripción del proyecto', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText('Sistema de Pruebas Unitarias')).not.toBeNull();
    expect(screen.getByText('Proyecto de verificación con Jasmine y Karma.')).not.toBeNull();
  });

  it('debe renderizar los badges con las tecnologías correspondientes', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText('React')).not.toBeNull();
    expect(screen.getByText('Jasmine')).not.toBeNull();
    expect(screen.getByText('Karma')).not.toBeNull();
  });

  it('debe mostrar la insignia de Destacado cuando la propiedad es verdadera', () => {
    render(<ProjectCard {...mockProject} />);
    expect(screen.getByText(/Destacado/i)).not.toBeNull();
  });

  it('debe contener los enlaces de repositorio y demo con atributos seguros', () => {
    render(<ProjectCard {...mockProject} />);
    const linkDemo = screen.getByLabelText(/Ver demostración en vivo/i);
    const linkRepo = screen.getByLabelText(/Ver código fuente/i);

    expect(linkDemo.getAttribute('href')).toBe('https://demo.example.com');
    expect(linkDemo.getAttribute('target')).toBe('_blank');
    expect(linkRepo.getAttribute('href')).toBe('https://github.com/test/repo');
  });
});
