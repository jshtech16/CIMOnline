const runQuery = require('../util/database');;

exports.getReview = async (req) => {
    const connect = await runQuery();
    const [rows, fields] = await connect.query('SELECT * FROM review WHERE language = ?', [req.body.lang])
    return rows;
}

exports.addReview = async (req) => {
    console.log(req.body)
    const connect = await runQuery();
    const [rows, fields] = await connect.query('INSERT INTO review (image, company_name, contact_person, position, preview, afterview, language) VALUES (?, ?, ?, ?, ?, ?, ?)', [req.body.logo, req.body.name, req.body.contact, req.body.position, req.body.preview, req.body.afterview, req.body.inputlang]);
    // return rows;
    return 'res'
}