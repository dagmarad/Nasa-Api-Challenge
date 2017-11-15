$(function(){
  function loadRandomImage(image){
    var date = function getRandomInt(min,max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function loadPhoto(){
      $.ajax({
        url:urlNasa
      }).done(function(response){
          if(response.media_type=='image'){
            $(image).find('p').text(response.title);
            $(image).css('background-image', 'url('+response.url+')');
          } else{
            loadRandomImage(image)
          }
      }).fail(function(error){
        console.log(error)
      })
    }

    let year = date(2000,2016);
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
  let list=$('li');
  let listFirst=$('li').eq(0);
  console.log(listFirst);
  let index=0;

$('li').eq(0).addClass( 'visible');

$('.next').on('click', function(){
  console.log('next');
  list[index].classList.remove('visible');
  if (index<list.length-1){
    index++;
  }else{
      index=0;
    }
    list[index].classList.add("visible");
  });

$('.previous').on('click', function(){
  list[index].classList.remove("visible");
  if(index >0){
    index--;
  } else {
    index=list.length-1;
  }
  list[index].classList.add("visible");
});

});
