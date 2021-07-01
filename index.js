const http = require("http")
const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const logger = require("morgan");
const handlebarHelpers = require("./handlebarhelpers");
const routes = require("./routes");
var path = require('path');

const port=3000;

//configure app
app.use(logger("dev"));

//Configure Static Path
app.use(express.static(path.join(__dirname, "public")));

//Configure View Engine
app.set("views", path.join(__dirname, "views")); //Set view path
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: handlebarHelpers
}));
app.set("view engine", "hbs"); //Set view engine

//Routes
app.use(routes());

/*
app.get("/componentdetails/:name", (req, res)=>{
    res.send("hello world");
});
*/


//404
app.get('*', function(req, res, next){
    res.status(404).send("Requested page was not found.");
});

http.createServer(app).listen(port, function() {
    console.log(`Dashboard App started at http://localhost:${port}`);
});
