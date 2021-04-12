$('.card-m').click(function() {
  $(".work-detail").addClass('show-work-detail');
})

$('.backbutton').click(function() {
  $(".work-detail").removeClass('show-work-detail');
})

$('.rightbar').scroll(function() {
  var rightbarscrolltop = $('.rightbar').scrollTop();
  if (rightbarscrolltop >= 50) {
    $('.webtitle').css("opacity", "0");
  } else {
    $('.webtitle').css("opacity", "1");

  }
});

// $('.work-detail').load("./aboutme.html")