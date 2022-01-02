var express = require('express');
var router = express.Router();
const dateFns = require('date-fns');


const myLogger = (req, res, next) => {
    startRequestTime = Date.now();
    next();
    const requestTime = dateFns.format(startRequestTime, 'dd/MM/yyyy HH:mm:ss:SSS');
    console.log(`${requestTime} - Request (${req.originalUrl})`);
}

router.use(myLogger);

module.exports = router;