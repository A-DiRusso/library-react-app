import React from 'react';
import ReactDOM from 'react-dom';

const h = React.createElement


let h1 = h('h1', null, 'Bookstore');
let li = h('li', null, 'Books are coming soon');
let ul = h('ul', { className: 'book-list' }, li);
let footer = h('footer', null, 'copyright');


let main = h('main', null [
    h1,
    ul,
    footer
]);

ReactDOM.render(main, document.querySelector('.react-root'));