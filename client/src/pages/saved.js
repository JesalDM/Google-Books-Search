import React, {useEffect, useState} from 'react';
import Header from "../components/header";
import SearchResultContainer from "../components/searchResultContainer"
import API from '../utils/API';

function Saved(){
    const [books, setBooks] = useState([]);

    function deleteBook(savedBook) {
        const book_id = savedBook._id;
        API.deleteBook(book_id).then(() => {
            const updatedBooks = [...books].filter(book => book._id !== book_id);
            setBooks(updatedBooks);
        })
    }

    useEffect(() => {
        API.getSavedBooks().then(response => {
           setBooks(response.data);
        })
    }, [])
    return(
        <>
            <Header/>
            <SearchResultContainer items={books} action="Delete" clickFunction={deleteBook}/>
        </>
    )    
};

export default Saved;