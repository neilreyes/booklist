import React, { Component } from "react";
import { connect } from "react-redux";

import { ListGroupItem } from "react-bootstrap";

class BookList extends Component{
    render(){
        const books = this.props.books;
    
        return(
            books.map( book => {
                return (
                    <ListGroupItem key={book.title}>{book.title}</ListGroupItem>
                )
            })
        );
    };
}

function mapStateToProps(state){
    return {
        books : state.books
    }
};

export default connect(mapStateToProps)(BookList);