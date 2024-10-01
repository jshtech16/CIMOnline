const router = require('express').Router();
const reviewController = require('../controller/reviewController');

router.post('/getReview', reviewController.getReviewCtrl);
router.post('/addReview', reviewController.addReviewCtrl)

module.exports = router;