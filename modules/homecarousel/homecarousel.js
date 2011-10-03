function mycarousel_initCallback(carousel)
{
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(15);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(15);
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto(15);
    }, function() {
        carousel.startAuto(15);
    });
};

jQuery(document).ready(function() {
    jQuery('#mycarousel').jcarousel({
        auto: carousel_autoplay,
        wrap: 'last',
        visible: carousel_items_visible,
        scroll: carousel_scroll,
        initCallback: mycarousel_initCallback
    });
});