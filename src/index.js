const express = require('express');

var requestLogger = require('./utils/requestLogger');

var blogController = require('./controllers/blogController');

const app = express();
const port = 3000;

app.use(requestLogger);

app.use('/blog', blogController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})