
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');

var routes = require('./controllers/burgers_controller.js');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', routes);

app.listen(port);
