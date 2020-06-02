var express = require('express');
var app = express();
var path = require("path");
var url = require('url');
app.use(express.json());
var port=process.env.PORT || 8080;


app.use(express.static(`${__dirname}/`));
app.set("view engine", "ejs");

app.post('/graph.facebook.com', function (req, res) {
	console.log(req.body);
})

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,"","/index.html"));

})
 
// listen to port 
app.listen(port,function(){
    console.log("Express Started on Port "+ port);
});