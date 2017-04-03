var path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', 'min.js' ],
		modules: [
			//"node_modules",
			path.resolve(__dirname, "app"),
			path.resolve(__dirname, "app/lib"),
			path.resolve(__dirname, "app/lib/kendo-ui-core/js")


		]
	},
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};