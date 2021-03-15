import axios from "axios";

const API = {
    // Gets all books
    getBooks: function(title){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        console.log("API#saveBook", bookData);
        return axios.post("api/books", bookData);
    }
}

export default API;