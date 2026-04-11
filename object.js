const book = {
    title: "Мастер и Маргарита",
    author: "Булгаков М.А.",
    year: "1967 г.",
    page: "480 стр.",
    available: true,
    info: function() { 
        return `${this.title}, ${this.author}, ${this.year}, ${this.page}. Доступна: ${this.available}` }
}
console.log("№1",book.info())    

const {title, author, rating = 0 }= book
console.log("№2",title, author, "рэйтинг = ",rating) 


const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
let passed = students.filter(student => student.passed === true)
const passedName = passed.map(student => student.name)
let bal = students.find(student => student.grade > 4.5)
const sumbal = students.reduce((sum, student) => sum + student.grade / student.,0 )
console.log("№3","Сдали:", passedName, "Бал > 4.5:", bal.name)
