/*----------------------------------------------
Page Transitions

in css each of the selected html elements below
are set to: display: none;
-----------------------------------------------*/

$('#quoteContainer').delay(85).fadeIn(1000);

$('#welcome').delay(900).fadeIn(1800);

$('#about').delay(200).fadeIn(1000);

(function($) {
  $(function() {
    $('.toggleOverlay').click(function() {
      $('aside').toggleClass('open');
    });
  });
})(jQuery);

