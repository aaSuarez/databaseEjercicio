var express = require('express');
var router = express.Router();

const compras = () => {
    [{
        id: 2,
        fecha: "23/10/20",
        numero_factura: 454546,
        ts_create: true,
        ts_update: false,
        id_usuario: 4,
        id_estado: 23,
        id_direccion_envio: 12
    }]
}
module.compras = compras;
module.exports = router;