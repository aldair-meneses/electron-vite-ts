import { app, BrowserWindow } from "electron";
const path = require('path');
const doc = path.join(__dirname, 'preload.js');

function createWindow(): void{
    const win = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: doc
        }
    })

    if(process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {
        win.loadFile(path.join(__dirname,'./index.html'));
    }
    
}

app.whenReady().then(() => {
    createWindow();
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
})