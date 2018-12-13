import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render(){
        const book = this.props.activeBook;
        return (
            <div>
                {book.title}
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