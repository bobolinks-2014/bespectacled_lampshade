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
  var total = 0;
  var len = stations.length;
  $.each(stations, function(station){
    if (this.reg_price !== "N/A"){
      total += parseFloat(this.reg_price);
    }
    else{
      len -= 1;
    }
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

  directionsService.route(options, function(response, status){
    this.renderDirections(response, starting_point, destination);
  }.bind(this));
}

UserInput.prototype.renderDirections = function(response, starting_point, destination){
  $('#directions').empty();
  $('#fareCost').empty();
  var steps = [];
  $.each(response.routes[0].legs[0].steps, function(step){
    if (this.travel_mode === 'TRANSIT'){
      steps.push(this.instructions.split(" ")[0]);
    }
    // console.log(this.instructions);
    // $('#directions>ol').append('<li>'+ this.instructions+'</li>');
  });
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setPanel(document.getElementById('directions'));
  directionsDisplay.setDirections(response);
  this.getFareCost(steps, starting_point, destination);
}


UserInput.prototype.getFareCost = function(steps, starting_point, destination){
  var publicTransitRequest = $.get('/public_transit', {steps: steps, starting_point: starting_point, destination: destination});
  publicTransitRequest.done(function(data){
      $("#fareCost").append('<h3> Fare Cost </h3><p class = "panel callout">This feature is in beta and only applies to the Chicagoland area. All costs are approximate and based on monthly fares.</p><h6>Monthly Cost</h6><p>$'+data+'</p><h6>Yearly Cost</h6><p>$'+data*12+'</p>')
  });
}
