import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Hero from '../components/Hero/Hero';

describe('Componente Hero (Sobre Mí)', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe renderizar el nombre del estudiante por defecto', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Vicente Guzmán');
  });

  it('debe renderizar un nombre y título personalizados pasados por props', () => {
    render(
      <Hero
        nombre="Pedro Pérez"
        titulo="Ingeniero de Software"
        biografia="Especialista en ciberseguridad."
      />
    );
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Pedro Pérez');
    expect(screen.getByText('Ingeniero de Software')).not.toBeNull();
    expect(screen.getByText('Especialista en ciberseguridad.')).not.toBeNull();
  });

  it('debe renderizar la fotografía profesional con atributo alt accesible', () => {
    render(<Hero nombre="Vicente Guzmán" />);
    const avatar = screen.getByRole('img');
    expect(avatar.getAttribute('alt')).toBe('Fotografía profesional de Vicente Guzmán');
  });

  it('debe incluir enlaces a GitHub y al correo institucional', () => {
    render(<Hero email="vi.guzmanc@duocuc.cl" githubUrl="https://github.com/Vguzc" />);
    const githubLink = screen.getByLabelText('GitHub de Vicente Guzmán');
    const mailLink = screen.getByLabelText('Enviar correo electrónico a Vicente Guzmán');

    expect(githubLink.getAttribute('href')).toBe('https://github.com/Vguzc');
    expect(mailLink.getAttribute('href')).toBe('mailto:vi.guzmanc@duocuc.cl');
  });
});
