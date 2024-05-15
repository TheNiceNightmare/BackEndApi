const HttpError = require('../models/http-error');
const {v4: uuiv4} = require('uuid');


const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Rotonda",
        creator: "u1"
    },
    {
        id: "p2",
        title: "Centro Cívico",
        creator: "u1"
    },
    {
        id: "p3",
        title: "Parque Central",
        creator: "u2"
    },
    {
        id: "p4",
        title: "Plaza de Armas",
        creator: "u2"
    },
    {
        id: "p5",
        title: "Puerto Viejo",
        creator: "u3"
    },
    {
        id: "p6",
        title: "Mirador del Sol",
        creator: "u3"
    },
    {
        id: "p7",
        title: "Cascada Esmeralda",
        creator: "u4"
    },
    {
        id: "p8",
        title: "Bosque Encantado",
        creator: "u4"
    },
    {
        id: "p9",
        title: "Montaña Azul",
        creator: "u5"
    },
    {
        id: "p10",
        title: "Lago Sereno",
        creator: "u5"
    },
    {
        id: "p11",
        title: "Jardín Botánico",
        creator: "u6"
    },
    {
        id: "p12",
        title: "Paseo Marítimo",
        creator: "u6"
    },
    {
        id: "p13",
        title: "Colina Dorada",
        creator: "u7"
    },
    {
        id: "p14",
        title: "Teatro Principal",
        creator: "u7"
    },
    {
        id: "p15",
        title: "Reserva Natural",
        creator: "u8"
    },
    {
        id: "p16",
        title: "Río Encantado",
        creator: "u8"
    },
    {
        id: "p17",
        title: "Avenida Principal",
        creator: "u9"
    },
    {
        id: "p18",
        title: "Puente Colgante",
        creator: "u9"
    },
    {
        id: "p19",
        title: "Barrio Histórico",
        creator: "u10"
    },
    {
        id: "p20",
        title: "Torre del Reloj",
        creator: "u10"
    }
];
const getAllPlaces =  (req, res, next)=>{
    res.json({DUMMY_PLACES});
}
const getPlacesById = (req, res, next) => {
    const place = DUMMY_PLACES.find(p => {
        return p.id === req.params.pid;
    });
    if(!place){
       const error = new Error('Lugar no existe para el ID especificado');
       error.code = 404;
       next(error);
    }else{
        res.json({place});
        console.log(place);
    }
}
const getUserById = (req, res, next)=>{
    const places = DUMMY_PLACES.find(p=>{
        return p.creator === req.params.uid
    });
    if(!places){
        throw new HttpError('Lugar no existe para el ID de usuario especificado', 404);
    }
    res.json({places});
 }
 const savePlaces = (req, res, next)=>{
    const {id, title, creator} = req.body;
    const createdPlace = {
        id : uuiv4(),
        title: title, 
        creator: creator
    };
    console.log(createdPlace);
    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({place:createdPlace});

 }
 const updatePlaces = (req, res, next)=>{
    const {title} = req.body;
    const PLaceId = req.params.pid;

    const updatedPlace = {... DUMMY_PLACES.find(p => p.id === PLaceId)};
    const placesIndex = DUMMY_PLACES.findIndex(p => p.id === PLaceId);

    updatedPlace.title = title;

    DUMMY_PLACES[placesIndex] = updatedPlace;

    res.status(200).json({place: updatedPlace});
};
 const deletePlace = (req, res, next)=>{
    const PlaceId = req.params.pid;
    
}


//Exportamos
exports.getAllPlaces = getAllPlaces;
exports.getPlacesById = getPlacesById;
exports.getUsersById = getUserById;
exports.savePlaces = savePlaces;
exports.updatePlaces = updatePlaces;
exports.deletePlace = deletePlace;