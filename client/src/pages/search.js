import React, { useState} from "react";
import { Input, FormBtn } from "../components/form";
import {Container, Row, Col} from "react-bootstrap";
import API from "../utils/API";
import SearchResultContainer from "../components/searchResultContainer.js";
import Header from "../components/header";


function Search(){
 const [books, setBooks] = useState([]); // API Results state, initially empty array
 const [formObject, setFormObject] = useState({});// Form State, initially empty object.
      
  function saveBook(bookToSave) {
      console.log("Saving Book => ", bookToSave);
      API.saveBook(bookToSave)
        .then(res => console.log(res))
        .catch(err => console.log(err));
  }

// Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  }; 

// When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.getBooks(formObject.title)
       .then(res =>{
           const searchResults = [];
           res.data.items.forEach(resultItem => {
               const book = {};
               book.title = resultItem.volumeInfo.title;
               book.authors = resultItem.volumeInfo.authors || [] ;
               book.description = resultItem.volumeInfo.description;
               book.image = resultItem.volumeInfo.imageLinks && resultItem.volumeInfo.imageLinks.thumbnail ? resultItem.volumeInfo.imageLinks.thumbnail : "";
               book.link = resultItem.volumeInfo.previewLink;
               searchResults.push(book);
           });
           setBooks(searchResults)
        })
        .catch(err => console.log(err));
    }
  };
      
    return(
        <div>
            <Header/>
            <Container  className="border border-dark">
                    <Row>
                        <Col className="col-md-12">
                        <h4 className="m-3 text-left">Book Search</h4>
                        </Col>
                    </Row>
                    <Container>
                    <Row>
                        <Col className="col-md-12">
                            <form>
                                <Input  
                                    onChange={handleInputChange}
                                    name="title"
                                    placeholder="Title (required)"
                                    className="text-left w-100"
                                />
                                <FormBtn
                                    disabled={!(formObject.title)}
                                    onClick={handleFormSubmit}
                                >
                                    Search
                                </FormBtn>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <br/>
            <SearchResultContainer items={books} clickFunction={saveBook}/>
        </div>
    )    
};

export default Search;