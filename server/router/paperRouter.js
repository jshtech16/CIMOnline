const router = require('express').Router();
const paperController = require('../controller/paperController');

router.post('/getPaper', paperController.getPaper);
router.post('/addPaper', paperController.addPaper)

module.exports = router;