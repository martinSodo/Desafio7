const adminOn = true;
///// Creamos constante de administrador con valor booleano + error de status.
const admin = (req, res, next) => {
  if (adminOn) {
    next();
  } 
  else 
  { 
    res
      .status(401).json({
        error: -1,
        descripcion: `ruta ${req.path} metodo ${req.method} no autorizada`, 
      })
  }
};
///// Exportamos el módulo ///// 
module.exports = admin;