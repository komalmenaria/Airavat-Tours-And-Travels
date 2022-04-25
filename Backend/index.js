const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT||4000

app.use(cors())
app.use(bodyParser())

// Available Routes
app.use('/api/contactForm' , require('./routes/contactForm'))
app.use('/api/subscribeForm' , require('./routes/subscribeForm'))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})