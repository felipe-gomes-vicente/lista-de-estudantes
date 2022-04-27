/**
 * 
 * Criar uma lista de **estudantes** e, 
 * cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.
Depois de criada a lista:
- Crie uma **função** que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é **7**, verifique **se** cada 
aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
 */

// Data structure with objects
const students = [
  {
    name: "Grande Nerd",
    noteOne: 10,
    noteTwo: 10,
  },
  {
    name: "Dorameira na Lua",
    noteOne: 6,
    noteTwo: 7,
  },
  {
    name: "Estudante neurótico",
    noteOne: 8,
    noteTwo: 7,
  },
];

// Function Average
function average(noteOne, noteTwo) {
  return (noteOne + noteTwo) / 2;
}

//Comparative operators 
function accredited(student) {
  result = average(student.noteOne, student.noteTwo);
  if (result >= 7) {
    return `    A media do(a) Aluno(a) ${student.name} é: ${result} 
    Parabéns ${student.name}, você passou no Concurso!`;
  } else {
    return `    A media do(a) Aluno(a) ${student.name} é: ${result} 
    Não Foi dessa vez ${student.name}, Tente Novamente!`;
  }
}

// Repeat structure
for (let student of students) {
  let showResult = accredited(student);
  alert(showResult);
}
