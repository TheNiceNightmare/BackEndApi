const express = require('express');

const app = express();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Rotonda',
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Centro cívico',
        creator: 'u1'
    }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/places', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const formattedPlaces = JSON.stringify(DUMMY_PLACES, null, 2);
    res.send(formattedPlaces);
});

app.get('/api/places/:pid', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const place = DUMMY_PLACES.find(p => p.id === req.params.pid);
    if (!place) {
        return res.status(404).json({ message: "Lugar no encontrado" });
    }
    const formattedPlace = JSON.stringify(place, null, 2);
    res.send(formattedPlace);
});

app.get('/api/places/title/:title', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const title = req.params.title;
    const place = DUMMY_PLACES.find(p => p.title === title);
    if (!place) {
        return res.status(404).json({ message: "Lugar no encontrado" });
    }
    const formattedPlace = JSON.stringify(place, null, 2);
    res.send(formattedPlace);
});

app.listen(3000, () => {
    console.log('Servidor Express en funcionamiento en el puerto 3000');
});
