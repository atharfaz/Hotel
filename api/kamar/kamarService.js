const db = require('../../config/connection');
module.exports = {
    add: (data_kamar, callback) => {
        db.query(`insert into kamar set ?`,
            [data_kamar],
            (err, results) => {
                if (err) {
                    return callback(err)
                } else {
                    return callback(null, results)
                }
            }
        )
    }
}