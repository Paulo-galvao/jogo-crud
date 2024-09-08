function model(body, id, criado_em) {
    const update_time = new Date().toISOString();

    if(    
        body.nome != "" && 
        body.nome != undefined
        
    ) {
        return {
            id,
            nome: body.nome,
            criado_em: criado_em != undefined ? criado_em : update_time,
            atualizado_em: update_time
        }
    } else {
        return undefined;
    }
}

module.exports = model;