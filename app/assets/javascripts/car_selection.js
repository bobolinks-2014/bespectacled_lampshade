// make onchange
// grab newly selected make
// we want model to  be populated with the models associated with that newly selected make
// this is an ajax call
//then we render!
function Input(){
  this.destination;
  this.starting_point;
  this.make;
  this.model;
  this.year;
}

$('#make').change(function(e) {
  var selected = $(this).find(":selected").text();
  var request = $.get('/get_model', {chosen_make: selected});
  request.done(function(data){
    $('#model').empty();
    $('#model').append('<option value> Model </option>')
    $('#year').empty();
    $('#year').append('<option value> Year </option>')
    $(".button.car-info").css("visibility", "hidden");
    $.each(data, function(item){
      $('#model').append('<option value>'+data[item]+'</option>');
    });
  });
});

$('#model').change(function(e) {
  var selected = $(this).find(":selected").text();
  var request = $.get('/get_model_year', {chosen_model: selected});
  request.done(function(data){
    $('#year').empty();
    $('#year').append('<option value> Year </option>')
    $(".button.car-info").css("visibility", "hidden");
    $.each(data, function(item){
      $('#year').append('<option value>'+data[item]+'</option>');
    });
  });
});

$('#year').change(function(e) {
  $(".button.car-info").css("visibility", "visible");
});


// when the user submits the form, make a post request.

$('#user').submit(function(e){
  e.preventDefault();
  $(".starting_point").prop("disabled", true);
  $(".destination").prop("disabled", true);
  var input = {
    starting_point: $('#starting_point').val(),
    destination: $('#destination').val(),
    make: $('#make').find(":selected").text(),
    model: $('#model').find(":selected").text(),
    year: $('#year').find(":selected").text()
  };
  var request = $.get('/submit', input);
    request.done(function(data){
    card = new Card(data);
    cardView = new CardView(card)
    cardView.displayCard();
  });
    //handle any errors
  request.error(function() {
    alert("please enter a valid address")
    $(".starting_point").prop("disabled", false);
    $(".destination").prop("disabled", false);

  });
});
