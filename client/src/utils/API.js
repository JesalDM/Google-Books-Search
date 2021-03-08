import axios from "axios";

const API = {
    // Gets all books
    getBooks: function(title){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    }
}

export default API;