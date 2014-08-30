describe ("parseAddress", function(){
  it ("should return a parsed address", function(){
    expect(parseAddress('chicago, IL')).toEqual("chicago,+IL");
  });
});

describe ("averageGasPrice",function(){
  xit ("should take an array input", function(){

  });
  it ("should return the average of the input array", function(){
    expect(averageGasPrice([1,2,3,4])).toEqual(5);
  });
});



describe ("getGasPrices", function(){

  var coords = {latitude: '42.1292', longitude: '-87.8408'};
  var distance = "2";
  var fuel_type = "reg";
  var sort_by = "Price";

  beforeEach(function(){
    foo = {
      getGasPrices: function(coords, distance, fuel_type, sort_by){

      }
    };
  });

  spyOn(foo, getGasPrices)
  xit("should accept properly formatted argument in api request ", function(){
    expect(getGasPrices(coords, distance, fuel_type, sort_by)).toEqual(200)
  });
  xit("should include stations in the return data", function(){
    expect(JSON.parse(getGasPrices(coords, distance, fuel_type, sort_by).returnText).stations).toBeDefined();
  });
});

describe ("getCoords", function(){
  starting_point = "northbrook,+IL"
  xit("should return successful api request", function(){
    expect(getCoords(starting_point).status).toEqual(200)
  });
  xit("should return location return data", function(){
    expect(JSON.parse(getCoords(starting_point).returnText).results[0].geometry.location).toBeDefined();
  });
});
