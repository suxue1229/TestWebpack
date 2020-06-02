
const path =require('path')

module.exports={
  entry: './src/main.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'bundle')
  },
  module:{
    rules:[
      {
        
      }
    ]
  },
  plugins:[],
  mode: 'development'
}