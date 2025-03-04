const modeloProducto = require('../models/productos.model');

exports.buscar = async (req,res)=>{
    let resultado = await modeloProducto.find({});
    console.log(resultado);
    if(resultado){
        res.json({"mensaje":resultado});
    }else{
        res.json({"mensaje": "hubo un error"});
    }
};
exports.buscarPorNom = async (req,res)=>{
    let resultado = await modeloProducto.find({"nombre":req.params.x});
    console.log(resultado)
    if (resultado){
        res.json({"mensaje":resultado});
    }else{
        res.json({"mensaje": "hubo un error"});
    }        
};

exports.insertarProducto = async (req, res)=>{
    const nuevoProducto =   {
        "referencia": req.body.referenciaProducto,
        "nombre": req.body.nombreProducto,
        "precio": req.body.precioProducto,
        "habilitado": true,
    };

    let Insercion = await modeloProducto.create(nuevoProducto);
    if(Insercion)
        res.status(200).json({"mensaje":"registro exitoso"})
    else
        res.status(404).json({"mensaje":"Se presento un error"})
};

exports.actualizarProducto = async (req, res)=>{
    const productoEditado = {
        "referencia": req.body.referenciaProducto,
        "nombre": req.body.nombreProducto,
        "cantidad": req.body.cantidadProducto,
        "precio": req.body.precioProducto,
        "habilitado": true,
    };
    let Actualizacion = await modeloProducto.findOneAndUpdate({referencia:req.params.ref},productoEditado);
    if (Actualizacion)
        res.status(200).json({"mensaje":"actualizacion extitosa"})
    else
        res.status(404).json({"mensaje":"Se presento un error"})    
};

exports.eliminarProducto =  async (req, res) => {
    console.log(req.params.id, req.body.referenciaProducto)
    let eliminacion = await modeloProducto.findOneAndDelete({referencia:req.params.id});
    if (eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa"})
    else
    res.status(404).json({"mensaje":"se presento un error"})
};