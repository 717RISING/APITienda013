const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: [Number, "La refenerncia tiene que ser numero"],
        required: [true, "La refenerncia es obligatoria"]
    },
    nombre:{
        type: [String, "El tipo tiene que ser string"],
        required: [true, "La referencia es obligatoria"],
    },
    precio: {
        type: [mongoose.Types.Decimal128, "El precio tiene un decimal"],
        required: [true, "El precio es obligatorio"]
    },
    habilitado: {
        type: Boolean,
        default: true,
    }

});

const producto = mongoose.model("Producto", schemaProducto);
module.exports = producto;