const express = require('express');
const router = express.Router();
const gender_controller = require('../controllers/gender.js');

router.get('/', (req, res) => {
    res.send(gender_controller.showAll());
});

router.get('/:id', (req, res) => {
    res.send(gender_controller.showById(req.params.id));
});

router.post('/', (req, res) => {
    const code = gender_controller.store(req.body);
    res.status(code).json();
});

router.delete('/:id', (req, res) => {
    const code = gender_controller.destroy(req.params.id);
    res.status(code).json();
});

router.put('/:id', (req, res) => {
    const code = gender_controller.update(req.body, req.params.id);
    res.status(code).json();
});

module.exports = router;