"use strict";
// 01 Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função.
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = void 0;
const inscricao = {
    id: 1,
    nome: 'Leonardo'
};
console.log(inscricao);
//02
exports.handlers = {
    click: (target) => { },
    scroll: (distance) => { },
};
// Melhore a tipagem dessa função para que limite o parametro 
// somente para os tipos de handlers disponíveis e que o retorno do handler 
// corresponda ao tipo que foi passado
// Remove também o cast forçado que atualmente está evitando o erro de compilação
function getHandler(handlerType) {
    return exports.handlers[handlerType];
}
