const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

// init express
const app = express();

// set up port
const PORT = process.env.PORT || 3001;

// init handlebars and declare engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// set up routes

// app.use('/', routes);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
