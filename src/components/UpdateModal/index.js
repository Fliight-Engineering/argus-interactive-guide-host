import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function UpdateModal({ isOpen, onClose, currentVersion, latestVersion }) {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState('-- MB/s');
  const [remaining, setRemaining] = useState('Calculating...');
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setSpeed('-- MB/s');
      setRemaining('Calculating...');
      setIsDownloading(false);
      setIsComplete(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !isDownloading && !isComplete) {
      // Start download simulation
      setIsDownloading(true);
      setProgress(0);
      
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 15;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setIsDownloading(false);
          setIsComplete(true);
          setSpeed('Complete!');
          setRemaining('Installing...');
        } else {
          setProgress(Math.min(currentProgress, 100));
          // Simulate speed (random between 2-8 MB/s)
          const randomSpeed = (2 + Math.random() * 6).toFixed(1);
          setSpeed(`${randomSpeed} MB/s`);
          // Simulate remaining time
          const remainingPercent = 100 - currentProgress;
          const estimatedSeconds = Math.ceil(remainingPercent / (randomSpeed * 10));
          const mins = Math.floor(estimatedSeconds / 60);
          const secs = estimatedSeconds % 60;
          setRemaining(mins > 0 ? `${mins}m ${secs}s remaining` : `${secs}s remaining`);
        }
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [isOpen, isDownloading, isComplete]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            {isComplete ? 'Update Ready' : 'Downloading Update'}
          </h3>
          {!isComplete && (
            <button className={styles.closeButton} onClick={onClose} aria-label="Close">
              ×
            </button>
          )}
        </div>
        
        {!isComplete && (
          <>
            <div className={styles.progressContainer}>
              <div 
                className={styles.progressBar} 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className={styles.stats}>
              <span className={styles.percent}>{Math.round(progress)}%</span>
              <span>{speed}</span>
              <span>{remaining}</span>
            </div>
          </>
        )}
        
        {isComplete && (
          <div className={styles.completeContent}>
            <p className={styles.completeMessage}>
              Version {latestVersion} has been downloaded and is ready to install.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton} onClick={onClose}>
                Restart Now
              </button>
              <button className={styles.secondaryButton} onClick={onClose}>
                Later
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

