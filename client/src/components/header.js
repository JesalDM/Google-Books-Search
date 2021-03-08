import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

function Header() {
    return (
        <>
            <br/>
            <Container className="border border-dark p-3">
                <Row>
                    <Col className="col-md-12"><h2>(React) Google Books Search</h2></Col>
                    <Container className="p-3">
                        <Row>
                            <Col className="col-md-12">
                                <h5>Search for and Save Books of Interest</h5>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
            <br/>
        </>
    )
}

export default Header;