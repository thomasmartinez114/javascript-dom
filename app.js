var btns = document.querySelectorAll('#book-list .delete');

// turn to array
Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function(e) {

        // when hit delete button make it delete the li (parent) that the button is in
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)


    });
});

// Prevent from navigating to site after clicking link
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to ', e.target.textContent, ' was prevented');
})