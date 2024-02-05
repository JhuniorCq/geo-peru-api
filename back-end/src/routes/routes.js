const {Router} = require('express');
const router = Router();

const {getDepartment, getProvince, getDistrict} = require('../controllers/geoPeruControllers.js');

router.get('/department', getDepartment);
router.get('/province', getProvince);
router.get('/district', getDistrict);

module.exports = {
    router
}