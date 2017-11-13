$(function(){

console.log("nasa api ch");

var date = function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var year = date(1990,2017);
var month = date(1,12);
var day = date(1,30);

let urlNasa="https://api.nasa.gov/planetary/apod?api_key=oWe4gdwdmS0UnFJ3FuMrO1sK6NaZTxDZoyf0rKTY"+"&date="+year+"-"+month+"-"+day;
console.log(urlNasa);
let gallery=$('.gallery__list');
let listGallery=$('li');


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
