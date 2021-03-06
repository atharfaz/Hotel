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
    },
    get: (callBack) => {
        db.query(`select * from kamar`,
            [],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, results)
                }
            })
    },
    getId: (data, callback) => {
        db.query(`select id_kamar,status,hargakamar from kamar where id_kamar = ?`,
            [data.id_kamar],
            (err, results) => {
                if (err) {
                    return callback(err)
                } else {
                    return callback(null, results)
                }
            })
    },
    update: (data, callback) => {
        db.query(`select *from kamar where id_kamar = ?`,
            [data.id_kamar],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    db.query(`update kamar set ? where id_kamar = ?`,
                        [
                            data,
                            data.id_kamar
                        ]);
                    return callback(null, results[0])
                }
            })
    },
    del: (data, callback) => {
        db.query(`select id_kamar from kamar where id_kamar =? `,
            [data.id_kamar],
            (err, results) => {
                if (err) {
                    return callback(err)
                } else {
                    db.query(`delete from kamar where id_kamar =?`,
                        [data.id_kamar]);
                    return callback(null, results[0])
                }
            })
    }

}