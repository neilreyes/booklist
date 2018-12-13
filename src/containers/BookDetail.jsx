import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render(){

        if( !this.props.activeBook ){
            return(<h2>Select a book to get started.</h2>)
        }

        return (
            <div>
                <h2>{this.props.activeBook.title}</h2>
                <span>{this.props.activeBook.pages} pages</span>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);