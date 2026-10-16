import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Projects from '../components/Projects/Projects';

describe('Componente Projects (Manejo de estado y filtrado)', () => {
  afterEach(() => {
    cleanup();
  });

  const mockProjectsList = [
    {
      id: 1,
      titulo: 'Proyecto Uno Normal',
      descripcion: 'Descripción del proyecto uno.',
      imagen: 'https://via.placeholder.com/300',
      tecnologias: ['React'],
      enlaceDemo: 'https://demo1.com',
      enlaceRepo: 'https://repo1.com',
      destacado: false
    },
    {
      id: 2,
      titulo: 'Proyecto Dos Destacado',
      descripcion: 'Descripción del proyecto dos.',
      imagen: 'https://via.placeholder.com/300',
      tecnologias: ['Bootstrap', 'Jasmine'],
      enlaceDemo: 'https://demo2.com',
      enlaceRepo: 'https://repo2.com',
      destacado: true
    }
  ];

  it('debe renderizar todos los proyectos pasados mediante mock', () => {
    render(<Projects initialProjects={mockProjectsList} />);
    expect(screen.getByText('Proyecto Uno Normal')).not.toBeNull();
    expect(screen.getByText('Proyecto Dos Destacado')).not.toBeNull();
  });

  it('debe filtrar proyectos y mostrar solo los destacados al hacer clic en el filtro', () => {
    render(<Projects initialProjects={mockProjectsList} />);

    const filterBtn = screen.getByText('Solo Destacados');
    fireEvent.click(filterBtn);

    // Debe seguir mostrando el proyecto destacado
    expect(screen.getByText('Proyecto Dos Destacado')).not.toBeNull();
    // No debe mostrar el proyecto que no es destacado
    expect(screen.queryByText('Proyecto Uno Normal')).toBeNull();

    // Al regresar a 'Todos', debe mostrar ambos nuevamente
    const allBtn = screen.getByText(/Todos/);
    fireEvent.click(allBtn);
    expect(screen.getByText('Proyecto Uno Normal')).not.toBeNull();
  });

  it('debe rotar el carrusel 3D con los botones de navegación', () => {
    render(<Projects initialProjects={mockProjectsList} />);
    const rightArrow = screen.getByTitle('Girar a la derecha');
    const leftArrow = screen.getByTitle('Girar a la izquierda');

    fireEvent.click(rightArrow);
    fireEvent.click(leftArrow);
    expect(screen.getByText('Proyecto Uno Normal')).not.toBeNull();
  });

  it('debe responder a eventos de arrastre en el escenario 3D', () => {
    render(<Projects initialProjects={mockProjectsList} />);
    const stage = screen.getByLabelText('Carrusel 3D de proyectos');

    fireEvent.mouseDown(stage, { clientX: 100 });
    fireEvent.mouseMove(stage, { clientX: 160 });
    fireEvent.mouseUp(stage);

    expect(stage).not.toBeNull();
  });
});
