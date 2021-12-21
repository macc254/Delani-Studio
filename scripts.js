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