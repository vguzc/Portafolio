import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [xp, setXp] = useState(100);
  const [achievement, setAchievement] = useState('');
  const [unlocked, setUnlocked] = useState([]);

  const triggerAchievement = (id, title, points) => {
    // Validación estricta: si el logro ya fue adquirido en la sesión, no vuelve a saltar
    if (unlocked.includes(id)) return;

    setUnlocked((prev) => [...prev, id]);
    setXp((prev) => prev + points);
    setAchievement(`+${points} XP: ${title}`);
    setTimeout(() => {
      setAchievement('');
    }, 3500);
  };

  return (
    <div className="portfolio-app">
      {achievement && (
        <aside
          className="achievement-toast font-monospace position-fixed bottom-0 end-0 m-4 shadow-lg p-3 d-flex align-items-center gap-2"
          role="status"
          aria-live="polite"
        >
          <span className="dot dot-green"></span>
          <i className="bi bi-trophy-fill text-warning fs-5" aria-hidden="true"></i>
          <div>
            <div className="small text-muted fw-bold">LOGRO DESBLOQUEADO</div>
            <div className="text-light fw-semibold">{achievement}</div>
          </div>
        </aside>
      )}

      <main>
        <Hero onCommandExecuted={() => triggerAchievement('terminal_cmd', 'Comando Terminal Ejecutado', 25)} />
        <Projects onFilterUsed={() => triggerAchievement('project_filter', 'Filtro de Proyectos Usado', 25)} />
        <News />
        <Contact onMessageSent={() => triggerAchievement('contact_sent', 'Transmisión Enviada', 50)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
