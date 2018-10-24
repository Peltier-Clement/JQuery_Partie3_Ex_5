$(function(){
var heightWindow = $(window).height();
var widthWindow = $(window).width();
$ ('text').keydown(function(e){
  var positionSquareX = $('#square').offset().left;
  var positionSquareY = $('#square').offset().top;
  switch (e.keyCode) {
    case 39:
    if (positionSquareX >= (widthWindow -110)) {
      $('#square').css('mergin-left', '0');
    } else {
      $('#square').css('margin-left','+=10px');
    }
    break;
    case 38:
    if (positionSquareY <= 0) {
      $('#square').css('margin-left',widthWindow -110)
    }
  }
});
});
