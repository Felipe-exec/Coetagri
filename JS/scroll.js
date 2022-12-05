$(window).scroll(function () {
  var scroll = $(window).scrollTop()

  if (scroll > 50) {
    $('.navbar').css('transition-duration', '0.7s')
    $('.navbar').css('background-color', 'whitesmoke')
    $('.img-responsive').css('filter', 'grayscale(0%)')
  } else {
    $('.navbar').css('background-color', 'transparent')
    $('.img-responsive').css('filter', 'grayscale(60%)')
  }
})
