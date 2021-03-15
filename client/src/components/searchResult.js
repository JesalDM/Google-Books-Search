import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

function SearchResult(props) {
    const {book, clickHandler} = props;
    return(
      <>
        <Container className="border border-dark p-4">
          <Row>
            <Col className="col-md-10 text-left">
              <h5>{book.title}</h5>
            </Col> 
            <Col className="col-md-1">
                <a href={book.link} target="_blank" rel="noreferrer"><button type="button">View</button></a></Col>
            <Col className="col-md-1">
                <button type="button" onClick={()=> clickHandler(book)}>Save</button>
            </Col>
          </Row>
          <Row>
              <Col className="col-md-12 text-left">
                <p>Written By : {book.authors ? book.authors.join(", ") : ""}
                 </p>
              </Col>
          </Row>
          <Row>
              <Col className="col-md-2">
                  {book.image ?
                      <img src = {book.image} alt={book.title}/>
                      : ""}
              </Col>
              <Col className="col-md-10 text-justify">
                      {book.description}
              </Col>
          </Row>
      </Container>
      <br/>
      </>
    )
}

export default SearchResult;