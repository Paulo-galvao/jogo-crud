const express = require('express');
const app = express();
const port = 3000;

const gender_router = require('./routes/gender.js');
const estudio_router = require('./routes/estudio.js');
const publisher_router = require('./routes/publisher.js')
const nomeMaiusculo = require('./middlewares/nomeMauisculo.js');

app.use(express.json());  

app.use(nomeMaiusculo);

app.use('/genero' ,gender_router);
app.use('/estudio' ,estudio_router);
app.use('/publicadora' ,publisher_router);

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});