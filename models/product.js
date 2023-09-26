const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;

// const db = require('../util/database');
// const Cart = require('./cart');

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO products(title,price,imageURL,description) VALUES(?,?,?,?)',
//     [this.title, this.price, this.imageUrl, this.description]);
//   }

//   static deleteById(id){
//     return db.execute('DELETE FROM products WHERE products.id=?', [id]);
//   }

//   static fetchAll(cb) {
//     return db.execute('SELECT * FROM products');
//   }

//   static findById(id,cb){
//     return db.execute('SELECT * FROM products WHERE products.id=?', [id]);
//   }
// };