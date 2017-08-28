import React, {Component} from 'react';
import BookGrid from './BookGrid';
import {Link} from 'react-router-dom';

class SearchBook extends Component {
    render(){
        return (    
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author"/>
                </div>
                </div>
                <div className="search-books-results">
                <BookGrid data={this.props.searchedBooks} onUpdate={this.props.onUpdate} />
                </div>
            </div>
        );
    }
}

export default SearchBook;