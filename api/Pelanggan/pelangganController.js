const {
    add,
    get,
    getId,
    update,
    del
} = require('./PelangganService');

module.exports = {
    controllerAdd: (req, res) => {
        data = {
            nama_pelanggan: req.body.nama_pelanggan,
            tagihan: req.body.tagihan,
            alamat: req.body.alamat,
        }
        add(data, (err, results) => {
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
            id_pelanggan: req.params.id_pelanggan
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
        const data = {
            id_pelanggan: req.params.id_pelanggan,
            nama_pelanggan: req.body.nama_pelanggan,
            alamat: req.body.alamat,
            tagihan: req.body.tagihan,
        }
        update(data, (err, results) => {
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
            id_pelanggan: req.params.id_pelanggan
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

    }

}
