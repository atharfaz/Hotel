const {
    controllerAdd,
    controllerGet,
    controllergetbyId,
    controllerUpdate,
    controllerDelete

} = require('./kamarController.js')
const router = require('express').Router();
const { checkToken } = require("../../auth/token_validation")
router.post('/', controllerAdd);
router.get('/', checkToken, controllerGet);
module.exports = router
