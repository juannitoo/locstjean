// var express = require('express');
var router = express.Router();

// home
router.get('/', function (req, res) {
    res.send('Hello World! router ');

});

module.exports = router;