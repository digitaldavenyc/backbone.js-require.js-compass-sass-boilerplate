$(document).ready(function(){

    var $container = $('#content');
    $container.isotope({
        masonryHorizontal: {
            rowHeight: 350
        },
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('#nav a').click(function(){
        var selector = $(this).attr('data-filter');

        console.log(selector);

        $container.isotope({
            masonryHorizontal: {
                rowHeight: 350
            },
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: true
            }
        });

        return false;
    });

    if(window.addEventListener){
        document.addEventListener('DOMMouseScroll', moveObject, false);
    }

    document.onmousewheel = moveObject;

    var scale = 0;
    function moveObject(event){
        var delta = 0,
            percent = 0,
            alpha = 0
            size = 0;
        delta = event.wheelDelta / 60;
        scale += delta;
        percent = scale / 50;
        if(percent > 1) percent = 1;
        if(percent < -1) percent = -1;
        alpha = 1 + percent;
        size = -(percent * 4);
        if(size < 1) size = 1;
        //console.log(alpha, percent);
        //$container.opacity = alpha;
        //TweenMax.to($container, 0.05, {css:{scale:size, opacity:alpha }});
        //console.log($container.scale)
    }

        //TweenMax.to($container, 2.5, {css:{scale: 4, alpha: 0}, ease: Expo.easeOut, delay: 1});

});
