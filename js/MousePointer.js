var card_m = $(".card-m");
var card_l = $(".card-l");
var mouse = $(".mousepointer");

$(document).mousemove(function(e) {

  mouse.css({
    "left": e.pageX,
    "top": e.pageY
  });
});

card_m.mouseover(hovercard);
card_l.mouseover(hovercard);


function hovercard(e) {
  mouse.css("opacity", "0");

  $(e.target).mousemove(function(e) {
    var targetHalfWidth = $(e.target).innerWidth() / 2;
    var targetHalfHeight = $(e.target).innerHeight() / 2;
    var offsetx = -((targetHalfWidth - e.offsetX) / 20) + 'px';
    var offsety = -((targetHalfHeight - e.offsetY) / 20) + 'px';

    $(e.target).css({
      "transform": "translate(" + offsetx + "," + offsety + ")"
    });
  });

  $(e.target).mouseleave(function(e) {
    mouse.css("opacity", "1");
    $(e.target).css({
      "transform": "translate(0px,0px)",
    });
  });
}