const model = require('../models/estudio.js');

const db = [
    {   
        id: 1,
        nome: "estudio",
        criado_em: "data",
        atualizado_em: "data"
    }
];

let lastID;
if(db.length == 0) {
    lastID = 0;
} else {
    lastID = db[db.length - 1].id;
}

function store(body) {
    lastID++;
    const register = model(body, lastID);
    if(register != undefined) {
        db.push(register);
        return 201;
    } else {
        return 400;
    }
}

function showAll() {
    return db;
}

function showById(id) {
    return db.find(el => el.id == id);
}

function update(body, id) {
    const index = db.findIndex(el => el.id == id);
    const criado_em = db.find(el => el.id == id).criado_em;
    const register = model(body, parseInt(id), criado_em);

    if(register != undefined && index != -1) {
        db[index] = register;
        return 201;
    } else {
        return 400;
    }
}

function destroy(id) {
    const index = db.findIndex(el => el.id == id);
    
    if(index != -1) {
        db.splice(index, 1);
        return 201;
    } else {
        return 400;
    }
}

module.exports = {store, showAll, showById, update, destroy};