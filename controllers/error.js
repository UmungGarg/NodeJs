const path = require('path');

exports.get404 = (req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
}

exports.getContact = (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
}

exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
}

exports.getSuccess = (req,res, next) => {
    res.send('Form successfully filled');
}