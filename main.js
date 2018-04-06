// @flow
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win ;

function createWindow () {  

	// create Window
	win = new BrowserWindow({width: 800, height: 600, icon: __dirname + '/img/fd08c5c6ff4199c6fe2463970e645d84--icon-png-business.jpg'});

	// load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));

	// Open devtools
	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
}

//reuse
app.on('ready', () => {
  // create main browser window
  mainWindow = new BrowserWindow({
      titleBarStyle: 'hidden',
      width: 1920,
      height: 1080,
      show: false // don't show the main window
  });
  // create a new `splash`-Window 
  splash = new BrowserWindow({width: 810, height: 610, transparent: true, frame: false, alwaysOnTop: true});
  splash.loadURL(`file://${__dirname}/splash.html`);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  
  // if main window is ready to show, then destroy the splash window and show up the main window
  mainWindow.once('ready-to-show', () => {
    splash.destroy();
    mainWindow.show();
  });
});

//reuse//

// quit
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
