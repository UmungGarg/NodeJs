const path = require('path');
const rootDir = require('../util/path');


exports.getAddProduct = (req, res, next) => {
    // console.log('in the other ad middleware');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
        console.log(req.body);
        res.redirect('/shop');
    }

exports.getProducts = (req, res, next) => {
    // console.log('in the other middleware');
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}