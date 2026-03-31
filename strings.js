const sentence = "  javascript - это просто  ".trim()
console.log("№1", sentence[0].toUpperCase() + sentence.slice(1))                        // "  JAVASCRIPT -ЭТО ПРОСТО  "

const name = "Иванов Иван"
const group = "ИСР-21"
const bal = 4.75
console.log("№2", `Студент: ${name}, группa: ${group}, средний балл: ${bal}`)           // Студент Иванов Иван из группы ИСР-21 получил оценку 4.75 

const data = "15-03-2025".split("-")
console.log("№3", `${data[0]}.${data[1]}.${data[2]}`)      

const razrab = "Node.js разработчик"
const node = razrab.startsWith("Node")
const raz = razrab.endsWith("разработчик")
console.log("№4", "Начинается с  Node =" + node + ", заканчивается на разработчик =" + raz)                                                                // true true

const number = "42"
console.log("№5", number.padStart(8, "0"))                                                        // 00042
