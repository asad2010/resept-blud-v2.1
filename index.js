const express = require('express');
const db = require('./db');
const app = express()
const router = require('./src/routes/routes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

db()
app.use('/', router)

app.listen(3000, ()=>{
    console.log('3000 port')
})