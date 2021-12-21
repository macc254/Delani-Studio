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
    $('#port1 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text1').removeClass('hide1');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text1').addClass('hide1');
    });
});
$(document).ready(function() {
    $('#port2 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text2').removeClass('hide2');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text2').addClass('hide2');
    });
});

// onclick button display message

function showMessage() {
    alert("Hello! We have have received your message!");
}