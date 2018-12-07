import React from "react"; 
import { Row, Col, ListGroup } from "react-bootstrap";
import '../App.css';
// Import components
import BookList from "../containers/BookList";

const App = () => {
    return (
        <div className="App container">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <BookList />
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default App;
