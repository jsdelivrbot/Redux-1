import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick = {()=>this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //This function takes state as parameter
    //whatever is returned from here will show up as props inside BookList class

    return {
        books: state.books
    };
}

//data returned from this function will be available as props inside BookList class
function mapDispatchToProps(dispatch){
    //whenever selectBook is called result should be passed to all reducers
    return bindActionCreators({selectBook : selectBook}, dispatch);
}

//promote BookList from a component to a container
export default connect(mapStateToProps,mapDispatchToProps)(BookList);