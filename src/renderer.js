const electron = require('electron')

const ipc = electron.ipcRenderer

console.log('in renderer!')
document.getElementById('start').addEventListener('click', _ => {
    console.log('Start clicked')
    ipc.send('countdown-start')
})

ipc.on('countdown', (evt, count) => {
    document.getElementById('count').innerHTML = count
})