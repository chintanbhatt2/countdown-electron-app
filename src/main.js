const electron = require('electron')
const countdown = require('./countdown')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain
app.on('ready', _ => {
    console.log('App is ready to go!')
    mainWindow = new BrowserWindow({
        height: 400,
        width: 800,
    })

    mainWindow.loadURL(`file://${__dirname}/countdown.html`)

    mainWindow.on('closed', _ =>{
        console.log('Closing main window!')
        mainWindow = null
    })
}) 

ipc.on('countdown-start', _ => {
    countdown(count => {
        mainWindow.webContents.send('countdown', count)
    })
})