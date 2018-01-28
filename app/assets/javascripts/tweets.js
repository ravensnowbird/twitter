$(document).ready(function() {
    var text_max = 140;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('#tweet_body').keyup(function() {
        var text_length = $('#tweet_body').val().length;
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
