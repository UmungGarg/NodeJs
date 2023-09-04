const express= require('express');
const bodyParser= require('body-parser');
const path = require('path');
const app = express();
const adminR = require('./routes/admin')
const shopR = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/contactus', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
})
app.post('/contactus', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
});

app.get('/success', (req,res, next) => {
    res.send('Form successfully filled');
})

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
