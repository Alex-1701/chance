const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
// const server = require('../server');

console.log('isDev:', isDev);

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

console.log(__dirname);

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1000, height: 800 });
  mainWindow.webContents.openDevTools();

  mainWindow.setMenuBarVisibility(false);

  Window.once('ready-to-show', () => {
    console.log('sending window to load');
    Window.show();
    Window.webContents.send('loadWindow', 'WindowName');
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '/index.html')}`,
  );
  mainWindow.on('closed', () => (mainWindow = null));
}

app.commandLine.appendSwitch(
  'disable-features',
  'MediaFoundationAsyncH264Encoding',
);

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  app.quit();
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
