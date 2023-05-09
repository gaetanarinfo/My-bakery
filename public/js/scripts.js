/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// General

setTimeout(() => {
  $('body').removeClass('loading')
  $('.fadeIn').fadeIn(600)
}, 2500)

setTimeout(() => {
  $('.fadeIn').fadeIn(1000)
}, 3500)

// Header menu

$(document).on('click', '.menu-toggle', function (e) {
  e.preventDefault()

  $(this).toggleClass('active')

  $('#menu-main-menu').fadeToggle(300)
})

// Sliders home

const myCarousel = document.querySelector('#sliders')

const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: true
})
