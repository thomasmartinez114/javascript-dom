const list = document.querySelector('#book-list ul');

// delete books through parent UL than applying it for each item which will take more resources
list.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li)
    }
});

// add book-list
// listen for submit & prevent it from refreshing page when hitting submit
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // add/remove classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

//      Attributes - video 14
// 	• var.getAttribute('class')
// 	• Var.setAttribute('class', 'name-2')
// 	• Var.hasAttribute('class')
// 	• Var.removeAttribute('class')

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
    if (hideBox.checked) {
        list.style.display = 'none';
    }
    else {
        list.style.display = 'initial';
    }
});

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
   
    // convert the input text to lower case because matching is case-sensitive
   const term = e.target.value.toLowerCase();
   const books = list.getElementsByTagName('li');
    // turn the above line to an array
    Array.from(books).forEach(function(book){
        // grab just the title of book
        const title = book.firstElementChild.textContent;
        // check if term is in the book
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })
});
