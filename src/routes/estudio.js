const express = require('express');
const router = express.Router();
const estudio_controller = require('../controllers/estudio.js');

router.get('/', (req, res) => {
    res.json(estudio_controller.showAll());
});

router.get('/:id', (req, res) => {
    res.send(estudio_controller.showById(req.params.id));
});

router.post('/', (req, res) => {
    const code = estudio_controller.store(req.body);
    res.status(code).json();
});

router.put('/:id', (req, res) => {
    const code = estudio_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete('/:id', (req, res) => {
    const code = estudio_controller.destroy(req.params.id);
    res.status(code).json();
});

module.exports = router;