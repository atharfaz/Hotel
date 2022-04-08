
const db = require('../../config/connection');
module.exports = {

    add: (data_pegawai, callBack) => {
        db.query(`insert into pegawai set ?`,
            [data_pegawai],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, results)
                }
            })
    },
    get: (callBack) => {
        db.query(`select * from pegawai`,
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
        db.query(`select nama_pegawai,jenis_kelamin,umur,alamat from pegawai where id_pegawai = ?`,
            [data.id_pegawai],
            (err, results) => {
                if (err) {
                    return callback(err)
                } else {
                    return callback(null, results)
                }
            })
    },
    update: (data, callback) => {
        db.query(`select *from pegawai where id_pegawai = ?`,
            [data.id_pegawai],
            (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    db.query(`update pegawai set ? where id_pegawai = ?`,
                        [
                            data,
                            data.id_pegawai
                        ]);
                    return callback(null, results[0])
                }
            })
    },
    del: (data, callback) => {
        db.query(`select id_pegawai from pegawai where id_pegawai =? `,
            [data.id_pegawai],
            (err, results) => {
                if (err) {
                    return callback(err)
                } else {
                    db.query(`delete from pegawai where id_pegawai =?`,
                        [data.id_pegawai]);
                    return callback(null, results[0])
                }
            })
    },

    serviceGetUserByusername: (username, callBack) => {
        db.query(
            `select * from pegawai where username=? `,
            [username], (err, results) => {
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, results[0])
                }
            }
        )
    }
}