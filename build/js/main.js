$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('overflow');
  $('.main-menu').addClass('is-open');
  setTimeout(function() {
    $('.main-menu__inner').addClass('is-open');
  }, 100);
  return false;
});

$(document).on('click', '.js-menu-closer', function () {
  $('.main-menu__inner').removeClass('is-open');
  setTimeout(function() {
    $('body').removeClass('overflow');
    $('.main-menu').removeClass('is-open');
  }, 400);
  return false;
});

$(document).on('click', '.main-menu__link', function () {
  $('.main-menu__inner').removeClass('is-open');
  setTimeout(function() {
    $('body').removeClass('overflow');
    $('.main-menu').removeClass('is-open');
  }, 400);
});
