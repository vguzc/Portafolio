import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const COMMANDS = {
  help: 'Comandos disponibles: projects | skills | contact | bio | status | matrix | clear',
  projects: 'Navegando a la sección de proyectos... [OK]',
  skills: 'Skills: React 18, Bootstrap 5, JavaScript (ES6+), Jasmine, Karma, OWASP Top 10, Git',
  contact: 'Navegando al formulario de contacto... [OK]',
  bio: 'Vicente Guzmán: Desarrollador Fullstack enfocado en software seguro y escalable (Duoc UC).',
  status: 'STATUS: Sistema operativo nominal | Pruebas unitarias: 19/19 OK | Modo: Minimalista Terminal',
  matrix: 'Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐇'
};

const Terminal = ({ onCommandExecuted, children }) => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Wake up, Neo... [Terminal interactiva inicializada]' },
    { type: 'system', text: "Escribe 'help' o utiliza los comandos rápidos para interactuar." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalScrollRef = useRef(null);

  // Desplazamiento exclusivamente interno dentro de la consola (no mueve la ventana del navegador)
  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = COMMANDS[cleanCmd] || `Comando no reconocido: '${cleanCmd}'. Escribe 'help' para ver la lista.`;

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `root@vguzc:~$ ${cleanCmd}` },
      { type: 'output', text: output }
    ]);
    setInputVal('');

    // Navegación suave directa sin interferencia de scroll
    if (cleanCmd === 'projects') {
      setTimeout(() => {
        const el = document.getElementById('proyectos');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else if (cleanCmd === 'contact') {
      setTimeout(() => {
        const el = document.getElementById('contacto');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }

    if (onCommandExecuted) {
      onCommandExecuted(cleanCmd);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <div className="terminal-card flex-grow-1 d-flex flex-column" data-testid="interactive-terminal">
      {/* Barra de título única de la terminal estilo ventana macOS/Minimalista */}
      <div className="terminal-header d-flex align-items-center justify-content-between px-3 px-md-4 py-2">
        <div className="d-flex align-items-center gap-2">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <span className="terminal-title ms-2 font-monospace">bash - root@vguzc:~</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="badge-online font-monospace small text-success d-flex align-items-center gap-1">
            <span className="pulse-dot"></span>
            <span>● ONLINE</span>
          </span>
          <span className="terminal-plus-icon text-muted font-monospace d-none d-sm-inline" aria-hidden="true">+</span>
        </div>
      </div>

      {/* Cuerpo unificado de la terminal: un solo lienzo sin cajas interiores duplicadas */}
      <div 
        ref={terminalScrollRef}
        className="terminal-inner-content d-flex flex-column flex-grow-1 p-3 p-md-4" 
        role="region" 
        aria-label="Consola de comandos"
      >
        {/* Encabezado: Headline + Comentarios de ROL y BIO */}
        {children}

        {/* Flujo de historial de comandos (integrado directamente en el lienzo) */}
        <div className="terminal-body font-monospace my-2">
          {history.map((line, index) => (
            <div key={index} className={`terminal-line terminal-${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>

        {/* Barra de entrada de comandos integrada */}
        <form onSubmit={handleSubmit} className="terminal-input-bar d-flex align-items-center px-3 py-2 mt-auto mb-2">
          <span className="text-success font-monospace me-2">root@vguzc:~$</span>
          <input
            type="text"
            className="terminal-input font-monospace flex-grow-1"
            placeholder="Escribe 'help', 'projects', 'skills'..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            aria-label="Línea de comando interactiva"
          />
          <button type="submit" className="btn btn-sm btn-outline-success font-monospace px-3 ms-2">
            Ejecutar
          </button>
        </form>

        {/* Botones de comandos rápidos */}
        <div className="terminal-quick-actions d-flex flex-wrap gap-2 align-items-center pt-1">
          <span className="small text-muted font-monospace me-1">Comandos rápidos:</span>
          {['help', 'skills', 'projects', 'contact', 'status', 'matrix', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              className="btn btn-xs quick-cmd-btn font-monospace"
              onClick={() => executeCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
