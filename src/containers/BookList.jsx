import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component{
    render(){
        const books = this.props.books;
    
        return(
            books.map( book => {
                return (
                    <li className="list-item-group" key={book.title}>{book.title}</li>
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