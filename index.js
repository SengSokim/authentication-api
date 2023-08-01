const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require("dotenv").config();

const dbConnect = require("./db/dbConnect")

const routes = require('./routes/routes')
app = express()
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.set("trust proxy", 1);
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
