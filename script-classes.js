class Book {
    constructor(title, author, pages) {
        this.title  = title;
        this.author = author;
        this.pages  = pages;
    }
    read() {
        return `Estou lendo ${this.title}`;
    }
}

let book = new Book('Algoritmos para viver', 'Brian', 500);

console.log(book);
console.log(book.read());

let otherBook = new Book( 'Um Exu em Nova York', 'Cidinha da Silva', 100 )

console.log(book, otherBook)

class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook('Código Limpo', 'Robert Cecil', 500, 'Algoritmos');

console.log(itBook)
console.log(itBook.title);
console.log(itBook.read());

// Conceito de encapsulamento
console.log( '\n + ### Conceito de encapsulamento ###');

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

var person = new Person('Fabio');

console.log(person.name);

person.name = 'Biones';

console.log(person.name);