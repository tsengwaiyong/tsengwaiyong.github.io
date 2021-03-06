$('.card-m').click(function() {
  $(".work-detail").addClass('show-work-detail');
})

$('.backbutton').click(function() {
  $(".work-detail").removeClass('show-work-detail');
})

// $('.work-detail').load("./aboutme.html")