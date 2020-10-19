var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('servicios', { title: 'Servicios', title2: 'La mejor radio de Canarias', title3: 'Programación, radio on´line, radio en directo en la frecuencia 94.4, grabaciones y edición de audio', title4: 'RadioQuintana' });
});

module.exports = router;
