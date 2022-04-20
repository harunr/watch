
(function($){
	$(function(){


        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });

       
        $(".main-nav ul > li").find(".mega-menu").parent("li").addClass("has-sub-nav");
        if($(window).width()<=768){
        $(".main-nav ul > li.has-sub-nav > a").bind('click', 'touchend', function (e) {
            e.preventDefault();
            $(".main-nav ul > li").find("> .mega-menu:visible").slideUp()
            $(".main-nav ul > li").removeClass("active")
            if ($(this).parent().find("> .mega-menu:visible").length) {
                $(this).removeClass("active")
                $(this).parent().find("> .mega-menu").slideUp()
            } else {
                $(this).addClass("active")
                $(this).parent().find("> .mega-menu").slideDown()
            }
        });
        }

        if($(window).width() > 991){
        $('li.has-sub-nav').mouseenter(function(){
            $(this).find('.mega-menu').fadeIn();
            $(this).addClass('hoverd');
        })

        $('li.has-sub-nav').mouseleave(function(){
            $(this).find('.mega-menu').fadeOut();
            $(this).removeClass('hoverd');
        })

        }
        if ($('.testimonial-item-wrap').length) {
            $('.testimonial-item-wrap').slick({
                arrows:false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 3,
                slidesToScroll: 3,
                dots:true,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },

                ]
            })
        }
        
        

     
		
	})// End ready function.
    
    
    
   
})(jQuery)

