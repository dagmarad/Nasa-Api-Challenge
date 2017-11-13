$(function(){
  function loadRandomImage(image){
    var date = function getRandomInt(min,max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function loadPhoto(){
      $.ajax({
        url:urlNasa
      }).done(function(response){
        $(image).find('p').text(response.title);
        $(image).find('img').attr('src', response.url)
      }).fail(function(error){
        console.log(error)
      })
    }
    let year = date(1995,2017);
    let month = date(1,12);
    let day = date(1,28);
    let urlNasa="https://api.nasa.gov/planetary/apod?api_key=oWe4gdwdmS0UnFJ3FuMrO1sK6NaZTxDZoyf0rKTY"+"&date="+year+"-"+month+"-"+day;
    console.log(urlNasa);
    loadPhoto();
  }
  $(".gallery__list__item").each(function(){
    loadRandomImage(this);
  });



  //slider




});
