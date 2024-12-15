// General

setTimeout(() => {
  $('body').removeClass('loading')
  $('.fadeIn').fadeIn(600)
  $('.fadeIn2').fadeIn(600)
  $('.fadeIn3').fadeIn(600)
  $('.fadeIn4').fadeIn(600)
  $('.fadeIn5').fadeIn(600)
  $('.fadeIn6').fadeIn(600)
  $('.fadeIn7').fadeIn(600)
  $('.fadeIn8').fadeIn(600)
  $('.fadeIn9').fadeIn(600)
  $('.fadeIn10').fadeIn(600)
  $('.fadeIn11').fadeIn(600)
  $('.fadeIn12').fadeIn(600)
  $('.fadeIn13').fadeIn(600)
  $('.fadeIn14').fadeIn(600)

  $('.carousel-control-prev').on('click', function (e) {
    e.preventDefault()
  })

  $('.carousel-control-next').on('click', function (e) {
    e.preventDefault()
  })

}, 2500);

// Header
$(window).scroll(function () {
  if ($(this).scrollTop() >= 300) {
    $('.fadeIn.header').addClass('navigation-sticky navigation-unpin')
  } else {
    $('.fadeIn.header').removeClass('navigation-sticky navigation-unpin')
  }
})

// Slider home

setTimeout(() => {
  const myCarousel = document.querySelector('#sliders')

  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2500,
    wrap: true
  })

}, 3000)

// Slider ratings

$(document).on('click', '.dot', function (e) {
  e.preventDefault()

  const id = $(this).data('slide')

  setTimeout(() => {
    $(document).find('div.card-p').fadeOut(300)
  }, 300)

  setTimeout(() => {
    $('#slide-' + id).fadeIn(300)
  }, 600)

  $(document).find('div.dot').removeClass('active')
  $(this).addClass('active')
})

// FOOTER

// Back to top

$(window).scroll(function () {
  if ($(this).scrollTop() >= 300) {
    $('#back-top').addClass('active')
  } else {
    $('#back-top').removeClass('active')
  }
})

$(document).on('click', '#back-top', function (e) {
  e.preventDefault()
  $('html, body').animate({ scrollTop: 0 })
})

// Scroll click

$(document).on('click', '.scroll-click', function (e) {
  e.preventDefault()

  const scroll = $(this).data('scroll')

  $([document.documentElement, document.body]).animate({
    scrollTop: $('#' + scroll).offset().top
  }, '200')

})
