import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import "./style.css"

function SearchResult(props) {
    const {book} = props;
    return(
        <Container className = "searchbox p-4">
          <Row>
            <Col className="col-md-10 text-left">
              <h5>{book.volumeInfo.title}</h5>
            </Col> 
            <Col className="col-md-1">
                <a href={book.volumeInfo.previewLink} target="_blank" type="button">View</a></Col>
            <Col className="col-md-1">
                <button type="button">Save</button>
            </Col>
          </Row>
          <Row>
              <Col className="col-md-12 text-left">
                <p>Written By : {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : ""}
                 </p>
              </Col>
          </Row>
          <Row>
              <Col className="col-md-2">
                  {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ?
                      <img src = {book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                      : ""}
              </Col>
              <Col className="col-md-10 text-justify">
                      {book.volumeInfo.description}
              </Col>
          </Row>
          <Row>
            
          </Row>
          <br />
      </Container>
    )
}

export default SearchResult;