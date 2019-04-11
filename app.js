var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));

// // Line below will make 'titles' into an array
// console.log(Array.isArray(Array.from(titles)));

// Make 'titles' into array
Array.from(titles).forEach(function(item){
    console.log(item);
})