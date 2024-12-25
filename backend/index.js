require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database.js');
const AppRoutes = require('./routes/index.js');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');


const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.use(bodyParser.json({limit : '100kb'}));
app.use(bodyParser.urlencoded({extended : true}));

app.use(cookieParser());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static('uploads'));

app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(cors('*'));

app.use(passport.initialize());
app.use(passport.session());

app.get('/',function(req,res){
    res.render('server');
})

app.use('/api',AppRoutes);

const server = http.createServer(app);
server.listen(port, function(){ console.log(`Server Listening on PORT ${port}`)})
