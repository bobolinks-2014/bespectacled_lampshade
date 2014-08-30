describe ("parseAddress", function(){
  it ("should return a parsed address", function(){
    expect(parseAddress('chicago, IL')).toEqual("chicago,+IL");
  });
});

describe ("averageGasPrice",function(){
  xit ("should take an array input", function(){

  });
  xit ("should return the average of the input array", function(){
    expect(averageGasPrice([1,2,3,4])).toEqual(5);
  });
});



describe ("getGasPrices", function(){

  var coords = {latitude: '42.1292', longitude: '-87.8408'};
  var distance = "2";
  var fuel_type = "reg";
  var sort_by = "Price";
  // var obj = window;
  // spyOn(window, 'getGasPrices');
  // console.log("here");
  obj.getGasPrices(coords, distance, fuel_type, sort_by);
  console.log("here");
  xit("should accept a request with the correct format", function(){
    expect(obj.getGasPrices).toHaveBeenCalledWith(coords, distance, fuel_type, sort_by);
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
