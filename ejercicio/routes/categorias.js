var express = require('express');
var router = express.Router();


const categorias = () => {
    [{
        id: 1,
        descripcion: "calzado",
        habilitado: 1,
        eliminado: 0,
        ts_create: true,
        ts_update: true
    }]
}



module.exports = categorias;
module.exports = router;