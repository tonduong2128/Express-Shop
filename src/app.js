import express  from 'express'
import {engine}  from 'express-handlebars'
const app = express()
const port = 3000

import routes from './routes/index.js'

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './src/views')


routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})