const connectDB = require('../config/db.js');
const Product = require('../models/product.js');
const data = require('../data/product.js');

connectDB().then(() => {
    try {
        Product.deleteMany();

        Product.insertMany(data);

        console.log('Data Update Success');
    } catch (error) {
        console.log('Error Occures: ' + error);
    }
})

