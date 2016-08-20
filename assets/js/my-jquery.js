
// Collapses the menu after an item is clicked when in mobile view
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    // Removes focus of the anchor link.
    $(this).blur();
  });
});

$('body').scrollspy({ target: '#about-section', data-offset });