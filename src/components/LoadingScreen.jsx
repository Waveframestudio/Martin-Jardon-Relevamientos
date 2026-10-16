import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onFinish, minDuration = 1200 }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
    }, minDuration);

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, minDuration + 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [minDuration, onFinish]);

  return (
    <div className={`loading-screen ${fading ? 'is-fading-out' : ''}`} aria-label="Cargando...">
      <div className="loading-center">
        <div className="loading-logo-halo"></div>
        <div className="loading-logo-wrap">
          <img 
            src="/logo-remastered.webp" 
            alt="Martín Jardón Relevamientos" 
            className="loading-logo-img"
            width="90"
            height="90"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
