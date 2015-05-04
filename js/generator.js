$(function () {
  
  $(':disabled').hide();

  function getValues() {
    var formData = $('form').serializeArray();
    $.each(formData, function(i, field) {
      if (!field.value) {
        this.value = 'n/a';
      } else {
        $('#results').append(field.name + ': ' + field.value + ', ');
        $('#resultContainer').show();
      }
    });
  }

  $('#submitBtn').click(function(e) {
    e.preventDefault();
    $('#results').empty();
    getValues();
  });
});