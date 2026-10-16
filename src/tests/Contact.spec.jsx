import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Contact from '../components/Contact/Contact';

describe('Componente Contact (Manejo de estado, eventos y validación)', () => {
  afterEach(() => {
    cleanup();
  });

  it('debe renderizar todos los campos requeridos del formulario', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Nombre completo/i)).not.toBeNull();
    expect(screen.getByLabelText(/Correo electrónico/i)).not.toBeNull();
    expect(screen.getByLabelText(/Asunto/i)).not.toBeNull();
    expect(screen.getByLabelText(/Mensaje/i)).not.toBeNull();
  });

  it('debe mostrar una alerta de error si se intenta enviar vacío', () => {
    render(<Contact />);
    const submitBtn = screen.getByRole('button', { name: /Enviar Mensaje/i });

    fireEvent.click(submitBtn);

    const errorAlert = screen.getByTestId('contact-error-alert');
    expect(errorAlert).not.toBeNull();
    expect(errorAlert.textContent).toContain('Por favor completa todos los campos requeridos.');
  });

  it('debe actualizar los valores de los inputs al escribir (manejo de estado)', () => {
    render(<Contact />);
    const inputNombre = screen.getByLabelText(/Nombre completo/i);
    const inputEmail = screen.getByLabelText(/Correo electrónico/i);

    fireEvent.change(inputNombre, { target: { name: 'nombre', value: 'Carlos Silva' } });
    fireEvent.change(inputEmail, { target: { name: 'email', value: 'carlos@ejemplo.com' } });

    expect(inputNombre.value).toBe('Carlos Silva');
    expect(inputEmail.value).toBe('carlos@ejemplo.com');
  });

  it('debe mostrar pantalla de éxito al enviar datos válidos', () => {
    render(<Contact />);
    const inputNombre = screen.getByLabelText(/Nombre completo/i);
    const inputEmail = screen.getByLabelText(/Correo electrónico/i);
    const inputMensaje = screen.getByLabelText(/Mensaje/i);
    const submitBtn = screen.getByRole('button', { name: /Enviar Mensaje/i });

    fireEvent.change(inputNombre, { target: { name: 'nombre', value: 'Carlos Silva' } });
    fireEvent.change(inputEmail, { target: { name: 'email', value: 'carlos@ejemplo.com' } });
    fireEvent.change(inputMensaje, { target: { name: 'mensaje', value: 'Hola, me gustaría conversar.' } });

    fireEvent.click(submitBtn);

    const successAlert = screen.getByTestId('contact-success-alert');
    expect(successAlert).not.toBeNull();
    expect(successAlert.textContent).toContain('¡Mensaje Enviado con Éxito!');
  });
});
