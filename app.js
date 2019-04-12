var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));

// Make 'titles' into array
Array.from(titles).forEach(function(item){
    console.log(item);
})