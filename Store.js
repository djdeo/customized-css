// will store books 

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(book => {
            // add book to ui
            const ui = new UI;
            ui.addBookToList();
        })
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push('book');
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        const books2 = books.filter(book => book.isbn !== isbn);
        localStorage.setItem('books', JSON.stringify(books2));
    }
}