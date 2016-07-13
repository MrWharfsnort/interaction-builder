
$(function () {
  $('#resultContainer, :disabled').hide();

  // HTML5 Placeholder - https://github.com/mathiasbynens/jquery-placeholder
  $('input, textarea').placeholder();


  // http://eonasdan.github.io/bootstrap-datetimepicker
  $('#installDate, #expirationDate, #billDate, #seasonalStart, #seasonalEnd, #nextHold, #discoDate').datetimepicker({
    pickTime: false
  });

  $('#callTime').datetimepicker({
    getCurrentTime: true
  });

  // https://github.com/digitalBush/jquery.maskedinput
  $('#contactNumber').mask('(999) 999-9999', {placeholder: '(___) ___-____'});


  function getValues() {
    var formData = $('form').serializeArray();

    $.each(formData, function(i, field) {
      if (!field.value) {
        this.value = 'n/a';
      } else {
        var fieldValues = field.name + ': ' + field.value + ',  ';
        $('#results').append(fieldValues);
        $('#resultContainer').show();
      }
    });
  }

  $('button').click(function (e) {
    e.preventDefault();
  });

  $('#submitBtn').click(function() {
    $('#results').empty();
    getValues();
    $('#results').text($('#results').text().replace(/,\s\s$/g, ''));
  });

  $('#resetBtn').click(function () {
    $('input, select').val('');
    $('#resultContainer').hide();
  });

  var clipboard = new Clipboard('#copyBtn');

  clipboard.on('success', function(e) {
    // change copy button text to 'copied!'
    $('#copyBtn').text('copied!').addClass('btn-success has-success');

    // change it back to 'copy to clipboard'
    setTimeout(function() {
      $('#copyBtn').text('copy to clipboard').removeClass('btn-success has-success');
    }, 200);

    // flash the results box to indicate action was taken
    $('#results').effect('highlight', 200);

    // clear the selection
    e.clearSelection();
  })

});
