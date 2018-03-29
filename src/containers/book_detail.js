import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){

        if(!this.props.ActiveBook){
            return (<div>
                Select a Book
            </div>);
        }

        return(
            <div>
             Selected Book {this.props.ActiveBook.title};
            </div>
        );
    }
}

function mapStateToProps(state){
    //This function takes state as parameter
    //whatever is returned from here will show up as props inside BookDetail class

    return {
        ActiveBook: state.ActiveBook
    };
}

//promote BookDetail from a component to a container
export default connect(mapStateToProps)(BookDetail);