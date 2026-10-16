import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const COMMANDS = {
  help: 'Comandos disponibles: projects | skills | bio | status | matrix | clear',
  projects: 'Navegando a la sección de proyectos... [OK]',
  skills: 'Skills: React 18, Bootstrap 5, JavaScript (ES6+), Jasmine, Karma, OWASP Top 10, Git',
  bio: 'Vicente Guzmán: Desarrollador Fullstack enfocado en software escalable y desarrollo seguro (Duoc UC).',
  status: 'STATUS: Sistema operativo nominal | Pruebas unitarias: 16/16 OK | Modo: Minimalista CRT',
  matrix: 'Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐇'
};

const Terminal = ({ onCommandExecuted }) => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Wake up, Neo... [Terminal v2.4 inicializada]' },
    { type: 'system', text: "Escribe 'help' o haz clic en los botones para interactuar." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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

    if (cleanCmd === 'projects') {
      const el = document.getElementById('proyectos');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (cleanCmd === 'contact') {
      const el = document.getElementById('contacto');
      el?.scrollIntoView({ behavior: 'smooth' });
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
    <div className="terminal-card shadow-lg" data-testid="interactive-terminal">
      {/* Barra de título de la terminal */}
      <div className="terminal-header d-flex align-items-center justify-content-between px-3 py-2">
        <div className="d-flex align-items-center gap-2">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <span className="terminal-title ms-2">bash - root@vguzc:~</span>
        </div>
        <span className="badge bg-dark text-success border border-success-subtle font-monospace small">
          ● ONLINE
        </span>
      </div>

      {/* Pantalla CRT de la terminal */}
      <div className="terminal-body p-3 font-monospace" role="region" aria-label="Consola de comandos">
        {history.map((line, index) => (
          <div key={index} className={`terminal-line terminal-${line.type}`}>
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input de comandos */}
      <form onSubmit={handleSubmit} className="terminal-input-bar d-flex align-items-center px-3 py-2 border-top border-secondary-subtle">
        <span className="text-success font-monospace me-2">root@vguzc:~$</span>
        <input
          type="text"
          className="terminal-input font-monospace flex-grow-1"
          placeholder="Escribe 'help', 'projects', 'status'..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          aria-label="Línea de comando interactiva"
        />
        <button type="submit" className="btn btn-sm btn-outline-success font-monospace px-3 ms-2">
          Ejecutar
        </button>
      </form>

      {/* Botones de comando rápido (gamificación interactiva) */}
      <div className="terminal-quick-actions px-3 py-2 d-flex flex-wrap gap-2 align-items-center">
        <span className="small text-muted font-monospace">Acciones rápidas:</span>
        {['help', 'status', 'projects', 'skills', 'matrix', 'clear'].map((cmd) => (
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
  );
};

export default Terminal;
