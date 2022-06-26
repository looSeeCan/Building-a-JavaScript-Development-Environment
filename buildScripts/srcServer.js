//SET UP EXPRESS
//Now, this file will configure a web server that will serve up the files in our src directory.

const express = require("express");//call express
const path = require("path");//need a reference to path
const open = require("open");//a reference to open, which we'll use to open our site in the browser

const port = 3000;//can choose any port you like
const app = express();//create an instance of express

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

//after I setup Express: 5 Sharing work in progress. install local tunnel. 
//npm installl localtunnel -g
// run local tunnel: lt --port 3000 //pass it the port that was specified. In this case,` 3000
//local tunnel is no longer being maintained
//So, I used ngrok instead. after some setup and trouble shooting. I had to type in the cmd line: ./ngrok help
//that gave me a link to open http://localhost:4000 for ngrok's web interface to inspect traffic. From there i was finally able to get the tunnel