var $owl = $('#owler');

        $owl.children().each(function (index) {
            $(this).attr('data-position', index); // NB: .attr() instead of .data()
        });

        $owl.owlCarousel({
          loop:true,
            margin: 10,
            items: 4.2,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1.2
                },
                600: {
                    items: 2.5
                },
                1000:{
items:3.2
                },
                1025: {
                    items: 4.2
                }
            }
        });
        $(document).ready(function () {
            var li = $(".owl-carousel .item a");
            $(".owl-carousel .item a ").click(function () {
                li.removeClass('active');
            });
        }); 
        var selector ='.menu-items li a';
        $(selector).on('click', function(){
          $(selector).removeClass('active')
          $(this).addClass('active')
        });
        
$(window).on("scroll",function(){
  if($(window).scrollTop()) {
      $('.navbar').addClass('fixed');
  }
  else {
      $('.navbar').removeClass('fixed')
  }
});

$.stellar();

$(window).on("scroll",function(){
    if($(window).scrollTop()) {
        $('.modal-header').addClass('fixed');
    }
    else {
        $('.modal-header').removeClass('fixed')
    }
  });



