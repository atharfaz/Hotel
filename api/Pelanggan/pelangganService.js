
const db = require('../../config/connection');
module.exports = {

    add: (data_pelanggan, callBack) => {
        db.query(`insert into pelanggan set ?`,
            [data_pelanggan],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, results)
                }
            })
    },
    get: (callBack) => {
        db.query(`select * from pelanggan`,
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
        db.query(`select nama_pelanggan,tagihan,alamat from pelanggan where id_pelanggan = ?`,
            [data.id_pelanggan],
            (err, results) => {
                if (err) {
                    return callback(err)
                } else {
                    return callback(null, results)
                }
            })
    },
    update: (data, callback) => {
        db.query(`select *from pelanggan where id_pelanggan = ?`,
            [data.id_pelanggan],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    db.query(`update pelanggan set ? where id_pelanggan = ?`,
                        [
                            data,
                            data.id_pelanggan
                        ]);
                    return callback(null, results[0])
                }
            })
    },
    del: (data, callback) => {
        db.query(`select id_pelanggan from pelanggan where id_pelanggan =? `,
            [data.id_pelanggan],
            (err, results) => {
                if (err) {
                    return callback(err)
                } else {
                    db.query(`delete from pelanggan where id_pelanggan =?`,
                        [data.id_pelanggan]);
                    return callback(null, results[0])
                }
            })
    }
}
