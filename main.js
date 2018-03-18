// @flow
const {app,BrowserWindow} = require ('electron');
const path = require ('path');
const url = require ('url');

let win;

function createWindow(){
    // create Window
    win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/fd08c5c6ff4199c6fe2463970e645d84--icon-png-business.jpg'});

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

app.on('ready', createWindow);

// quit
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});