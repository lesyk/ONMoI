$(window).load(function(){
  var thisIsImdb = window.location.href.indexOf('//www.imdb.com/') > 0;
  var thisIsAMoviePage = window.location.href.indexOf('/title/') > 0;

  if(thisIsImdb && !thisIsAMoviePage){
  
    var list = $(".results")
  
    $.each(list.find(".rating-list"), function(i, l){ 
      if($(l).attr("id").indexOf("your") > -1){
        $(l).parent().parent().parent().remove();
      }
      $.each(list.find(".btn2_text"), function(i, l){ 
        if($(l).text() == "Watchlist"){
          $(l).parent().parent().parent().parent().remove()
        }
      });
    });
  };
});