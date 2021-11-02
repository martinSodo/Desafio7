const Contenedor = require('../../Contenedor');

const productosContenedor = new Contenedor('./data/productos.json');
///// Muestro todos los productos ///// 
const getAllProducts = async () => {
  const list = await productosContenedor.getAll();
  return list;
};
///// Creación de producto ///// 
const createProduct = async (product) => {
  const idProductoGuardado = await productosContenedor.save(product);
  return idProductoGuardado;
};
///// Exportamos módulos ///// 
module.exports = {
  getAllProducts,
  createProduct
};