const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.post('/signUp', homeController.signUp );
router.post('/signIn', homeController.signIn );
router.get('/sellerDash', homeController.sellerDash);
router.get('/addStoreInfo', homeController.addStoreInfo);


//change the below to post
router.get('/inventoryPage', homeController.inventoryPage );


module.exports = router;
