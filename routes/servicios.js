var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('servicios', { title: 'Servicios', title2: 'de la mejor radio de Canarias', title3: 'Elena', title4: 'RadioQuintana' });
});

module.exports = router;
