const {
    controllerAdd,
    controllerGet,
    controllergetId,
    controllerUpdate,
    controllerDelete

} = require('./kamarController.js')
const router = require('express').Router();
const { checkToken } = require("../../auth/token_validation")
router.post('/', controllerAdd);
router.get('/', controllerGet);
router.get('/:id_kamar', controllergetId);

router.patch('/:id_kamar', controllerUpdate);
router.delete('/:id_kamar', controllerDelete);
module.exports = router
