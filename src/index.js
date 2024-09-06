const express = require('express');
const app = express();
const port = 3000;

const gender_router = require('./routes/gender.js');

app.use(express.json());

const nomeMaiusculo = require('./middlewares/nomeMauisculo.js');
app.use(nomeMaiusculo);

app.use('/genero' ,gender_router);

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});