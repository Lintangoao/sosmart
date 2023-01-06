const express = require('express');
const router = express.Router();
const con = require('../src/controllers');

router.get('/', con.per.view);
router.post('/', con.per.create);



module.exports = router;