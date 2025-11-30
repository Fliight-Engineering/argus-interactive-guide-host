import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const CHECK_INTERVAL = 5 * 60 * 1000; // Check every 5 minutes

export default function VersionChecker() {
  const versionFileUrl = useBaseUrl('/version.json');
  const [currentVersion, setCurrentVersion] = useState(null);
  const [latestVersion, setLatestVersion] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isChecking, setIsChecking] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [buildDate, setBuildDate] = useState(null);

  // Load current version on mount
  useEffect(() => {
    loadCurrentVersion();
    setupOnlineListener();
    startPeriodicCheck();
  }, []);

  const loadCurrentVersion = async () => {
    try {
      const response = await fetch(versionFileUrl, { 
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setCurrentVersion(data.version);
          setBuildDate(data.buildDate);
        } else {
          // Response is not JSON (might be HTML 404 page)
          console.warn('version.json returned non-JSON content');
          setCurrentVersion('0.0.1');
        }
      } else {
        // File not found, use default
        setCurrentVersion('0.0.1');
      }
    } catch (error) {
      // Silently fail and use default version
      setCurrentVersion('0.0.1');
    }
  };

  const checkForUpdates = async () => {
    if (!isOnline || !currentVersion) {
      return;
    }

    setIsChecking(true);
    try {
      // Try to fetch latest version from remote
      const response = await fetch(
        'https://raw.githubusercontent.com/Fliight-Engineering/argus-interactive-guide/main/static/version.json',
        { 
          cache: 'no-store',
          headers: {
            'Accept': 'application/json'
          }
        }
      );

      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const latest = await response.json();
          setLatestVersion(latest.version);

          // Compare versions (simple string comparison, can be enhanced)
          if (latest.version && latest.version !== currentVersion) {
            setUpdateAvailable(true);
          } else {
            setUpdateAvailable(false);
          }
        } else {
          // Got HTML instead of JSON (404 page or redirect)
          setUpdateAvailable(false);
        }
      } else {
        // 404 or other error - no update check available
        setUpdateAvailable(false);
      }
    } catch (error) {
      // Silently fail - can't check for updates
      setUpdateAvailable(false);
    } finally {
      setIsChecking(false);
    }
  };

  const setupOnlineListener = () => {
    const handleOnline = () => {
      setIsOnline(true);
      checkForUpdates(); // Check immediately when coming online
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  };

  const startPeriodicCheck = () => {
    // Check immediately
    if (isOnline) {
      checkForUpdates();
    }

    // Then check periodically
    const interval = setInterval(() => {
      if (isOnline) {
        checkForUpdates();
      }
    }, CHECK_INTERVAL);

    return () => clearInterval(interval);
  };

  const handleDownloadUpdate = () => {
    // Open the releases page or download link
    window.open(
      'https://github.com/Fliight-Engineering/argus-interactive-guide/releases/latest',
      '_blank'
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return '';
    }
  };

  // Determine status text
  const getStatusText = () => {
    if (!isOnline) {
      return 'Offline';
    }
    if (isChecking) {
      return 'Checking...';
    }
    if (updateAvailable && latestVersion) {
      return `Update available: v${latestVersion}`;
    }
    if (currentVersion) {
      return 'Up to date';
    }
    return 'Loading...';
  };

  const statusText = getStatusText();
  const isUpdateAvailable = isOnline && !isChecking && updateAvailable && latestVersion;

  return (
    <div className={styles.versionContainer}>
      <div className={styles.versionInfo}>
        <span className={styles.versionLabel}>Argus Documentation:</span>
        <span className={styles.versionNumber}>v{currentVersion || '0.0.1'}</span>
        <span className={styles.statusText}>({statusText})</span>
        {isUpdateAvailable && (
          <button
            className={styles.updateButton}
            onClick={handleDownloadUpdate}
            title="Download latest version"
          >
            Download
          </button>
        )}
      </div>
    </div>
  );
}

