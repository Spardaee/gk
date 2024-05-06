$('.carousel-sync').on('slide.bs.carousel', function(ev) {
    var dir = ev.direction == 'right' ? 'prev' : 'next';
  $('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
});
$('.carousel-sync').on('slid.bs.carousel', function(ev) {
  $('.carousel-sync').removeClass('sliding');
});