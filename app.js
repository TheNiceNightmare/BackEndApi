//Importaciones
const express = require('express');
const bodyParser = require('body-parser');


const placeRoutes = require('./routes/places-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placeRoutes);

//Manejo de errores
app.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({
        message : error.message || 'Error desconocido'
    });

});



app.listen(3000);