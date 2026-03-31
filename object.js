const book = {
    title: "Мастер и Маргарита",
    author: "Булгаков М.А.",
    year: "1967 г.",
    page: "480 стр.",
    available: true,
    info: () => { 
        return `${this.title}, ${this.author}, ${this.year}, ${this.page}. Доступна: ${this.available}` }
}
console.log("№1",book.info())    

