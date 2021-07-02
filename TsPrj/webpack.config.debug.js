const path = require('path');

/** 忽略编辑的第三方库 */
const externals = {
	'ue': 'commonjs2 ue',
	'react-umg': 'commonjs2 react-umg',
	'puerts': 'commonjs2 puerts',
};

module.exports = {
	entry: './src/GameMain.ts',
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: '/node_modules/'
		}
		]
	},
	
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],

	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../Content/JavaScript')
	},
	externals
};