import React from "react"; 
import { Row, Col, ListGroup } from "react-bootstrap";
import '../App.css';
// Import components
import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

const App = () => {
    return (
        <div className="App container">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <BookList />
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <BookDetail />
                </Col>
            </Row>
        </div>
    )
}

export default App;
