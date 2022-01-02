const express = require('express')
var blogController = require('./controllers/blogController')

const app = express()
const port = 3000

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