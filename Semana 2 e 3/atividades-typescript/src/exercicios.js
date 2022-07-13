"use strict";
//  * EXERCÍCIOS
//  * 
//  * Antes de começar, certifique-se de instalar as 
//  * dependências do projeto utilizando "npm install"
//  * 
//  * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
//  * 
//  * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
//  * nome, profissão, idade e uma lista de assuntos de seu interesse.
//  * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
const pessoa1 = {
    nome: "Leonardo",
    profissao: "Front-end Jr",
    idade: 25,
    assuntosDeInteresse: ["Jogar Valorant", "Ler", "Ouvir Podcasts", "Ouvir músicas"]
};
//  * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
//  * e retorne somente a lista de assuntos do objeto.
function imprimeInteresses(pessoa) {
    return pessoa.assuntosDeInteresse;
}
;
//  * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
function imprimeInteressesTipagem(pessoa) {
    return pessoa.assuntosDeInteresse;
}
;
//  * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
var MateriasdoCurso;
(function (MateriasdoCurso) {
    MateriasdoCurso["Angular"] = "Angular";
    MateriasdoCurso["Typescript"] = "Typescript";
    MateriasdoCurso["Git"] = "Git";
})(MateriasdoCurso || (MateriasdoCurso = {}));
;
;
//  * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
//  * Nathan = Angular e Git, Alan = Angular, Typescript e Git
const Alan = {
    nome: "Alan",
    materias: [MateriasdoCurso.Angular, MateriasdoCurso.Typescript, MateriasdoCurso.Git]
};
const Nathan = {
    nome: "Nathan",
    materias: [MateriasdoCurso.Angular, MateriasdoCurso.Git]
};
//  * 8 - Declare e popule um array com os objetos do exercício 7.
const professores = [Alan, Nathan];
console.log(professores);
//  * 9 - Faça uma função que receba um argumento de array de Professor 
//  * e retorne um novo array de strings contendo somente os nomes dos professores.
const nomeProfessores = (nomeProfessor) => {
    return professores.map(nomeProfessor => nomeProfessor.nome);
};
//  * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
const materiasProfessores = (materiaProfessor) => {
    const cursos = [];
    professores.forEach((materiaProfessor) => {
        materiaProfessor.materias.forEach(materias => {
            cursos.push(materias);
        });
    });
    return cursos;
};
//  * 11 - Faça uma função que receba um argumento de array de Professores e 
//  * retorne o primeiro Professor encontrado que dê aula de Typescript.
const professorTypescript = (professor) => {
    return professores.find(professor => professor.materias.includes(MateriasdoCurso.Typescript));
};
