const express = require('express');
const router = express.Router();
const con = require('../src/controllers');

router.get('/', con.lap.view);
router.post('/', con.lap.create);



module.exports = router;