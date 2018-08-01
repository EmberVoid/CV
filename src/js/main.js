$(".techLogos").hover(function () {
    $(this).toggleClass("animated shake");
 });

 $('body').scrollspy({ target: '#navbarSpy' });
   $(document).scroll(function() { 
    if($(window).scrollTop() >= 10) {
      $("#navbarSpy").removeClass("d-none");
      $("#navbarSpy").addClass("animated fadeIn");
    }
 });