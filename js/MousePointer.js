var hoverable = $(".hoverable");
var mouse = $(".mousepointer");

$(document).mousemove(function(e) {

  mouse.css({
    "left": e.pageX,
    "top": e.pageY
  });
});

hoverable.mouseover(hover);


function hover(e) {
  mouse.css("opacity", "0");
  mouse.css("transform", "translateX(-50%) translateY(-50%) scale(0.1)");


  $(e.target).css("box-shadow", "0 0 0 1px rgb(0, 0, 0, 0.1) inset,0 0 48px rgba(0, 0, 0, 0.2)");

  $(e.target).mousemove(function(e) {
    var targetHalfWidth = $(e.target).innerWidth() / 2;
    var targetHalfHeight = $(e.target).innerHeight() / 2;
    var offsetx = -((targetHalfWidth - e.offsetX) / 16) + 'px';
    var offsety = -((targetHalfHeight - e.offsetY) / 16) + 'px';

    $(e.target).css({
      "transform": "translate(" + offsetx + "," + offsety + ")"
    });
  });

  $(e.target).mouseleave(function(e) {
    mouse.css("opacity", "1");
    mouse.removeAttr("style", "transform");

    $(e.target).css("box-shadow", "");
    $(e.target).css({
      "transform": "translate(0px,0px)",
    });
  });


}