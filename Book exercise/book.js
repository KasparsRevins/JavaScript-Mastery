class Book{
    constructor() {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.quantity = quantity;
        this.reserved = reserved;
    }

    reserve(){
        try {
            if (quantity > 0){
                // Reserve book

            } else {
                throw new Error;
            }
        } catch (error) {
            
        }
    }

    returnCopy(){
        return reserved;
    }
}

class Library{
    constructor() {
        this.name = name;
        this.books = books;
    }

    addbook(book){
        // Adds a new book to the library

    }

    findBookByTitle(title){
        // Return an array of books matching given title

    }

    reserveBook(isbn){
        try {
            // Reserves a copy of the book with the given ISBN

            // if(){

            // } else {
            //     throw new Error;
            // }
        } catch (error) {
            alert("This book is currently unavailable.");
        }
    }

    returnBook(isbn){
        // Returns a reserved copy of the book with the given ISBN

    }
}