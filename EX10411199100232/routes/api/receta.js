var express = require('express');
var router = express.Router();

var uuid = require('uuid/v4');//Identificador

var recetaCollection = [];
var recetaStruct = {

    id: '',
    receta: '',
    precio: '',
    tipo: '',
    observacion: '',
    estado: ''
}
recetaCollection.push(
    Object.assign( 
        {},
     recetaStruct,
        {
            id: uuid(),
            receta: 'pollo frito',
            precio: '100',
            tipo: 'Picocito',
            observacion: 'Se vende completo 8 piezas ',
            estado: 'Servido' 
        }
    )
);

router.get('/', (req, res, next)=>{
    //Obtiene la coleccion de las recetas
    res.status(200).json(recetaCollection);
});//Get

router.post('/', (req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});//post

router.put('/:id', (req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});//put

router.delete('/:id', (req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});//delete

module.exports = router;
