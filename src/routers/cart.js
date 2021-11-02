const express = require('express');
const { createCart, deleteCart, addProductsToCart, getProductsByIdCard } = require('../models/cart');
const cartRouter = express.Router();
///// Ruta post base ///// 
cartRouter.post('/', async (req, res) => {
  const cart = req.body;
  const idCartSaved = await createCart(cart);
  res.send({ data: idCartSaved });
});
///// Ruta delete by id carrito ///// 
cartRouter.delete('/:id', async (req, res) => {
  const cart = req.body;
  const idCartDeleted = await deleteCart(cart);
  res.send({ data: idCartDeleted });
});
///// Ruta get traer productos de carrito ///// 
cartRouter.get('/:id/productos', async (req, res) => {
  const cartId = req.params.id;
  console.log({cartId})
  const list = await getProductsByIdCard(cartId);
  console.log({list})
  res.send({ data: list });
});
///// Ruta post enviar nuevo producto al carrito ///// 
cartRouter.post('/:id/productos', async (req, res) => {
  const cartId = req.params.id;
  const cartUpdate = req.body;
  const cart = await addProductsToCart(cartId, cartUpdate);
  res.send({ data: cart });
});
///// Ruta delete para borrar producto de un carrito ///// 
cartRouter.delete('/:id/productos/:id_prod', async (req, res) => {
  const cartId = req.params.id;
  const productId = req.params.id_prod;
  const cart = await deleteProductToCart(cartId, productId);
  res.send({ data: cart });
});
///// Exportamos módulos ///// 
module.exports = cartRouter;