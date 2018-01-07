
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var db = require('./models/');

var routes = require('./controllers/burgers_controller.js');

//app
var app = express();
var port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static
app.use(express.static('public'));

//routes
app.use('/', routes);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});

