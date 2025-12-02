import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function WindowControls() {
  const [isElectron, setIsElectron] = useState(false);

  useEffect(() => {
    // Check if we're running in Electron (via preload script)
    if (typeof window !== 'undefined' && window.electronAPI) {
      setIsElectron(true);
    }
  }, []);

  const handleMinimize = () => {
    if (window.electronAPI) {
      window.electronAPI.minimize();
    }
  };

  const handleClose = () => {
    if (window.electronAPI) {
      window.electronAPI.close();
    }
  };

  // Only show in Electron
  if (!isElectron) {
    return null;
  }

  return (
    <div className={styles.windowControls}>
      <button
        className={styles.controlButton}
        onClick={handleMinimize}
        aria-label="Minimize window"
        title="Minimize"
      >
        −
      </button>
      <button
        className={styles.controlButton}
        onClick={handleClose}
        aria-label="Close window"
        title="Close"
      >
        ×
      </button>
    </div>
  );
}

