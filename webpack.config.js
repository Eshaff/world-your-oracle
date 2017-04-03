var path = require("path");
var webpack = require("webpack");

module.exports = {
	resolve: {
		extensions: [".js", "min.js"],
		modules: [
			//"node_modules",
			path.resolve(__dirname, "app"),
			path.resolve(__dirname, "app/lib"),
			path.resolve(__dirname, "app/lib/kendo-ui-core/js"),
			path.resolve(__dirname, "app/lib/jQueryEventCalendar/js")
			//<script src="app/lib/jQueryEventCalendar/js/moment.js" type="text/javascript"></script>
			// <script src="app/lib/jQueryEventCalendar/js/jquery.eventCalendar.js" type="text/javascript"></script>




		]
	},
	entry: "./app/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
};