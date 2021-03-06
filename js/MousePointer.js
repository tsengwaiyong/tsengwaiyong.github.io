var card_m = $(".card-m");
var card_l = $(".card-l");
var mouse = $(".mousepointer");

$(document).mousemove(function(e) {

  mouse.css({
    "left": e.pageX,
    "top": e.pageY
  });
});

card_m.mouseover(function(e) {
  mouse.css("opacity", "0");

  $(e.target).mousemove(function(e) {
    var offsetx = e.offsetX / 20 + 'px'
    var offsety = e.offsetY / 20 + 'px'

    $(e.target).css({
      "transform": "translate(" + offsetx + "," + offsety + ")"
    });
  });

  $(e.target).mouseleave(function(e) {
    mouse.css("opacity", "1");
    $(e.target).css({
      "transform": "translate(0px,0px)"

    });
  });
});


card_l.mouseover(function() {
  mouse.css("opacity", "0");
});

card_l.mouseleave(function() {
  mouse.css("opacity", "1");
});