var express = require('express')
var router = express.Router()

const pageDefault = 0;
const limitCountDefault = 10;

router.get('/', (req, res) => {
    let page = req.query.page || pageDefault
    let limit = req.query.limitCount || limitCountDefault;
    res.send(`Get all the blogs (page: ${page}, limit amount: ${limit})`)
})

router.get('/:blogId', (req, res) => {
    res.send(`Get specific blog with id: ${req.params.blogId}`)
})

module.exports = router