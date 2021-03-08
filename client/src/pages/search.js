import React, { useState} from "react";
import { Input, FormBtn } from "../components/form";
import {Container, Row, Col} from "react-bootstrap";
import API from "../utils/API";
import SearchResultContainer from "../components/searchResultContainer.js";


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
            <SearchResultContainer items={books} />
        </div>
    )    
};

export default Search;