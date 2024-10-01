const reviewModel = require('../model/reviewModel');

exports.getReviewCtrl = async(req, res) => {
    console.log('getReviewCtrl')
    const result = await reviewModel.getReview(req);
    return res.json(result);
}

exports.addReviewCtrl = async(req, res) => {
    const result = await reviewModel.addReview(req);
    return res.json('')
}