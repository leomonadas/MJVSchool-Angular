// 01 Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função.

interface Idinscricao{
    id: number
}

interface Nomecandidato{
    nome: string
}

type Inscricao = Idinscricao & Nomecandidato;

const inscricao: Inscricao = {
    id: 1,
    nome: 'Leonardo'
}

console.log(inscricao)

//02

export const handlers = {
    click: (target: HTMLElement) => { },
    scroll: (distance: number) => { },
} as const;

export type Handlers = typeof handlers;

export type HandlerTypes = keyof Handlers;

// Melhore a tipagem dessa função para que limite o parametro 
// somente para os tipos de handlers disponíveis e que o retorno do handler 
// corresponda ao tipo que foi passado
// Remove também o cast forçado que atualmente está evitando o erro de compilação
function getHandler(handlerType: string): Function {
    return handlers[handlerType as keyof Handlers];
}