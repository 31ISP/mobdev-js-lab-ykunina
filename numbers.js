temperature = 36.6789


console.log("№1", temperature.toFixed(1))              // 36.68

a = 17
b = 5
console.log("№2", Math.floor(a / b)) 
console.log("№2", a%b)                            // 3

min = 0
max = 10
random = Math.floor(Math.random() * (max - min) + min)
console.log("№3",random)                             // Случайное число от 0 до 10

console.log("№4", isNaN( "100"/5))              // false
console.log("№4", isNaN("сто"/5))              // true

console.log("№5",Math.max(14, -3, 77, 0, -100, 42))                         // 77
console.log("№5",Math.min(14, -3, 77, 0, -100, 42))                         // -100