// make onchange
// grab newly selected make
// we want model to  be populated with the models associated with that newly selected make
// this is an ajax call
//then we render!

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
  $(".button.car-info").css("visibility", "hidden");
  request.done(function(data){
    $('#year').empty();
    $('#year').append('<option value> Year </option>')
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
  var options = {
    starting_point: document.getElementById('autocomplete').value,
    destination: document.getElementById('autocomplete_destination').value,
    make: $('#make').find(":selected").text(),
    model: $('#model').find(":selected").text(),
    year: $('#year').find(":selected").text()
  }
  var userInput = new UserInput(options);
  var coords;
  userInput.getCoords(userInput.starting_point).done(function(data){
    console.log(data);
    if (data.status === "ZERO_RESULTS") {
      alert("Please enter a valid address.");
      $(".starting_point").prop("disabled", false);
      $(".destination").prop("disabled", false);
    }
    else {
      $(".starting_point").prop("disabled", true);
      $(".destination").prop("disabled", true);

      coords = data.results[0].geometry.location;
      userInput.getGasPrices({latitude: coords.lat, longitude: coords.lng}, '2', 'reg', 'Price').done(function(json){
      data = JSON.parse(json);
      userInput.publicTransit(userInput.starting_point, userInput.destination);
      userInput.gas_price = userInput.averageGasPrice(data.stations);
      options["gas_price"] = userInput.gas_price;

      var DBrequest = $.get('/submit', options);
      DBrequest.done(function(data){
        $(".button.car-info").css("visibility", "hidden");
        card = new Card(data);
        cardView = new CardView(card)
        cardView.displayCard();
      });

    });
    }
  })
});
