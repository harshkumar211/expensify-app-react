//entry->output

const path=require('path');
console.log(__dirname)
module.exports={
    entry:'./src/app.js',    //where shall It start, must have
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/,
            use:["style-loader","css-loader","sass-loader"]
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }
};

//loader, to integrate with babel

