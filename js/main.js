
$(function () {
  $('#resultContainer, :disabled').hide();

  $('input, textarea').placeholder(); // HTML5 Placeholder - https://github.com/mathiasbynens/jquery-placeholder

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

  // zeroclipboard config
  var client = new ZeroClipboard( $('#copyBtn'), {
    moviePath: 'js/ZeroClipboard.swf'
  });

  client.on('copy', function() {
    $('#copyBtn').text('copied!').addClass('btn-success has-success');
  });

  client.on('aftercopy', function() {
    setTimeout(function() {
      $('#copyBtn').text('copy to clipboard').removeClass('btn-success has-success');
    }, 200);
    $('#results').effect('highlight', 200);
  });

});
