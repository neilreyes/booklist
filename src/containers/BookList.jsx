import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectBook } from "../actions";
import { ListGroupItem } from "react-bootstrap";

class BookList extends Component{

    render(){
        const books = this.props.books;
        return(
            books.map( book => {
                return (
                    <ListGroupItem
                        key={book.title}
                        onClick={ ()=>{ this.props.selectBook(book) } }
                    >
                        {book.title}
                    </ListGroupItem>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);