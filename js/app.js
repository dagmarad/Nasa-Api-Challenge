$(function(){

console.log("nasa api ch");

let urlNasa="https://api.nasa.gov/planetary/apod?api_key=oWe4gdwdmS0UnFJ3FuMrO1sK6NaZTxDZoyf0rKTY";
let gallery=$('.gallery__list');
console.log(gallery);
let listGallery=$('li');
console.log(listGallery);
let title=$('h3');
console.log(title)

function loadPhoto(){
  $.ajax({
    url:urlNasa
  }).done(function(response){
    $('p.gallery__list__item').text(response.title);
    $('img').attr('src', response.url);
  }).fail(function(error){
    console.log(error)
  })
}
loadPhoto();




});
