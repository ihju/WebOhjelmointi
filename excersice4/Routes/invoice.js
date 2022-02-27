const express = require('express');
const router = express.Router();

router.get('/invoice',(req, res) => {
    res.json(notes)
})

router.get('/invoice/:id',(req, res) => {
    const id = req.params.id;
    const notes = notes.find(note => note.id === id)
})

router.delete('/invoide/:id',(req, res) => {
    const id = req.params.id;
    notes = notes.filter(note => note.id !== id)
})
