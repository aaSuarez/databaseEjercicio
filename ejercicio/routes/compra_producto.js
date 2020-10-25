var express = require('express');
var router = express.Router();


const compraProducto = () => {
    [{
        id: 3,
        id_compra: 5,
        id_producto: 45,
        precio_unitario: 450,
        cantidad: 15,
        ts_create: true,
        ts_update: true,
        habilitado: 1,
        eliminado: 0
    }]
}



module.exports = compraProducto;
module.exports = router;