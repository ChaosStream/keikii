var express = require('express');
var router = express.Router();

var controller = require('../controllers/book')

router.get('/', controller.list());
router.post('/', controller.create());

module.exports = router;
