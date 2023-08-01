const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require("dotenv").config();

const dbConnect = require("./db/dbConnect")
const session = require('express-session');
const routes = require('./routes/routes')
app = express()
app.use(express.json());

app.set('trust proxy', 1)
app.use(session({
    secret: 'skyeberry',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true,SameSite:'none',maxAge: 864000000 }
  }))
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3001', 'https://twittorr.netlify.app']
}))

app.use(cookieParser())

app.use('/api', routes)


const PORT = process.env.PORT
dbConnect();
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
