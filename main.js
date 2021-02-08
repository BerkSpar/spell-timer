const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const onAppReady = function () {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 317,
        x: 0,
        y: 300,
        alwaysOnTop: true,
        transparent: true,
        resizable: false,
        frame: false,
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null
    });
};

app.on('ready', () => setTimeout(onAppReady, 500));