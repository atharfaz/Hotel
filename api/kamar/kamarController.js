const {
    add,
    get,
    update,
    del,
    getId
} = require('./kamarService.js');

module.exports = {
    controllerAdd: (req, res) => {
        data_kamar = {
            hargakamar: req.body.hargakamar,
            status: req.body.status
        }
        add(data_kamar, (err, results) => {
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
    controllerUpdate: (req, res) => {
        const data_kamar = {
            id_kamar: req.params.id_kamar,
            hargakamar: req.body.hargakamar,
            status: req.body.status
        }
        update(data_kamar, (err, results) => {
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
    controllergetId: (req, res) => {
        data = {
            id_kamar: req.params.id_kamar
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
    controllerDelete: (req, res) => {
        data = {
            id_kamar: req.params.id_kamar
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

