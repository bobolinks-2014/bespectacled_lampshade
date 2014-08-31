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


