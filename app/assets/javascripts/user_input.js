function UserInput(options){
    this.starting_point= options.starting_point;
    this.destination= options.destination;
    this.make= options.make;
    this.model= options.model;
    this.year= options.year;
    this.gas_price;
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
  console.log("in here");
  console.log(stations);
  var total = 0;
  var len = stations.length;
  $.each(stations, function(station){
    total += parseFloat(this.reg_price);
  });
  return total/len;
}
