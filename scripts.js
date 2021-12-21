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
$(document).ready(function() {
    $('#port3 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text3').removeClass('hide3');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text3').addClass('hide3');
    });
});
$(document).ready(function() {
    $('#port4 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text4').removeClass('hide4');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text4').addClass('hide4');
    });
});
$(document).ready(function() {
    $('#port5 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text5').removeClass('hide5');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text5').addClass('hide5');
    });
});
$(document).ready(function() {
    $('#port6 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text6').removeClass('hide6');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text6').addClass('hide6');
    });
});
$(document).ready(function() {
    $('#port7 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text7').removeClass('hide7');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text7').addClass('hide7');
    });
});
$(document).ready(function() {
    $('#port8 a img').hover(function() {
        $(this).stop().animate({
            opacity: .7
        }, 700);
        $('.text8').removeClass('hide8');
    }, function() {
        $(this).stop().animate({
            opacity: 1
        }, 900);
        $('.text8').addClass('hide8');
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