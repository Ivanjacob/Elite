// Type: JavaScript
  var typed = new Typed('#typed', {
    strings: ['Python Developer', 'Web Developer', 'Data Analyst', 'Article Writer', 'Academic Writer', 'Freelancer'],
    stringsElement: null,
    typeSpeed: 10,
    startDelay: 150,
    backSpeed: 20,
    backDelay: 1000,
    loop: true,
    loopCount: 550,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentTypeL: 'html',
});
// Mixitup
var container = $(".mixitup");
mixitup(container);

// navtoggle
$(document).ready(function () {
  $(".navbar-toggler").click(function(){
    $(".small-device").slideToggle();
  });
});

