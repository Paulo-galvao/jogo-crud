function nomeMaiusculo(req, res, next) {
    req.body.nome = req.body.nome.toUpperCase();
    next();
}

module.exports = nomeMaiusculo;