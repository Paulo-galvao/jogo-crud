const express = require('express');
const router = express.Router();
const publisher_controller = require('../controllers/estudio.js');

router.get('/', (req, res) => {
    res.json(publisher_controller.showAll());
});

router.get('/:id', (req, res) => {
    res.send(publisher_controller.showById(req.params.id));
});

router.post('/', (req, res) => {
    const code = publisher_controller.store(req.body);
    res.status(code).json();
});

router.put('/:id', (req, res) => {
    const code = publisher_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete('/:id', (req, res) => {
    const code = publisher_controller.destroy(req.params.id);
    res.status(code).json();
});

module.exports = router;