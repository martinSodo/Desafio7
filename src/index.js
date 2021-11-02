const express = require('express');
const cartRouter = require('./routers/cart');
const productRouter = require('./routers/product');
const server = express();
server.use( express.json() );
server.use( express.urlencoded( { extended: true }) );
///// Ruta Base ///// 
server.get('/', (req,res) => res.send({ data: Date.now() }))
///// Ruta de productos ///// 
server.use('/api/productos', productRouter);
///// Ruta de carrito ///// 
server.use('/api/carrito', cartRouter);
///// Error de entrada 500 ///// 
server.use('error' ,(err, res) =>{
  console.error(err.stack);
  res.status(500).send('Error de status(500).',error);
});
///// seteo el glitch u 8080 ///// 
server.set('port', process.env.PORT || 8080);
server.listen(server.get('port'), () => console.log(`Servidor abierto en el puerto N° > [ ${process.env.PORT || 8080} ]`));
server.on('error', (error) => console.log('Error: ', error));
