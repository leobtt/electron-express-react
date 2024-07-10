const { app, BrowserWindow } = require("electron");
const path = require("path");
const express = require("express");

// Função para criar a janela principal do Electron
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, "preload.js"),
        },
    });

    win.webContents.openDevTools();

    win.loadFile("index.html");
}

// Configuração do servidor Express
const expressApp = express();
const port = 3000;

expressApp.get("/api/message", (req, res) => {
    res.json({ message: "Olá do Express! response of api" });
});

expressApp.listen(port, () => {
    console.log(`Servidor Express rodando em http://localhost:${port}`);
});

// Eventos do ciclo de vida do aplicativo Electron
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
