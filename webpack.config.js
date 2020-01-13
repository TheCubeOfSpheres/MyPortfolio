const path = require('path');

module.exports = {
	entry: './js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/, //regular expression
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['react']
			}
		}]
	}
}