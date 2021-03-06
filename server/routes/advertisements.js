var express = require('express');
var router = express.Router();
var path=require('path');
var advertisementController=require('./../controllers/advertisementController');


//POST is create
router.post('/',advertisementController.createAdvertisement);

//GET is read
router.get('/',advertisementController.getAdvertisement );

//PUT is update
router.put('/', advertisementController.updateAdvertisement);

//DELETE is ofcourse delete :-)u
router.post('/delete', advertisementController.deleteAdvertisement);

router.get('/search',advertisementController.searchAdvertisement );

router.get('/myadvertisements',advertisementController.getUserAdvertisements);

module.exports = router;