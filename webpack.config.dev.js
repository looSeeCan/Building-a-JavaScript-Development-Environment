// //Webpack is configured via a single object that we define in webpack.config. We are exporting that object here
// import path from "path";

// export default {
//     mode: "development",//this sets the Node environment to development behind the scenes and provides useful names for modules in the build to make it easier for us to debug our work.
//     devtool: "eval-source-map",//source maps are useful, so we can debug our compiled code
//     entry: "./src/index.js",//we need to define our app's entry point. Webpack will start here and then bundle up all the files that are immported in index.js and its dependeencies
//     output: {//define output. this tells webpack where it should create our dev bondle
//         path: path.resolve(__dirname, "src"),
//         publicPath: "/",
//         filename: "bundle.js"
//     },
//     plugins: [],
//     module: {//this last property is module. Here we tell webpack how to handle different file types.
//         rules: [
//             {test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"]},//we want webpack to bundle our JavaScript using Babel and we tell it to ignore node modules since that code is already transpiled
//             {test: /\.css$/, use: ["style-loader", 'css-loader']}//this second loader configures wepack to handle importing css as well.
//         ]
//     }
// };

import path from "path";

export default {
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "src"),
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
};
