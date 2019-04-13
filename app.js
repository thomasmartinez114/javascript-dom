const list = document.querySelector('#book-list ul');

// delete books through parent UL than applying it for each item which will take more resources
list.addEventListener('click', function(e){
   if(e.target.className == 'delete'){
       const li = e.target.parentElement;
       list.removeChild(li)
   } 
});

// add book-list
    // listen for submit & prevent it from refreshing page when hitting submit
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
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