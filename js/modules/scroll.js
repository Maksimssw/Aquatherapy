import 'jquery';
import $ from 'jquery';

function scroll(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    let button = $('.scroll');

    $(window).on('scroll', function(e){
        if($(this).scrollTop() >= 100){
            button.fadeIn();
        } else{
            button.fadeOut();
        }
    })
}

export default scroll;