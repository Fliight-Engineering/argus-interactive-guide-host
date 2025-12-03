const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => {
    console.log('[Preload] Minimize called');
    return ipcRenderer.invoke('window-minimize');
  },
  close: () => {
    console.log('[Preload] Close called');
    return ipcRenderer.invoke('window-close');
  },
  // Add sync test
  test: () => {
    console.log('[Preload] Test API working');
    return 'API is available';
  }
});

