import express  from 'express'
import {engine}  from 'express-handlebars'
import bodyParser from 'body-parser'
import multer from 'multer' 
import methodOverride from 'method-override'

import routes from './routes/index.js'
import db from './database/db.js'
const upload = multer()
db.connect();
const app = express()
const port = 3000


app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './src/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('X-HTTP-Method-Override'))

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  return next();
})

routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})