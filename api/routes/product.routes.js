const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/products', async (req, res) => {
  const products = await productController.getAllProducts();
  res.send(products);
});

router.get('/product/:id', async (req, res) => {
  const id = req.params.id;
  const product = await productController.getProductById(id);
  res.send(product);
});

router.delete('/product/:id', async (req, res) => {
  console.log('suppression du produit..')
  const id = req.params.id;
  const response = await productController.removeProduct(id)
  res.send(response);
});

router.post('/products', async (req, res) => {
  console.log("Ajout d'un produit..")
  console.log(req.body)
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;
  if (name && price && quantity)
  {
    const response = await productController.addProduct(name, price, quantity);
    res.send(response);
  }
  else
  {
    res.send("Merci d'envoyer tous les champs");
  }
});

module.exports = router;
