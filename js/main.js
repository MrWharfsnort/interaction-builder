// Hide the #results box on ready
$(function () {
  $('#resultContainer').hide();


  $(function() {
  // Enable placeholder function for IE
  
    $('input, textarea').placeholder(); // HTML5 Placeholder - https://github.com/mathiasbynens/jquery-placeholder

  // Bootstrap DateTimePicker
  // http://eonasdan.github.io/bootstrap-datetimepicker
    $('#installDate, #expirationDate, #billDate, #seasonalStart, #seasonalEnd, #nextHold, #discoDate').datetimepicker({
      pickTime: false
    });
    $('#callTime').datetimepicker({
      getCurrentTime: true
    });

  // jQuery MaskedInput
  // https://github.com/digitalBush/jquery.maskedinput
    $('#contactNumber').mask('(999) 999-9999', {placeholder: '(___) ___-____'});
  });

  // http://api.jquery.com/event.preventdefault/
  $('#resetBtn').click(function (e) {
    e.preventDefault();
    $('input, select').val('');
    $('#resultContainer').hide();
  });
});
