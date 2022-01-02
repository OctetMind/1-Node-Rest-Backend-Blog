const express = require('express')
const dateFns = require('date-fns');

var blogController = require('./controllers/blogController')

const app = express()
const port = 3000

var myLogger = function (req, res, next) {
    console.log(`${dateFns.format(new Date(), 'dd/MM/yyyy HH:ss:SSS')} - Request (${req.originalUrl})`)
    next()
  }
  
app.use(myLogger)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/Hello', (req, res) => {
    res.send('Oh, I didnt see you there')
})

// app.get('/blog/:blogId', (req, response) => {
//     response.send(`Blog Id: ${req.params.blogId}`)
// })

app.use('/blog', blogController)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})