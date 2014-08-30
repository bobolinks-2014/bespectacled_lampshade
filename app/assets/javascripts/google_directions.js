function GoogleDirections(options){
  this.origin = options.origin ,// LatLng | String,
  this.destination = options.destination ,// LatLng | String,
  this.travelMode = options.travelMode ,// TravelMode,
  this.transitOptions = options.transitOptions ,// TransitOptions,
  this.unitSystem = options.unitSystem ,// UnitSystem,
  this.durationInTraffic = options.durationInTraffic ,// Boolean,
  this.waypoints= options.waypoints ,// DirectionsWaypoint,
  this.optimizeWaypoints = options.optimizeWaypoints ,// Boolean,
  this.provideRouteAlternatives = options.provideRouteAlternatives ,// Boolean,
  this.avoidHighways = options.avoidHighways ,// Boolean,
  this.avoidTolls = options.avoidTolls ,// Boolean
  this.region = options.region // String
}

var directionsService = new google.maps.DirectionsService();
var request = {
  origin: "northbrook, il",
  destination: "field museum, chicago, il",
  travelMode: google.maps.TravelMode.TRANSIT,
  transitOptions: {
    departureTime: new Date(1337675679473)
  },
  unitSystem: google.maps.UnitSystem.IMPERIAL
}

directionsService.route(request, function(response, status){
  console.log(response);
});
