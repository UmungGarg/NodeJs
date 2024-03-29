const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // Product.create({
  //   title: title,
  //   price:price,
  //   imageUrl:imageUrl,
  //   description: description
  // })
  req.user
  .createProduct({
    title: title,
    price:price,
    imageUrl:imageUrl,
    description: description
  })
  .then(() => {
    console.log('Created Product');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  // Product.findByPk(prodId)
  req.user.getProducts({where:{id: prodId}})
  .then(products => {
    const product = products[0];
    if(!product){
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode, 
      product: product         
    });
  })
  .catch(err => console.log(err));
};

exports.postEditProduct = (req,res,next) => {
  const prodId = req.body.productId;
  const upTitle = req.body.title;
  const upPrice = req.body.price;
  const upImage = req.body.imageUrl;
  const upDesc = req.body.description;
  Product.findByPk(prodId)
  .then(product => {
    product.title = upTitle;
    product.price = upPrice;
    product.imageUrl = upImage;
    product.description = upDesc;
    return product.save();
  })
  .then(result => {
    console.log('UPDATED PRODUCT!');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));  
}

exports.getProducts = (req, res, next) => {
  // Product.findAll()
  req.user.getProducts()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct = (req,res,next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then(product => {
    return product.destroy();
  })
  .then(result => {
    console.log('DESTROYED PRODUCT');
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};