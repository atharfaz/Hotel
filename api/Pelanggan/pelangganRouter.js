const {
    controllerAdd,
    controllerGet,
    controllergetId,
    controllerUpdate,
    controllerDelete,
} = require('./pelangganController');
const router = require('express').Router();
const { checkToken } = require("../../auth/token_validation")
router.post('/', controllerAdd);
router.get('/', controllerGet);
router.get('/:id_pelanggan', controllergetId);
router.patch('/:id_pelanggan', controllerUpdate);
router.delete('/:id_pelanggan', controllerDelete);
module.exports = router