const express = require('express');
const router = express.Router();

const multer = require('multer');

const upload = multer({ dest: '../assets/images' });

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/logout', homeController.logout);
router.post('/signUp', homeController.signUp );
router.post('/signIn', homeController.signIn );
router.get('/sellerDash/:id', homeController.sellerDash);
//multer middleware
router.post('/addStoreInfo/:id',  upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'images', maxCount: 10 }
  ]), homeController.addStoreInfo);


//change the below to post
router.get('/inventoryPage/:id', homeController.inventoryPage );


module.exports = router;
