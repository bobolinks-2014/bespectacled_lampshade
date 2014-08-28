// make onchange
// grab newly selected make
// we want model to  be populated with the models associated with that newly selected make
// this is an ajax call
//then we render!

$('#make').change(function() {
  var selected = $(this).find(":selected").text();
  var request = $.get('/get_model', {chosen_make: selected});
  request.done(function(data){
    $('#model').empty();
    $('#year').empty();
    $.each(data, function(item){
      $('#model').append('<option value>'+data[item]+'</option>');
    });
  });
});

$('#model').change(function() {
  var selected = $(this).find(":selected").text();
  var request = $.get('/get_model_year', {chosen_model: selected});
  request.done(function(data){
    $('#year').empty();
    $.each(data, function(item){
      $('#year').append('<option value>'+data[item]+'</option>');
    });
  });
});
