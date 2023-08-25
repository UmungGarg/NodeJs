const express= require('express');
const bodyParser= require('body-parser');
const app = express();
const adminR = require('./routes/admin')
const shopR = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin', adminR);
// app.use('/add-product', (req, res, next) => {
//     console.log('in the other ad middleware');
//     res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form></body></html>');
// });

// app.use('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });
app.use('/shop', shopR);
// app.use('/', (req, res, next) => {
//     console.log('in the other middleware');
//     res.send('<h1>Hello from Expres</h1>');
// });

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not Found</h1>');
})

app.listen(3000);
