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

/*eslint-disable no-console*/

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
