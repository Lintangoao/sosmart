const express = require('express');
// var router = express.Router();
const router = express();
const laporan = require('./laporan');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/laporan', function(req, res, next) {
//   res.render('pages/laporan');
// });

router.use('/laporan', laporan);

module.exports = router;
