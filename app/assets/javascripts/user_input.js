function UserInput(options){
    this.starting_point= options.starting_point;
    this.destination= options.destination;
    this.make= options.make;
    this.model= options.model;
    this.year= options.year;
    this.gas_price;
    this.steps;
}

UserInput.prototype.getCoords = function(starting_point){
  parsed_starting_point = this.parseAddress(starting_point);
  console.log(parsed_starting_point);
  var request = $.get("https://maps.googleapis.com/maps/api/geocode/json?address="+parsed_starting_point+"&key=AIzaSyAVkmq_gu_UwQiR7znb8Bf0_mktYaEDt0E"
)
  return request;
}

UserInput.prototype.parseAddress = function(address){
  return address.replace(" ", "+")
}

UserInput.prototype.getGasPrices = function(coords, distance, fuel_type, sort_by){
    var request = $.get('http://devapi.mygasfeed.com/stations/radius/'+coords.latitude+'/'+coords.longitude+'/'+distance+'/'+fuel_type+'/'+sort_by+'/rfej9napna.json');
    return request;
}

UserInput.prototype.averageGasPrice = function(stations){
  console.log(stations);
  var total = 0;
  var len = stations.length;
  $.each(stations, function(station){
    total += parseFloat(this.reg_price);
  });
  return total/len;
}

UserInput.prototype.publicTransit = function(starting_point, destination){
  var directionsService = new google.maps.DirectionsService();
  var options = {
    origin: starting_point,
    destination: destination,
    travelMode: google.maps.TravelMode.TRANSIT,
    transitOptions: {
      departureTime: new Date("October 13, 2014 11:13:00")
    },
    unitSystem: google.maps.UnitSystem.IMPERIAL
  }
  var steps = [];
  directionsService.route(options, function(response, status){
    $('#directions').empty().append('<p> Public Transit Directions </p>');
    $('#fareCost').empty();

    $.each(response.routes[0].legs[0].steps, function(step){
      if (this.travel_mode === 'TRANSIT'){
        steps.push(this.instructions.split(" ")[0]);
      }
      console.log(this.instructions);
      $('#directions').append('<li>'+this.instructions+'</li>')
    });
    var publicTransitRequest = $.get('/public_transit', {steps: steps, starting_point: starting_point, destination: destination});
    publicTransitRequest.done(function(data){
        $("#fareCost").append('<p>Monthly Cost $'+data+'</p>')
    });
  });
}
