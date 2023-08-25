const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('in the other ad middleware');
    res.send('<html><body><form action="/admin/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form></body></html>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports = router;