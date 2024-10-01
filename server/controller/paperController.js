const paperModel = require('../model/paperModel');

exports.getPaper = async (req, res) => {
    const result = await paperModel.getPaper(req);
    return res.json(result);
}

exports.addPaper = async(req, res) => {
    const result = await paperModel.addPaper(req);
    res.send('')
}