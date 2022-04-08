const {
    add,
    get,
    getId,
    update,
    del,
    serviceGetUserByusername
} = require('./pegawaiService');
const { genSaltSync, hashSync, compareSync } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

module.exports = {
    controllerAdd: (req, res) => {
        data_pegawai = {
            nama_pegawai: req.body.nama_pegawai,
            jenis_kelamin: req.body.jenis_kelamin,
            umur: req.body.umur,
            alamat: req.body.alamat,
            username: req.body.username,
            password: req.body.password
        }
        const salt = genSaltSync(10);
        data_pegawai.password = hashSync(data_pegawai.password, salt);
        add(data_pegawai, (err, results) => {
            if (err) {
                console.log(err)
                return
            } else {
                return res.json({
                    success: 1,
                    data: results
                })
            }
        })
    },
    controllerGet: (req, res) => {
        get((err, results) => {
            if (err) {
                console.log(err)
                return
            } else {
                return res.json({
                    success: 1,
                    data: results
                })
            }
        })
    },
    controllergetId: (req, res) => {
        data = {
            id_pegawai: req.params.id_pegawai
        }
        getId(data, (err, result) => {
            if (err) {
                console.log(err)
                return
            } else {
                return res.json({
                    success: 1,
                    data: result
                })
            }
        })

    },
    controllerUpdate: (req, res) => {
        const data_pegawai = {
            id_pegawai: req.params.id_pegawai,
            nama_pegawai: req.body.nama_pegawai,
            jenis_kelamin: req.body.jenis_kelamin,
            umur: req.body.umur,
            alamat: req.body.alamat
        }
        update(data_pegawai, (err, results) => {
            if (err) {
                console.log(err)
                return
            } else if (!results) {
                return res.json({
                    success: 0,
                    message: "Not Found"
                })
            } else {
                return res.json({
                    success: 1,
                    data: results
                })
            }
        })
    },
    controllerDelete: (req, res) => {
        data = {
            id_pegawai: req.params.id_pegawai
        }
        del(data, (err, result) => {
            if (err) {
                console.log(err)
                return
            } else if (!result) {
                return res.json({
                    success: 0,
                    message: "Not Found"
                })
            } else {
                return res.json({
                    success: 1,
                    message: "Delete Successs"
                })
            }
        })

    },

    controllerLogin: (req, res) => {
        const body = req.body;
        serviceGetUserByusername(body.username, (err, results) => {
            if (err) {
                console.log(err)
            } if (!results) {
                return res.json({
                    success: 0,
                    message: "Invalid u"
                })
            }
            const result = compareSync(body.password, results.password)
            console.log(result);
            console.log(results.password);
            console.log(body.password);
            if (result) {
                results.password = undefined
                const jsonwebtoken = sign({ result: results }, "secretkey", {
                    expiresIn: "1h"
                })
                return res.json({
                    success: 1,
                    message: "Login succesfuly, Your Acount Already Use",
                    account: results,
                    token: jsonwebtoken
                })
            } else {
                return res.json({
                    success: 0,
                    message: "Password invalid"
                })
            }
        })
    }
}
