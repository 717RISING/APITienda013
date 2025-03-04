const exp = require('express');
require('dotenv').config();
const app = exp();
const enrutador = require('./routes/router')

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

app.use('/v1', enrutador)

app.listen(process.env.PORT, ( )=>{
    console.log('Servidor en el puerto '+ process.env.PORT ) 
    console.log("sevidor en linea");
} )