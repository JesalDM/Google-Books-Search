import React from "react";
import SearchResult from "./searchResult";
import {Container, Row, Col} from "react-bootstrap";

function SearchResultContainer(props) {
 console.log("SearchResultContainer", props);
  return (
    <Container className="border border-dark">
            <Row>
                <Col className="col-md-12"><h4 className="text-left ml-3">{props.action === 'Save' ? 'Results' : 'Saved Books'}</h4></Col>
            </Row>
      {props.items.map(book=> ( 
        <SearchResult key={book.link} book={book} clickHandler={props.clickFunction} clickAction={props.action} />
      ))}
      </Container>
  )
}
export default SearchResultContainer;