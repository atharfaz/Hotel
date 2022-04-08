const {
    controllerAdd,
    controllerGet,
    controllergetId,
    controllerUpdate,
    controllerDelete,
    controllerLogin
} = require('./pegawaiController');
const router = require('express').Router();
const { checkToken } = require("../../auth/token_validation")
router.post('/', controllerAdd);
router.get('/', checkToken, controllerGet);
router.get('/:id_pegawai', checkToken, controllergetId);
router.patch('/:id_pegawai', checkToken, controllerUpdate);
router.delete('/:id_pegawai', checkToken, controllerDelete);
router.post('/login', controllerLogin);
module.exports = router