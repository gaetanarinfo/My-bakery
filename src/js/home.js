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


// Header menu

$(document).on('click', '.menu-toggle:not(.active)', function (e) {
  e.preventDefault()

  $(this).addClass('active')

  $('#menu-main-menu').fadeIn(300)

})

$(document).on('click', '.menu-toggle.active', function (e) {
  e.preventDefault()

  $(this).removeClass('active')

  $('#menu-main-menu').fadeOut(300)

})

$(document).on('click', '#menu-main-menu .menu-item', function (e) {

  $('.menu-toggle').removeClass('active')

  $('#menu-main-menu').fadeOut(300)

})

// Slider home

setTimeout(() => {
  const myCarousel = document.querySelector('#sliders')

  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4500,
    wrap: true
  })

  const sliderCarousel = document.querySelector('.slider-bakery')

  const carouselBakery = new bootstrap.Carousel(sliderCarousel, {
    interval: 2000,
    wrap: true
  })
}, 2500)

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

// Header SearchBox

setTimeout(() => {
  $('.search-btn').on('click', function (e) {
    e.preventDefault()

    $('.searchbox').addClass('active')
    $('body').css({
      overflow: 'hidden'
    })
  })

  $('.searchbox-remove').on('click', function (e) {
    e.preventDefault()

    $('.searchbox').removeClass('active')
    $('body').css({
      overflow: 'auto'
    })
  })
}, 4000)

// Scroll click

$(document).on('click', '.scroll-click', function (e) {
  e.preventDefault()

  const scroll = $(this).data('scroll')

  $([document.documentElement, document.body]).animate({
    scrollTop: $('#' + scroll).offset().top
  }, 'slow')

})
