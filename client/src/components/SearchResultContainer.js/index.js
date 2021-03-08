import React from "react";
import SearchResult from "../SearchResult";
//import {Container, Row, Col} from "react-bootstrap";
import "./style.css"

function SearchResultContainer(props) {
 console.log("SearchResultContainer", props);
  return (
    <div>
      <h4 className="text-left ml-5 pl-5">Results</h4>
      {props.items.map(book=> ( 
        <SearchResult key="book.id" book={book} />
      ))}
   </div>
  )
}
export default SearchResultContainer;