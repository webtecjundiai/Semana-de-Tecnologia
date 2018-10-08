const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

// SET ENV
process.env.NODE_ENV = 'production';

let mainWindow;
let addWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Sair do aplicativo quando fechar
    mainWindow.on('closed', function(){
        app.quit();
    });

    // Construir o menu pelo template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Inserir Menu
    Menu.setApplicationMenu(mainMenu);
});

function createAddWindow(){
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Adcionar Items a Lista'
    });

    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    addWindow.on('close', function(){
        addWindow = null;
    });
}

// receber item:add
ipcMain.on('item:add', function(e, item){
    console.log(item);
    mainWindow.webContents.send('item:add', item);
    // addWindow.close();
});

// Criar menu template
const mainMenuTemplate = [
  {
    label: "Arquivo",
    submenu: [
      {
        label: "Adicionar Item",
        accelerator: process.platform == "darwin" ? "Command+N" : "Ctrl+N",
        click() {
          createAddWindow();
        }
      },
      {
        label: "Limpar Items",
        accelerator: process.platform == "darwin" ? "Command+delete" : "Ctrl+Delete",
        click() {
          mainWindow.webContents.send("item:clear");
        }
      },
      {
        label: "Sair",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];

// Se for mac, adicionar um objeto de menu vazio



if(process.env.NODE_ENV !== ''){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu:[
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' :
                'Ctrl+I',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}