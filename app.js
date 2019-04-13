const list = document.querySelector('#book-list ul');

// delete books through parent UL than applying it for each item which will take more resources
list.addEventListener('click', function(e){
   if(e.target.className == 'delete'){
       const li = e.target.parentElement;
       list.removeChild(li)
   } 
});