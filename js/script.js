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

const students = [
  {
    name: 'Grande Nerd',
    noteOne: 10,
    noteTwo: 10,
  },
  {
    name: 'Dorameira na Lua',
    noteOne: 6,
    noteTwo: 7,
  },
  {
    name: 'Estudante neurótico',
    noteOne: 8,
    noteTwo: 7,
  },  
]

function average(noteOne, noteTwo) {
  result = (noteOne + noteTwo)/ 2 
  return result
}

for ( let student of students ) {
  alert(` A media do(a) Aluno(a) ${student.name} é: ${average(student.noteOne, student.noteTwo)}`)
}