const Product = require('../models/product.model');

const productController = {
    async addProduct(name, price, quantity) {
        const product = Product.build({name: name, price: price, quantity: quantity});
        try{
            await product.save();
            return true;
        }
        catch(error){
            return error;
        }
        
    },

    async getProductById(id) {
        const product = await Product.findByPk(id);
        if (product)
        {
            return product;
        }
        return false;    
    },
    
    async removeProduct(id) {
        const product = await Product.findByPk(id);
        if (product)
        {
            await product.destroy();
            return true;
        }
        return false;
    },
    
    async getAllProducts(){
        const products = await Product.findAll();
        return products;
    },
}

module.exports = productController;
