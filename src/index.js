const express = require('express')
const app = express()
const port = 3000

app.get('/', (reqest, response) => {
    response.send('Hello World!')
})

app.get('/Hello', (reqest,response) => {
    response.send('Oh, I didnt see you there')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})