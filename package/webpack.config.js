module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: './dist'
  },
  externals: {
    'react': 'react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};