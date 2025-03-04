const exp  = require('express');
const router = exp.Router();
const controlProducto = require('../backend/controller/productos.controller')

router.get('/productos', controlProducto.buscar);

router.get('/productos/:x', controlProducto.buscarPorNom);

router.post('/productos', controlProducto.insertarProducto);

router.put('/productos/:ref', controlProducto.actualizarProducto);

router.delete('/productos/:id', controlProducto.eliminarProducto);

module.exports = router;
