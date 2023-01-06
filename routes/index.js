const express = require('express');
// var router = express.Router();
const router = express();
const laporan = require('./laporan');
const permohonan = require('./permohonan');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/laporan', laporan);
router.use('/permohonan', permohonan);

module.exports = router;
