$(document).ready(function() {
    var text_max = 140;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + ' characters remaining');

        if(text_remaining < 0) {
          $("#submitTweet").prop('disabled', true);
        }
        else {
          $("#submitTweet").prop('disabled', false);
        }
    });
});
