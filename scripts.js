//what we do on click diplays description
$(document).ready(function() {
    $('.back').hide();

    $('.front', '.flashcard').on('click', function() {
        $(this).hide();
        $(this).siblings('.back').show();
    });



    $('.back', '.flashcard').on('click', function() {
        $(this).hide();
        $(this).siblings('.front').show();
    });
});


//portfolios on hover displays text
$(document).ready(function() {
    $('#port a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text').removeClass('hide');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text').addClass('hide');
    });
});