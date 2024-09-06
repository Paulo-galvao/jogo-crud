// function gerarData() {
//     const date = new Date();
//     const dia = (date.getDay() + 1).toString();
//     const mes = (date.getMonth() + 1).toString();
//     const ano = date.getFullYear().toString();
//     const data = `${dia}/${mes}/${ano}`;
//     return data;
// }

// function model(body, id, dataCriada) {
//     const criado_em = new Date().toISOString();

//     if(
//         body.nome != "" && 
//         body.nome != undefined
        
//     ) {
//         return {
//             id,
//             nome: body.nome,
//             criado_em: dataCriada != undefined ? dataCriada : criado_em,
//             atualizado_em: new Date()
//         }
//     } else {
//         return undefined;
//     }
// }

function model(body, id, dataCriada) {
    const criado_em = new Date().toISOString();

    if(
        body.nome != "" && 
        body.nome != undefined
        
    ) {
        return {
            id,
            nome: body.nome,
            criado_em: dataCriada != undefined ? dataCriada : criado_em,
            atualizado_em: new Date()
        }
    } else {
        return undefined;
    }
}

module.exports = model;