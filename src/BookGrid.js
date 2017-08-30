import React, {Component} from 'react';
import Book from './Book';

class BookGrid extends Component {

    render(){

        let books = this.props.data;
        return (
        <div className="books-grid-container">
            <ol className="books-grid">
                {Array.isArray(books) ? books.map( ( book ) => 
                    <li key={book.id}>
                        <Book 
                            book={book}
                            onUpdate={this.props.onUpdate}
                        />
                    </li>
                ): <div> No books found </div> }
            </ol>    
        </div>
        );
    }
}

export default BookGrid;