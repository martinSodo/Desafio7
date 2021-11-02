const express = require('express');
const admin = require('../middlewares/admin');
const { getAllProducts, createProduct } = require('../models/product');
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const data = await getAllProducts();
  res.send({ data });
});
///// Ruta post para crear producto  con condición de administrador ///// 
productRouter.post('/', admin, async (req, res) => {
  const nuevoProducto = req.body;
  const idProductsaved = await createProduct(nuevoProducto);
  res.send({ data: idProductsaved });
});
///// Exportamos el módulo ///// 
module.exports = productRouter;