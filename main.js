const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        // Make it look like a game window, not a standard browser
        autoHideMenuBar: true,
        backgroundColor: '#0f0e17', 
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        // We could use fullscreen: true, but a fixed window is safer to start
    });

    // Load our game
    mainWindow.loadFile('index.html');
}

// When Electron is ready, create the window
app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
