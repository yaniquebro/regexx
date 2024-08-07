require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({ helpers });

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: process.env.SESSION_SECRET || SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 1000 * 60 * 10, // checks every 10m
    expiration: 1000 * 60 * 30, // expires after 30 minutes
  }),
};

// import sequelize connection
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sess));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true })
.then(() => {
  app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
})
