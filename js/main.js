// Hide the #results box on ready
$().ready(function () {
  $("#results").hide();
  
  $(function() {
  // Enable placeholder function for IE
  // HTML5 Placeholder - https://github.com/mathiasbynens/jquery-placeholder
    $('input, textarea').placeholder();
  // Bootstrap DateTimePicker
  // http://eonasdan.github.io/bootstrap-datetimepicker
    $("#installDate, #expirationDate, #billDate, #seasonalStart, #seasonalEnd, #nextHold").datetimepicker({
      pickTime: false
    });
    $("#callTime").datetimepicker({
      getCurrentTime: true
    });
  // jQuery MaskedInput
  // https://github.com/digitalBush/jquery.maskedinput
    $("#contactNumber").mask("(999) 999-9999", {placeholder: "(___) ___-____"});
  });

// preventDefault() disables the default function of the form button
// more info: http://api.jquery.com/event.preventdefault/
  $("#reset-btn").click(function (e) {
    e.preventDefault();
// Clicking the reset button clears all input values
// and hides the results box
    $("input, select").val('');
    $("#results").hide();
  });
});
