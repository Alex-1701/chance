const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const server = require('./server');

console.log('isDev:', isDev);

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

console.log(__dirname);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      webSecurity: false,
    },
  });
  mainWindow.webContents.openDevTools();

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '/index.html')}`,
  );
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  app.quit();
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
