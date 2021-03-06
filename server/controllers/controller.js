const Product = require('../models/product.js');


// get all the products in the sever
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        })
    }
};


// get th products by id

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        })
    }
}

module.exports = {
    getAllProducts,
    getProductById
}