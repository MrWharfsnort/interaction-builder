// Hide the #results box on ready
$().ready(function () {
  $("#results").hide();

// Bootstrap DateTimePicker
// http://eonasdan.github.io/bootstrap-datetimepicker
  $(function () {
    $("#installDate").datetimepicker({
      pickTime: false
    });
    $("#expirationDate").datetimepicker({
      pickTime: false
    });
    $("#callTime").datetimepicker({
      getCurrentTime: true
    });
  });

// jQuery MaskedInput
// https://github.com/digitalBush/jquery.maskedinput
// Masked Input Options:
// 0: Only Numbers.
// 9: Only Numbers but optional.
// #: Only Numbers but recusive.
// A: Numbers and Letters.
// S: Only A-Z and a-z characters.
  $(function () {
    $("#contactNumber").mask("(999) 999-9999", {placeholder: "(___) ___-____"});
  });


// preventDefault() disables the default function of the form button
// more info: http://api.jquery.com/event.preventdefault/
  $("#reset-btn").click(function (e) {
    e.preventDefault();
// Clicking the reset button clears all input values
// and hides the results box
    $("input").val('');
    $("select").val('');
    $("#results").hide();
  });

});
