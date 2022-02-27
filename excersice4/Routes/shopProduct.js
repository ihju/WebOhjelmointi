const express = require('express');
const router = express.Router();

router.post('/shopProduct',(req, res) => {
    const body = req.body;
    const note = {
        name: body.name,
        manufacturer: body.manufacturer,
        category: body.category,
        description: body.description,
        price: body.price
    }

    notes = notes.concat(note);

    res.json(note);

})

router.get('/shopProduct',(req, res) => {
    res.json(notes)
})

router.get('/shopProduct/:name',(req, res) => {
    const name = req.params.name;
    const notes = notes.find(note => note.name === name)
})

router.delete('/shopProduct/:name',(req, res) => {
    const name = req.params.name;
    notes = notes.filter(note => note.name !== name)
})

router.put('/shopProduct/:name',(req, res) => {
    const name = req.body;

    const shopProduct = {
        name: body.name,
        manufacturer: body.manufacturer,
        category: body.category,
        description: body.description,
        price: body.price
    }

})

module.exports = router;