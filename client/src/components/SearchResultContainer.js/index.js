import React from "react";
import SearchResult from "../SearchResult";
import {Container, Row, Col} from "react-bootstrap";

function SearchResultContainer(props) {
 console.log("SearchResultContainer", props);
  return (
    <Container className="border border-dark">
            <Row>
                <Col className="col-md-12"><h4 className="text-left ml-3">Results</h4></Col>
            </Row>
      {props.items.map(book=> ( 
        <SearchResult key="book.id" book={book} />
      ))}
      </Container>
  )
}
export default SearchResultContainer;