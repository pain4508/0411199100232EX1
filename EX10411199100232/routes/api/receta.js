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

router.post('/',(req, res, next)=>{
    var newReceta = Object.assign(
        {},
        recetaStruct,
        {id:uuid()},
        req.body
    );
    recetaCollection.push(newReceta);
    res.status(200).json(newReceta);

});//post.

router.put('/:id', (req, res, next)=>{

    var id = req.params.id;
    var origReceta = {};
    var modReceta = {};

    recetaCollection = recetaCollection.map((e, i)=>{
     
        if(e.id === id)
        {
            origReceta = Object.assign({}, e);
            return modReceta = Object.assign({}, e, req.body);
        }
        return e;
    });
    //Se muestra el producto con el codigo original y la modificacion.
    res.status(200).json({ original: origReceta, modificado: modReceta});
}); //put

router.delete('/:id', (req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});//delete

module.exports = router;
