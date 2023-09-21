import { app, BrowserWindow } from 'electron'
import path from 'path'


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if ( require( 'electron-squirrel-startup' ) ) {
	app.quit()
}


const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	})

	// and load the index.html of the app.
	mainWindow.loadURL( MAIN_WINDOW_WEBPACK_ENTRY )
}


app.on( 'ready', createWindow )


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on( 'window-all-closed', () => {
	if ( 'darwin' !== process.platform ) {
		app.quit()
	}
})


app.on( 'activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if ( 0 === BrowserWindow.getAllWindows().length ) {
		createWindow()
	}
})
