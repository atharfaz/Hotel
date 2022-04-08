const {
    add,
    //get,
    //getId,
    //update,
    //delete
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

}

