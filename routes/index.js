var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RadioQuintana', title2: 'La mejor radio de Canarias', title3: 'Elena Quintana Tarajano', title4: 'TING'});
});

module.exports = router;
