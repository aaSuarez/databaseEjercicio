const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{})


const productos = () => {
    [{
        id:1,
        nombre:'remera',
        descripcion:'la mejor remera',
        precio:456,
        habilitado:1,
        eliminado:0,
        ts_create:true,
        ts_update:true
        
    }]
}
module.exports = productos
module.exports = router;