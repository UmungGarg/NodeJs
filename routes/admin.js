const path = require('path');
// const rootDir = require('../util/path');
const productsController = require('../controllers/products')
const express = require('express');
const router = express.Router();

router.get('/add-product', productsController.getAddProduct
// (req, res, next) => {
//     // console.log('in the other ad middleware');
//     // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
//     // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// }
);

router.post('/product', productsController.postAddProduct 
// (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/shop');
// }
);

module.exports = router;