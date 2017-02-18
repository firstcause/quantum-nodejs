var express = require('express');
var router = express.Router();

router.get('/api/contacts/', function (request, response, next) {
	response.send('respond with a contact');
});

module.exports = router;
