module.exports = {
	packagerConfig: {
		asar: true,
		icon: './src/icons/icon',
	},
	rebuildConfig: {},
	makers: [
		{
			name: '@electron-forge/maker-squirrel',
			config: {},
		},
		{
			name: '@electron-forge/maker-zip',
			platforms: [
				'darwin',
			],
		},
		{
			name: '@electron-forge/maker-deb',
			config: {
				options: {
					icon: './src/icons/icon.png',
				},
			},
		},
		// {
		// 	name: '@electron-forge/maker-rpm',
		// 	config: {},
		// },
	],
	plugins: [
		{
			name: '@electron-forge/plugin-auto-unpack-natives',
			config: {},
		},
		{
			name: '@electron-forge/plugin-webpack',
			config: {
				mainConfig: './webpack.main.config.js',
				renderer: {
					config: './webpack.renderer.config.js',
					entryPoints: [
						{
							html: './src/index.html',
							js: './src/renderer.js',
							name: 'main_window',
							preload: {
								js: './src/preload.js',
							},
						},
					],
				},
			},
		},
	],
	publishers: [
		{
			name: '@electron-forge/publisher-github',
			config: {
				repository: {
					owner: 'RobRotell',
					name: 'janus',
				},
				prerelease: false,
				draft: true,
			},
		},
	],
}
