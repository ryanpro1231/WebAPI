var http = require ("http");
var Mustache = require("mustache");
var randomNum = require("./randomnumber");


var msg = Mustache.render("Hello, {{firstname}} {{lastname}} Kill yourself", {firstname:"Ryan", lastname:"Fragozo"});

// handle incoming http request
function reqHandler(req, res){console.log("We have a server request" + req.url);
    if(req.url === "/" ){
       res.end("This sentence is false!");
    }
    else if(req.url === "/about"){
        res.end("This is the about page how did you get here?")
    }
    else if(req.url === "/moo")
    {
        res.end("MOOOOOO");
    }
    else(req.url)
    {
        res.end("Page not found");
    }
    res.end(msg + randomNum());
}


console.log(msg);
console.log(randomNum());
console.log(randomNum());
console.log(randomNum());

//create and start the server
var server = http.createServer(reqHandler);

//Start the server
server.listen(3000);