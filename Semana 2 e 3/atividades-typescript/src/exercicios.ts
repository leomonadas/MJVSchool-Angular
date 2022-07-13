//  * EXERCÍCIOS
//  * 
//  * Antes de começar, certifique-se de instalar as 
//  * dependências do projeto utilizando "npm install"
//  * 
//  * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
//  * 
//  * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
//  * nome, profissão, idade e uma lista de assuntos de seu interesse.

type InfoPessoa = {
    nome: string;
    profissao: string;
    idade: number;
    assuntosDeInteresse: string[]
};

//  * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.

const pessoa1: InfoPessoa = {
    nome: "Leonardo",
    profissao: "Front-end Jr",
    idade: 25,
    assuntosDeInteresse: ["Jogar Valorant", "Ler", "Ouvir Podcasts", "Ouvir músicas"]
};

//  * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
//  * e retorne somente a lista de assuntos do objeto.

function imprimeInteresses (pessoa: InfoPessoa){
   return pessoa.assuntosDeInteresse
};


//  * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.

function imprimeInteressesTipagem (pessoa: InfoPessoa): string[] {
    return pessoa.assuntosDeInteresse
 };

//  * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)

enum MateriasdoCurso {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
};

//  * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.

interface InfoProfessores {
    nome: string,
    materias: MateriasdoCurso[]
};

//  * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
//  * Nathan = Angular e Git, Alan = Angular, Typescript e Git

const Alan: InfoProfessores = {
    nome: "Alan",
    materias: [MateriasdoCurso.Angular, MateriasdoCurso.Typescript, MateriasdoCurso.Git]
};

const Nathan: InfoProfessores = {
    nome: "Nathan",
    materias: [MateriasdoCurso.Angular, MateriasdoCurso.Git]
};

//  * 8 - Declare e popule um array com os objetos do exercício 7.

const professores: InfoProfessores[] = [Alan, Nathan]
console.log(professores)

//  * 9 - Faça uma função que receba um argumento de array de Professor 
//  * e retorne um novo array de strings contendo somente os nomes dos professores.

const nomeProfessores = (nomeProfessor: InfoProfessores[]): string[] => {
    
    return professores.map(nomeProfessor => nomeProfessor.nome)
};

//  * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.

const materiasProfessores = (materiaProfessor: InfoProfessores[]): MateriasdoCurso[] => {
    const cursos: MateriasdoCurso[] = [];
    professores.forEach((materiaProfessor) =>{
        materiaProfessor.materias.forEach(materias => {
            cursos.push(materias)
        })
}) 
    return cursos
};

//  * 11 - Faça uma função que receba um argumento de array de Professores e 
//  * retorne o primeiro Professor encontrado que dê aula de Typescript.

const professorTypescript = (professor: InfoProfessores[]) => {
    return professores.find(professor => professor.materias.includes(MateriasdoCurso.Typescript))
};
 