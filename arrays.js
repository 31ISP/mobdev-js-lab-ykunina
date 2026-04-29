const arraybal = [4,5,3,5,2,4,5,3]
const sum = arraybal.reduce((acc, bal) =>  acc + bal, 0)
const average = sum / arraybal.length
console.log("№1", average.toFixed(2))   

const students = arraybal.filter(bal => bal>3) 
console.log("№2", students.map(bal => "Оценка " + bal))

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]
console.log("№3", fruits.sort())

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const sortprice = products.filter(p => p.price < 10000)
const namesort = products.map(product => product.name)
const summ = products.reduce((acc, price) => acc + price.price, 0)
console.log("№4","Дешевле 10К = " + JSON.stringify(sortprice) + ",  Сортировка по имени: " + namesort + ", Общая стоимость: " + summ)

const lastrarray = [12, 45, 7, 33, 18]
console.log("№5", "Хоть 1 больше 40 = " + lastrarray.some(n => n > 40) + ", Все ли больше 5 =" + lastrarray.every(n => n > 5))