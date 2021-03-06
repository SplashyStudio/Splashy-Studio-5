const {app, BrowserWindow} = require('electron');
function createSS5() {
     const startup = new BrowserWindow({minWidth: 1300, minHeight: 725, frame: false, transparent: true, icon: 'ss5Logo.png', webPreferences: {nodeIntegration: true, devTools: false}});
     startup.loadFile("startup.html");
     setTimeout(() => {
          const ss5 = new BrowserWindow({minWidth: 1300, minHeight: 725, frame: false, icon: 'ss5Logo.png', webPreferences: {nodeIntegration: true}});
          ss5.loadFile("ss5.html");
          startup.close();
     }, 2000);
}
app.whenReady().then(createSS5);
