const runQuery = require('../util/database');;

exports.getPaper = async (req) => {
    const connect = await runQuery();
    const [rows, fields] = await connect.query('SELECT * FROM brochures')
    return rows;
}

exports.addPaper = async (req) => {
    const connect = await runQuery();
    const [rows, fields] = await connect.query('INSERT INTO brochures (image, pdf, title) VALUES (?, ?, ?)', [req.body.image, req.body.pdf, req.body.title]);
    return rows;
}