const Contenedor = require('../../Contenedor');

const cartContenedor = new Contenedor('./data/carrito.json');
///// Crear el carrito /////
const createCart = async (cart) => {
  const idCartSaved = await cartContenedor.save(cart);
  return idCartSaved;
};
///// Borrar el carrito /////
const deleteCart = async (idCart) => {
  await cartContenedor.deleteById(idCart);
  return idCart;
};
///// Mostrar los productos del carrito /////
const getProductsByIdCard = async (id) => {
  const cart = await cartContenedor.getById(id);
  const { products } = cart;
  return products;
};
///// Agregar productos al carrito /////
const addProductsToCart = async (id, update) =>  {
  const cartUpdated = await cartContenedor.update(id, update);
  return cartUpdated;
};
///// Borrar productos del carrito ///// 
const deleteProductToCart = async (id, idProduct) =>  {
  const cart = await cartContenedor.getById(id);
  const { products } = cart;
  products.splice(idProduct, 1);
  const newCart = {
    ...cart,
    products
  }
  const cartUpdated = await cartContenedor.update(id, newCart);
  return cartUpdated;
};
///// Exportamos los módulos ///// 
module.exports = {
  createCart,
  deleteCart,
  getProductsByIdCard,
  addProductsToCart,
  deleteProductToCart
};