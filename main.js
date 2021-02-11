import { app, BrowserWindow, Menu, ipcMain, dialog, Tray, nativeImage, globalShortcut, Notification } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import url from 'url';
//import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

const isMac = process.platform === 'darwin';

let win = null;
let tray;

app.on('ready', () => {
    
    getOrCreateWindow();
    setupMenu();
    setupIpcMain();
    //setupTray();
    //setupGlobalShortcuts();

});

app.on('activate', () => {

    getOrCreateWindow();

});

app.on('will-quit', () => {

    globalShortcut.unregisterAll();

});

app.on('window-all-closed', () => {

    if( process.platform !== 'darwin' )
    {

        app.quit();

    }

});


function getOrCreateWindow()
{

    if( win !== null ) 
    {

        return win;

    }   

    win  = new BrowserWindow({
    title: app.name,
    width: 1200,
    height: 900,
    webPreferences: {
        nodeIntegration: true
    }
    });

    win.on('closed', () => {
    
        win = null;

    });
    
    loadApplication();

    return win;

}

function loadApplication()
{

    if( !win ) 
    {

        return;

    }

    win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
    }));


    //installExtension(REACT_DEVELOPER_TOOLS)
    //.then((name) => console.log(`Added Extension:  ${name}`))
    //.catch((err) => console.log('An error occurred: ', err));

    //win.webContents.openDevTools();

}

function setupMenu() {

    const template = [
    {
    label: "Ferramentas",
    submenu: [
        {
            label: 'Gerador de UUID',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/GeradorUUID')
        }, 
		{
            label: 'Crypto / Hashing',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/CryptoHashing')
        }, 
		{
            label: 'Crypto / HMAC',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/CryptoHMAC')
        }, 
		{
            label: 'Crypto / Ciphers',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/CryptoCiphers')
        }, 
		{
            label: 'Formatar JSON',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/FormatarJSON')
        }, 
		{
            label: 'Encode / Decode',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/EncodeDecode')
        }, 
		{
            label: 'URL Parser',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/URLParser')
        }, 
		{
            label: 'JWT Decoder',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/JWTDecoder')
        }, 
		{
            label: 'Gerar QRCode',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/QRCodeGerador')
        }, 
		{
            label: 'Imagem Encoder',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/ImagemEncoder')
        }, 
		{
            label: 'Imagem Trim',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/ImagemTrim')
        }, 
		{
            label: 'Consultar SSL',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/ConsultarSSL')
        }, 
		{
            label: 'Consultar Placa',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/ConsultarPlaca')
        }, 
		{
            label: 'Consultar CNPJ',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/ConsultarCNPJ')
        }, 
		{
            label: 'Gerar Pessoa',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/GerarPessoa')
        }, 
		{
            label: 'Gerar Dados',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/GerarDados')
        }, 
		{
            label: 'Validar Dados',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/ValidarDados')
        }, 
		{
            label: 'Validar Boleto',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/ValidarBoleto')
        }, 
		{
            label: 'PIX',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/PIX')
        }, 
		{
            label: 'GeoIP',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/GeoIP')
        }, 
		{
            label: 'NsLookup',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/NsLookup')
        }, 
		{
            label: 'Ping',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/Ping')
        }, 
		{
            label: 'Tracert',
            click: () => getOrCreateWindow().webContents.send('navigateTo', '/Tracert')
        },
        {
        type: 'separator'
        }, 
        {
            label: 'Atualizar',
            click: getOrCreateWindow().show()
        }, 
        {
            label: 'Sair',
            role: 'quit'
        }
    ]
    }, 
    {
    label: '?',
    submenu: [
        {
            label: 'Sobre...',
            click: () => {

                getOrCreateWindow();
                getOrCreateWindow().webContents.send('navigateTo', '/Sobre');

            }
        },
        {
            type: 'separator'
        },
        {
            label: "Debug...",
            click: () => {

                getOrCreateWindow();
                getOrCreateWindow().webContents.toggleDevTools();

            }
        },
    ]
    },

    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

}

function setupTray() {

    const template = [
    {
        label: 'Sobre...',
        click: () => {

            getOrCreateWindow().show();
            getOrCreateWindow().webContents.send('navigateTo', '/Sobre');

        }
    },
    {
        type: 'separator'
    },
    {
        label: "Debug...",
        click: () => {

            getOrCreateWindow().show();
            getOrCreateWindow().webContents.toggleDevTools();

        }
    }
    ];

    if( tray ) 
    {

        tray.destroy();

    }

    tray = new Tray(createTrayIcon());
    tray.setContextMenu(Menu.buildFromTemplate(template));
    tray.setToolTip(app.name);
    
}

function createTrayIcon() {

    const appIconPath = path.join(__dirname, "assets", "icon.png");
    
    return appIconPath;

}

function setupGlobalShortcuts() {

    //globalShortcut.register('Alt+1', () => getOrCreateWindow().show());

}

function setupIpcMain()
{

    ipcMain.on('rendererAppStarted', () => {

        console.log("App Iniciado");

    });
    
    ipcMain.on('SalvarTextoParaArquivo', (_event, Texto, ArqNome) => {

        ipcMain_SalvarTextoParaArquivo(Texto, ArqNome);

    });
	
	ipcMain.on('SalvarBinarioParaArquivo', (_event, Texto, ArqNome) => {

        ipcMain_SalvarBinarioParaArquivo(Texto, ArqNome);

    });

    ipcMain.on('ExibirNotificacao', (_event, Texto, Titulo, Icone, Callback) => {

        ipcMain_ExibirNotificacao(Texto, Titulo, Icone, Callback);

    });

}

function ipcMain_SalvarTextoParaArquivo(Texto, ArqNome)
{

    const documentsFolder = app.getPath('documents');
    const toLocalPath = path.resolve(documentsFolder, ArqNome);

    dialog.showSaveDialog(win, { defaultPath: toLocalPath }).then((result) => {

        const fullFilename = result.filePath;

        if(fullFilename) 
        {

            fs.writeFile(fullFilename, Texto, 'utf-8', (err) => {

                win.webContents.send('displayAlertMessage', {
                open: true,
                message: `File saved successfully: [${fullFilename}]`,
                type: 'success',
                autoHideDuration: 4000
                });

            });

        }

    });

}

function ipcMain_SalvarBinarioParaArquivo(Texto, ArqNome)
{

    const documentsFolder = app.getPath('documents');
    const toLocalPath = path.resolve(documentsFolder, ArqNome);

    dialog.showSaveDialog(win, { defaultPath: toLocalPath }).then((result) => {

        const fullFilename = result.filePath;

        if(fullFilename) 
        {

            fs.writeFile(fullFilename, Texto, 'binary', (err) => {

                win.webContents.send('displayAlertMessage', {
                open: true,
                message: `File saved successfully: [${fullFilename}]`,
                type: 'success',
                autoHideDuration: 4000
                });

            });

        }

    });

}

function ipcMain_ExibirNotificacao(Texto, Titulo, Icone)
{

    const NotificationCfg = {
    title: Titulo,
    body: Texto,
    icon: ( Icone != "" ) ? path.join(__dirname, "assets", Icone) : ""
    };

    const NotificationObj = new Notification(NotificationCfg);

    NotificationObj.show();

    /*
    NotificationObj.on('click', (event, arg) => {
        
        

    });
    */

}