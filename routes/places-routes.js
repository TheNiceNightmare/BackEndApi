//Código de la clase
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Importaciones
const express = require('express');
const uuid = require('uuid');
const HttpError = require('../models/http-error');

const placesController = require('../controllers/places-controllers');

const router = express.Router();

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

router.get('/',placesController.getAllPlaces,);

 router.get('/:pid', placesController.getPlacesById);

 router.get('/users/:uid',placesController.getPlacesByCreator);

router.post('/',placesController.postPlaces);

module.exports = router;



// app.get('/api/places', (req, res, next) => {
//     const places = DUMMY_PLACES;
//     res.send(places);
//     next();
// });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Mi código.
// const express = require('express');
// const router = express.Router();

// const DUMMY_PLACES = [
//     {
//         id: "p1",
//         title: "Rotonda",
//         creator: "u1"
//     },
//     {
//         id: "p2",
//         title: "Centro Cívico",
//         creator: "u1"
//     },
//     {
//         id: "p3",
//         title: "Parque Central",
//         creator: "u2"
//     },
//     {
//         id: "p4",
//         title: "Plaza de Armas",
//         creator: "u2"
//     },
//     {
//         id: "p5",
//         title: "Puerto Viejo",
//         creator: "u3"
//     },
//     {
//         id: "p6",
//         title: "Mirador del Sol",
//         creator: "u3"
//     },
//     {
//         id: "p7",
//         title: "Cascada Esmeralda",
//         creator: "u4"
//     },
//     {
//         id: "p8",
//         title: "Bosque Encantado",
//         creator: "u4"
//     },
//     {
//         id: "p9",
//         title: "Montaña Azul",
//         creator: "u5"
//     },
//     {
//         id: "p10",
//         title: "Lago Sereno",
//         creator: "u5"
//     },
//     {
//         id: "p11",
//         title: "Jardín Botánico",
//         creator: "u6"
//     },
//     {
//         id: "p12",
//         title: "Paseo Marítimo",
//         creator: "u6"
//     },
//     {
//         id: "p13",
//         title: "Colina Dorada",
//         creator: "u7"
//     },
//     {
//         id: "p14",
//         title: "Teatro Principal",
//         creator: "u7"
//     },
//     {
//         id: "p15",
//         title: "Reserva Natural",
//         creator: "u8"
//     },
//     {
//         id: "p16",
//         title: "Río Encantado",
//         creator: "u8"
//     },
//     {
//         id: "p17",
//         title: "Avenida Principal",
//         creator: "u9"
//     },
//     {
//         id: "p18",
//         title: "Puente Colgante",
//         creator: "u9"
//     },
//     {
//         id: "p19",
//         title: "Barrio Histórico",
//         creator: "u10"
//     },
//     {
//         id: "p20",
//         title: "Torre del Reloj",
//         creator: "u10"
//     }
// ];


// router.get('/', (req, res, next) => {
//     try {
//         res.json({ places: DUMMY_PLACES });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Error desconocido" });
//     }
// });

// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());

// router.get('/:identifier', (req, res, next) => {
//     try {
//         res.setHeader('Content-Type', 'application/json; charset=utf-8');
//         const identifier = req.params.identifier;
//         const place = DUMMY_PLACES.find(p => p.id === identifier || p.title === identifier);
//         if (!place) {
//             return res.status(404).json({ message: "Lugar no encontrado" });
//         }
//         const formattedPlace = JSON.stringify(place, null, 2);
//         res.send(formattedPlace);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Error desconocido" });
//     }
// });

// router.get('/creator/:creatorId', (req, res, next) => {
//     try {
//         res.setHeader('Content-Type', 'application/json; charset=utf-8');
//         const creatorId = req.params.creatorId;
//         const placesByCreator = DUMMY_PLACES.filter(place => place.creator === creatorId);
//         if (placesByCreator.length === 0) {
//             return res.status(404).json({ message: "No se encontraron lugares para este creador" });
//         }
//         res.json({ places: placesByCreator });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Error desconocido" });
//     }
// });

// module.exports = router;






























































