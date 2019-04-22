import React from 'react';
import ReactDOM from 'react-dom';

const h = React.createElement
const books = [
    {title: 'A tale of two Cities', author: 'Charles Dickens'},
    {title: 'War and Peace', author: 'Leo Tolstoy'},
    {title: 'The Count of Monte Cristo', author: 'Alexandre Dumas'}
];


// this can all be written as....


// let h1 = h('h1', null, 'Bookstore');
// let lis = books.map(book => 
//     h('li', null, book.title + ' by ' + book.author));
// let ul = h('ul', { className: 'book-list' }, lis);
// let footer = h('footer', null, 'copyright');


// let main = h('main', null [
//     h1,
//     ul,
//     footer
// ]);

//........this
let main = h('main', null [
    h('h1', null, 'Bookstore'),
    h('ul', { className: 'book-list' },
        books.map(book =>
            h('li', null, book.title + ' by ' + book.author)
        )
    ),
    h('footer', null, 'Copyright 2019')
]);

ReactDOM.render(main, document.querySelector('.react-root'));