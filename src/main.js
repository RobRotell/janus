import { app, BrowserWindow, shell, Menu } from 'electron'
import electronSquirrelStartup from 'electron-squirrel-startup'
import 'dotenv/config'


// handle creating/removing shortcuts on Windows when installing/uninstalling.
if ( electronSquirrelStartup ) {
	app.quit()
}


const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 700,
		height: 700,
		icon: './icons/icon.png',
		webPreferences: {
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	})

	// and load the index.html of the app.
	mainWindow.loadURL( MAIN_WINDOW_WEBPACK_ENTRY )

	const menu = Menu.getApplicationMenu()

	// hide "Window" and "Help" menu items
	const items = menu?.items.filter( item => ( 'help' !== item.role && 'windowmenu' !== item.role ) )

	// add menu item linking to Github repo
	items.push({
		label: 'About',
		submenu: [
			{
				label: 'Repo',
				click() {
					shell.openExternal( 'https://github.com/RobRotell/janus' )
				},
			},
		],
	})

	Menu.setApplicationMenu( Menu.buildFromTemplate( items ) )
}


app.on( 'ready', createWindow )


// quit when all windows are closed, except on macOS where it's common for applications and their menu bar to stay
// active until the user quits explicitly with Cmd + Q
app.on( 'window-all-closed', () => {
	if ( 'darwin' !== process.platform ) {
		app.quit()
	}
})


app.on( 'activate', () => {

	// on macOS it's common to re-create window in app when dock icon is clicked and no other windows open
	if ( 0 === BrowserWindow.getAllWindows().length ) {
		createWindow()
	}
})
