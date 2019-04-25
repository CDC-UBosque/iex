(function($) {

    /** ANIMATION  GRID ======================================= */
    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };


    $(document).ready(function() {

        /** ANIMATION FADE======================================= */
        var $animation_elements = $('.animation-element');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');

        var items = $(".add-animation");
        var u_os_top_read = $('body').offset().top;

        if ($(window).scrollTop() > u_os_top_read) {
            items.addClass('animate');
        };
        $(window).scroll(function(event) {
            items.each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animate");
                }
            });
        });

        $(window).load(function(event) {
            $(".add-animation").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animate");
                }
            });
        });

        $('.owl-carousel').owlCarousel({
            center: false,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:1
                }
            }
        })

    });


})(jQuery);