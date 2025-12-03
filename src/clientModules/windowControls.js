// Client module to handle window controls across navigation
export function onRouteDidUpdate({location, previousLocation}) {
  // This function is called on every route change
  setupWindowControls();
}

function setupWindowControls() {
  // Wait for DOM to be ready
  if (typeof window === 'undefined') return;
  
  // Check if we're in Electron
  if (!window.electronAPI) {
    console.log('[WindowControls Client] Not in Electron environment');
    return;
  }

  console.log('[WindowControls Client] Setting up window controls');

  // Find buttons
  const minimizeBtn = document.getElementById('minimize-btn');
  const closeBtn = document.getElementById('close-btn');

  if (!minimizeBtn || !closeBtn) {
    console.log('[WindowControls Client] Buttons not found in DOM');
    return;
  }

  // Remove old listeners by cloning nodes
  const newMinimizeBtn = minimizeBtn.cloneNode(true);
  const newCloseBtn = closeBtn.cloneNode(true);
  minimizeBtn.parentNode.replaceChild(newMinimizeBtn, minimizeBtn);
  closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

  // Add new listeners
  newMinimizeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[WindowControls Client] Minimize clicked');
    if (window.electronAPI && window.electronAPI.minimize) {
      window.electronAPI.minimize()
        .then(() => console.log('[WindowControls Client] Minimize success'))
        .catch(err => console.error('[WindowControls Client] Minimize error:', err));
    }
  });

  newCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('[WindowControls Client] Close clicked');
    if (window.electronAPI && window.electronAPI.close) {
      window.electronAPI.close()
        .then(() => console.log('[WindowControls Client] Close success'))
        .catch(err => console.error('[WindowControls Client] Close error:', err));
    }
  });

  console.log('[WindowControls Client] Event listeners attached');
}

// Initial setup
if (typeof window !== 'undefined') {
  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(setupWindowControls, 500);
    });
  } else {
    setTimeout(setupWindowControls, 500);
  }
}
