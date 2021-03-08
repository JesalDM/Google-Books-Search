import React, { useState} from "react";
import { Input, FormBtn } from "../components/Form";
import {Container, Row} from "react-bootstrap";
import API from "../utils/API";
import SearchResultContainer from "../components/SearchResultContainer.js";


function Search(){
 const [books, setBooks] = useState([])
 const [formObject, setFormObject] = useState({})
      
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
       .then(res =>{console.log("handleFormSubmit", res); setBooks(res.data.items)})
        .catch(err => console.log(err));
    }
  };
      
    return(
        <div>
        <Container>
            <Row>
                <h5>Book Search</h5>
            </Row>
            <Row>
                <form>
                    <Input
                        onChange={handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                    />
                    <FormBtn
                        disabled={!(formObject.title)}
                        onClick={handleFormSubmit}
                    >
                        Search
                    </FormBtn>
                </form>
            </Row>
        </Container>
        <hr/>
        <SearchResultContainer items={books} />

    </div>
    )    
};

export default Search;