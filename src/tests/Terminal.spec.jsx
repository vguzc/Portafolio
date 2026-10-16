import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Terminal from '../components/Terminal/Terminal';

describe('Componente Terminal interactivo (Consola CRT)', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe renderizar el título de la terminal y el input interactivo', () => {
    render(<Terminal />);
    expect(screen.getByText(/bash - root@vguzc:~/i)).not.toBeNull();
    const input = screen.getByLabelText('Línea de comando interactiva');
    expect(input).not.toBeNull();
  });

  it('debe ejecutar un comando y mostrar la respuesta en el DOM', () => {
    render(<Terminal />);
    const input = screen.getByLabelText('Línea de comando interactiva');
    const submitBtn = screen.getByRole('button', { name: /Ejecutar/i });

    fireEvent.change(input, { target: { value: 'help' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Comandos disponibles:/i)).not.toBeNull();
  });

  it('debe ejecutar comandos desde los botones de acción rápida', () => {
    const handleCommand = jasmine.createSpy('onCommandExecuted');
    render(<Terminal onCommandExecuted={handleCommand} />);

    const quickBtn = screen.getByRole('button', { name: 'matrix' });
    fireEvent.click(quickBtn);

    expect(handleCommand).toHaveBeenCalledWith('matrix');
    expect(screen.getByText(/Wake up, Neo\.\.\. The Matrix has you/i)).not.toBeNull();
  });
});
