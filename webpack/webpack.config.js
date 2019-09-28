const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + '/dist',
		publicPath: '_/_',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	}, 
	plugins: [
	    new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // all options are optional
	      filename: '[name].css',
	      chunkFilename: '[id].css',
	      ignoreOrder: false, // Enable to remove warnings about conflicting order
	    }),
	  ],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			// {
			// 	test: /\.(js|jsx)$/,
			// 	exclude: /node_modules/,
			// 	use: ['eslint-loader']	
			// }, 
			 {
		        test: /\.css$/,
		        use: [
		          {
		            loader: MiniCssExtractPlugin.loader,
		            options: {
		              // you can specify a publicPath here
		              // by default it uses publicPath in webpackOptions.output
		              publicPath: '../',
		              hmr: process.env.NODE_ENV === 'development',
		            },
		          },
		          'css-loader',
		        ],
		      },
	        {
	            test: /\.(png|jp(e*)g|svg|gif)$/,  
	            use: [{
	                loader: 'url-loader',
	                options: { 
	                    limit: 8000, // Convert images < 8kb to base64 strings
	                    name: 'images/[hash]-[name].[ext]'
	                } 
	            }]
	        }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}

}
