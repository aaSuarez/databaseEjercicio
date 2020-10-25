var express = require('express');
var router = express.Router();


const provincias = () => {
    [{
        id: 65,
        nombre:'Buenos Aires',
        ts_create:true,
        ts_update:true,
        habilitado:1,
        eliminado:0,
        
    }]
}



module.exports = provincias;
module.exports = router;