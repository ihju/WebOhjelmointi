const express = require('express');
const router = express.Router();

router.post('/shopProduct',(req, res) => {
    const body = req.body;
    const note = {
        name: body.name,
        lastname: body.lastname,
        age: body.age,
        number: body.number,
    }

    notes = notes.concat(note);

    res.json(note);

})