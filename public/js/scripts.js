/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// General

if (screen.height >= 1024) {
  setTimeout(() => {
    $('body').removeClass('loading')
    $('.fadeIn').fadeIn(600)
  }, 2500)

  setTimeout(() => {
    $('.fadeIn').fadeIn(1000)
  }, 3500)
} else {
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
  }, 2500)

  setTimeout(() => {
    $('.fadeIn').fadeIn(1000)
    $('.fadeIn2').fadeIn(1000)
    $('.fadeIn3').fadeIn(1000)
    $('.fadeIn4').fadeIn(1000)
    $('.fadeIn5').fadeIn(1000)
    $('.fadeIn6').fadeIn(1000)
    $('.fadeIn7').fadeIn(1000)
    $('.fadeIn8').fadeIn(1000)
  }, 3500)
}

// Header

$(window).scroll(function () {
  if ($(this).scrollTop() >= 300) {
    $('header').addClass('navigation-sticky navigation-unpin')
  } else {
    $('header').removeClass('navigation-sticky navigation-unpin')
  }
})

// Scroll Fade in

if (screen.height >= 1024) {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      setTimeout(() => {
        $('.fadeIn2').fadeIn(600)
      }, 300)
    }

    if ($(this).scrollTop() >= 400) {
      setTimeout(() => {
        $('.fadeIn3').fadeIn(600)
      }, 300)
    }

    if ($(this).scrollTop() >= 700) {
      setTimeout(() => {
        $('.fadeIn4').fadeIn(600)
      }, 300)
    }

    if ($(this).scrollTop() >= 1000) {
      setTimeout(() => {
        $('.fadeIn5').fadeIn(600)
      }, 300)
    }

    if ($(this).scrollTop() >= 1300) {
      setTimeout(() => {
        $('.fadeIn6').fadeIn(600)
      }, 300)
    }

    if ($(this).scrollTop() >= 1300) {
      setTimeout(() => {
        $('.fadeIn7').fadeIn(600)
      }, 300)
    }

    if ($(this).scrollTop() >= 1600) {
      setTimeout(() => {
        $('.fadeIn8').fadeIn(600)
      }, 300)
    }
  })
}

// Header menu

$(document).on('click', '.menu-toggle', function (e) {
  e.preventDefault()

  $(this).toggleClass('active')

  $('#menu-main-menu').fadeToggle(300)
})

// Slider home

setTimeout(() => {
  const myCarousel = document.querySelector('#sliders')

  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3500,
    wrap: true
  })

  const sliderCarousel = document.querySelector('.slider-bakery')

  const carouselBakery = new bootstrap.Carousel(sliderCarousel, {
    interval: 2000,
    wrap: true
  })
}, 3500)

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
  console.log('test')
  $('html, body').animate({ scrollTop: 0 }, 600)
})
