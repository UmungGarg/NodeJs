const path = require('path');
// const rootDir = require('../util/path');
const productsController = require('../controllers/products');
const express = require('express');
const router = express.Router();

router.get('/', productsController.getProducts
// (req, res, next) => {
//     // console.log('in the other middleware');
//     // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// }
);

module.exports = router;