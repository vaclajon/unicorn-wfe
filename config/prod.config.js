let path = require('path');

let DefinePlugin = require('webpack/lib/DefinePlugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
let UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ABSOLUTE_BASE = path.normalize(path.join(__dirname, '..'));

module.exports = {
	entry: [
		// necessary polyfills
		'core-js/es6/symbol.js',
		'core-js/es6/object.js',
		'core-js/es6/promise.js',
		'core-js/es6/function.js',
		'core-js/es6/string.js',
		'core-js/es6/array.js',
		'core-js/es6/map.js',
		'core-js/es6/set.js',

		// the entry point of our app
		path.join(ABSOLUTE_BASE, 'src', 'index.js')
	],

	output: {
		// the output bundle filename
		filename: 'assets/js/bundle.js',

		// the output directory as an absolute path
		path: path.join(ABSOLUTE_BASE, 'target', 'classes', 'public'),

		// specifies the public URL address of the output files when referenced in a browser
		publicPath: ''
	},

	// controls if and how Source Maps are generated
	devtool: 'cheap-module-source-map',

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 25000,
						name: 'assets/images/[name]-[hash].[ext]'
					}
				}
			},
			{
				test: /\.(otf|eot|svg|ttf|woff|woff2)/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'assets/fonts/[name]-[hash].[ext]',
						size: '6'
					}
				}
			},
			{
				test: /\.scss/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							query: { modules: false, sourceMaps: true }
						},
						{
							loader: 'postcss-loader',
							options: { plugins: () => [require('autoprefixer')] }
						},
						{
							loader: 'sass-loader',
							query: { sourceMaps: true }
						}
					]
				})
			},
			{
				test: /\.html$/,
				loader: "raw-loader",
				options: {
					attrs: false
				}
			},
			{
				test: /\.(js)?$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				include: [
					path.join(ABSOLUTE_BASE, 'src')
				]
			}
		]
	},

	plugins: [
		// extract chunks of CSS into a single stylesheet
		new ExtractTextPlugin({
			filename: 'assets/css/[name]-[contenthash].css',
			allChunks: true
		}),

		// select index.html template
		new HtmlWebpackPlugin({
			template: path.join(ABSOLUTE_BASE, 'src', 'index.html')
		}),

		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),

		// configure global / shared loader options
		new LoaderOptionsPlugin({
			// whether loaders should to switch to minimize mode
			minimize: true,
			// whether loaders should to switch to debug mode
			debug: false
		}),

		// run UglifyJS in order to minimize the output
		new UglifyJsPlugin({
			beautify: false,
			mangle: {
				// drop support of Internet Explorer 6/7/8
				screw_ie8: true,
				// do not mangle/drop function names
				// useful for code relying on Function.prototype.name
				keep_fnames: true
			},
			compress: {
				// drop support of Internet Explorer 6/7/8
				screw_ie8: true
			}
		})
	],

	resolve: {
		extensions: ['.js']
	},

	// include mocks for when node.js specific modules may be required
	node: {
		// prevent loading the the `fs` module in the browser
		fs: 'empty'
	}

};
