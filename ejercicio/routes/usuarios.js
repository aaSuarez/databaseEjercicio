const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {})


const usuarios = () => {
    [{
        id: 1,
        nombre: 'Ale',
        apellido: 'Suarez',
        username: 'aasuarez',
        password: '12345',
        ts_create:true,
        ts_update:true,
        habilitado:1,
        eliminado:0
    }]
}


module.exports = usuarios;
module.exports = router;