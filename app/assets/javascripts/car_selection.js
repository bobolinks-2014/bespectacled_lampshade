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
    $.each(data, function(item){
      $('#year').append('<option value>'+data[item]+'</option>');
    });
  });
});


// when the user submits the form, make a post request.

$('#user').submit(function(e){
  e.preventDefault();

  var userInput = {
    starting_point: $('#starting_point').val(),
    destination: $('#destination').val(),
    make: $('#make').find(":selected").text(),
    model: $('#model').find(":selected").text(),
    year: $('#year').find(":selected").text()
  };

  coords = getCoords(userInput.starting_point);

  getGasPrices({latitude: coords.latitude, longitude: coords.longitude}, '2', 'reg', 'Price').done(function(json){
    data = JSON.parse(json);
    userInput['gas_price'] = averageGasPrice(data.stations);
    console.log("got gas price");
    var DBrequest = $.get('/submit', userInput);
      DBrequest.done(function(data){
        console.log("something");
        card = new Card(data);
        cardView = new CardView(card)
        cardView.displayCard();
      });
  }.bind(this));
});


function getCoords(starting_point){
  // should actually make google api call
  console.log("getting coordes");
  return {latitude: '42.1292', longitude: '-87.8408'};
}
function getGasPrices(coords, distance, fuel_type, sort_by){
    var request = $.get('http://devapi.mygasfeed.com/stations/radius/'+coords.latitude+'/'+coords.longitude+'/'+distance+'/'+fuel_type+'/'+sort_by+'/rfej9napna.json');
    return request;
}

function averageGasPrice(stations){
  var total = 0;
  var len = stations.length;
  $.each(stations, function(station){
    total += parseFloat(this.reg_price);
  });
  return total/len;
}

// var APIrequest = $.get('http://devapi.mygasfeed.com/stations/radius/42.1292/-87.8408/2/reg/Price/rfej9napna.json');
// APIrequest.done(function(data){
//   console.log(data);
// });
