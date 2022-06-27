//SET UP EXPRESS
//Now, this file will configure a web server that will serve up the files in our src directory.

// const express = require("express");//call express
// const path = require("path");//need a reference to path
// const open = require("open");//a reference to open, which we'll use to open our site in the browser

//^above const was used before transpiling babel
import express from "express";//call express
import path from "path";//need a reference to path
import open from "open";//a reference to open, which we'll use to open our site in the browser

import webpack from "webpack";//these two imports were created during the bundling process
import config from "../webpack.config.dev";//remember that its being exported as default so "config" can be named anything


const port = 3001;//can choose any port you like
const app = express();//create an instance of express
const compiler = webpack(config);//created during the bundling process. call webpack and pass it the config that we referenced up here above

//now we have a reference to the webpack compiler
app.use(require('webpack-dev-middleware') (compiler, {//app.use. A way to tell Express other things we'd like to use.
    //tell express to use our webpack-dev-middleware
    publicPath: config.output.publicPath
}));

//tell Express which routes it should handle
app.get("/", function(req, res) {//any references to the root should be handled by this function, which takes a request and a response
    //and in this function, we will call res.sendFile, and I will use path to join
    res.sendFile(path.join(__dirname, "../src/index.html"));//__dirname is a special variable that will get us the directory name that we are currently running in. Join that together with a path to our src directory
// requesting the route "/" and then it is sending the file that we specified here "index.html" and openng the application on the address and port that we specify below
});

//we've declared our routing, we just need to tell Exress that we'd like it to listen on the port we defined above
app.listen(port, function(err) {
    if(err) {//error handling
        console.log(err);
    }else{
        open("http://localhost:" + port);
    }
})

//after I setup Express: 5 Sharing work in progress. install local tunnel. .
//so why did I need to do this whole setting up a development center when I can just use liveserver? Im not sure yet.
//I know after this I connect port 3000 to ngrok for "sharing work in progress", but, Im sure I can connect to liveserver too. 
//npm installl localtunnel -g
// run local tunnel: lt --port 3000 //pass it the port that was specified. In this case,` 3000
//local tunnel is no longer being maintained
//So, I used ngrok instead. after some setup and trouble shooting. I had to type in the cmd line: ./ngrok help
//that gave me a link to open http://localhost:4000 for ngrok's web interface to inspect traffic. From there i was finally able to get the tunnel

//6 Automation > npm scripts

//7 Transpiling
//Babel Configuration files using babelrc

//8 Bundling
//created webpack.config.dev.js
//we configured webpack, but to actully put it to use, we need to also set up our development server to serve our webpack bundle. we have to configure express to make that happen
//go back to srcServer and import webpack and webpack.config
//We've wired up webpack to bundle our JavaScript and we've set up Express as our dev server to serve our app, but, we haven't set up any js yet
//lets create our Js file and see webpack in action. when we set up webpack.config.dev.js. We set up the entry point to index.js. so lets create that
//note* had a little error issue, had to add this to the scripts > start --openssl-legacy-provider
//Demo: Handling css with Webpack. created the index.css file and imported it in indeex.js
//Sourcemaps
//when we set up our webpack.config.dev, e told webpack to henerate a source map by specifying:  devtool: "eval-source-map"
//noteI I didnt really understand this source map part

//9Linting
//created .eslintrc.json.

