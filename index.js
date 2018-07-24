var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var slaCtrl = require('./controllers/slaCtrl.js');
var config = require('./config.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get("/sla", slaCtrl.read);
app.post("/sla", slaCtrl.create);
app.put("/sla/:id", slaCtrl.change);
app.delete("/sla/:id", slaCtrl.destroy);


mongoose.connect(config.mongo_uri);
mongoose.connection.once('open', function(){
  console.log("Connected to Mongo");
});

app.listen(config.port, function(){
  console.log('listening to port 80 or 3000')
});

//File for DB to begin with
