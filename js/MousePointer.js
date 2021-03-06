$(document).mousemove(function(e) {

  $('.mousepointer').css("left", e.pageX);
  $('.mousepointer').css("top", e.pageY);
});