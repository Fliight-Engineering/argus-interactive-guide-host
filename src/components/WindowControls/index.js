import React from 'react';
import styles from './styles.module.css';

export default function WindowControls() {
  // Check if we're running in Electron
  const isElectron = typeof window !== 'undefined' && window.electronAPI;

  // Test API on mount
  React.useEffect(() => {
    if (window.electronAPI) {
      console.log('[WindowControls] electronAPI available:', Object.keys(window.electronAPI));
      if (window.electronAPI.test) {
        console.log('[WindowControls] Test result:', window.electronAPI.test());
      }
    } else {
      console.log('[WindowControls] electronAPI NOT available');
    }
  }, []);

  const handleMinimize = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[WindowControls] Minimize button clicked');
    console.log('[WindowControls] window.electronAPI:', window.electronAPI);
    if (window.electronAPI && window.electronAPI.minimize) {
      console.log('[WindowControls] Calling minimize...');
      window.electronAPI.minimize()
        .then(() => console.log('[WindowControls] Minimize success'))
        .catch(err => console.error('[WindowControls] Minimize error:', err));
    } else {
      console.error('[WindowControls] electronAPI.minimize not available');
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[WindowControls] Close button clicked');
    if (window.electronAPI && window.electronAPI.close) {
      console.log('[WindowControls] Calling close...');
      window.electronAPI.close()
        .then(() => console.log('[WindowControls] Close success'))
        .catch(err => console.error('[WindowControls] Close error:', err));
    } else {
      console.error('[WindowControls] electronAPI.close not available');
    }
  };

  // Only show in Electron
  if (!isElectron) {
    console.log('[WindowControls] Not in Electron, hiding');
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

