const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database/index')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport/index');
const app = express()
const port =  process.env.PORT || 8080
const user = require('./routes/user')

app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// Sessions
app.use(
    session({
        secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
        store: new MongoStore({mongooseConnection: dbConnection}),
        resave: false, //required
        saveUninitialized: false //required
    })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
// Starting Server 
app.listen(port, () => {
    console.log(`App listening on PORT: ${port}`)
})
