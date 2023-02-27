const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connect');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// init express
const app = express();

// set up port
const PORT = process.env.PORT || 3001;

// init handlebars and declare engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// set up routes

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use('/', routes);
app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
});
