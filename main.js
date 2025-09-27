
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Stwórz okno przeglądarki.
  const win = new BrowserWindow({
    width: 500,
    height: 950,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Zezwól na ładowanie skryptów z zewnętrznych źródeł (CDN)
      // Jest to konieczne, ponieważ aplikacja pobiera React i inne biblioteki z esm.sh
      webSecurity: false 
    },
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png') // Opcjonalnie, dodaj ikonę
  });

  // i załaduj index.html aplikacji.
  win.loadFile('index.html');

  // Otwórz Narzędzia Deweloperskie (opcjonalnie).
  // win.webContents.openDevTools();
}

// Ta metoda zostanie wywołana, gdy Electron zakończy
// inicjalizację i będzie gotowy do tworzenia okien przeglądarki.
// Niektóre interfejsy API mogą być używane tylko po wystąpieniu tego zdarzenia.
app.whenReady().then(createWindow);

// Zamknij aplikację, gdy wszystkie okna zostaną zamknięte, z wyjątkiem macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Na macOS często odtwarza się okno w aplikacji, gdy
  // ikona dokująca jest kliknięta i nie ma innych otwartych okien.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});