'use strict';

let path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
let NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
let NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
let DefinePlugin = require('webpack/lib/DefinePlugin');

const PORT = process.env.npm_package_config_port || 3000;
const ABSOLUTE_BASE = path.normalize(path.join(__dirname,'..'));

module.exports = {
	devtool: 'eval',
	entry: [
		// necessary polyfills
		'core-js/es6/object.js',
		'core-js/es6/promise.js',
		'core-js/es6/function.js',
		'core-js/es6/string.js',

		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',

		path.join(ABSOLUTE_BASE, 'src/index.js')

	],
	output: {
		path: path.join(ABSOLUTE_BASE, '/dist/'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(js)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.json?$/,
				loader: 'json-loader'
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader&name=images/[name].[ext]',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.html$/,
				loader: "raw-loader"
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						query: { modules: false, sourceMap: true }
					},
					{
						loader: 'sass-loader',
						query: { sourceMap: true }
					}
				]
			}
		]
	},
	plugins: [
		new NamedModulesPlugin(),
		new HotModuleReplacementPlugin(),
		new NoEmitOnErrorsPlugin(),

		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'offers.html',
			template: 'src/offers.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'company.html',
			template: 'src/company.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'companyHTML5.html',
			template: 'src/companyHTML5.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'contacts.html',
			template: 'src/contacts.html'
		}),
		new DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})

	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		host: 'localhost',
		port: PORT,

		// respond to 404s with index.html
		historyApiFallback: true,
		// enable HMR on the server
		hot: true
	}
};
