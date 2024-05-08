const express = require('express');

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

    }
];

router.get('/', (req, res, next)=>{
    res.json({places : DUMMY_PLACES});
});

module.exports = router;

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get(':pid', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const formattedPlaces = JSON.stringify(DUMMY_PLACES, null, 2);
    res.send(formattedPlaces);
});

// app.get('/api/places/:pid', (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json; charset=utf-8');
//     const place = DUMMY_PLACES.find(p => p.id === req.params.pid);
//     if (!place) {
//         return res.status(404).json({ message: "Lugar no encontrado" });
//     }
//     const formattedPlace = JSON.stringify(place, null, 2);
//     res.send(formattedPlace);
// });
        
// app.get('/api/places/title/:title', (req, res, next) => {
//     res.setHeader('Content-Type', 'application/json; charset=utf-8');
//     const title = req.params.title;
//     const place = DUMMY_PLACES.find(p => p.title === title);
//     if (!place) {
//         return res.status(404).json({ message: "Lugar no encontrado" });
//     }
//     const formattedPlace = JSON.stringify(place, null, 2);
//     res.send(formattedPlace);
// });