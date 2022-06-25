//SET UP EXPRESS
//Now, this file will configure a web server that will serve up the files in our src directory.

const express = require("express");//call express
const path = require("path");
const open = require("open");

const port = 3000;
const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    }else{
        open("http://localhost:" + port);
    }
})
