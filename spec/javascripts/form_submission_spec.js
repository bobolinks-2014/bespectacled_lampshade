// TODO: make this a describe for the user input model
describe ("parseAddress", function(){
  var userInput = new UserInput({
    starting_point: "northbrook, il",
    destination: "chicago, il",
    make: "ford",
    model: "focus",
    year: "2004"
  })
  it ("should return a parsed address", function(){
    expect(userInput.parseAddress('chicago, IL')).toEqual("chicago,+IL");
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

  var fakeUserInput = new UserInput({
      starting_point: "northbrook, il",
      destination: "chicago, il",
      make: "ford",
      model: "focus",
      year: "2004"
    });
  beforeEach(function(){
    spyOn(fakeUserInput, 'getGasPrices');
    fakeUserInput.getGasPrices(coords, distance, fuel_type, sort_by);
  });

  it("should accept a request with the correct format", function(){
    expect(fakeUserInput.getGasPrices).toHaveBeenCalledWith(coords, distance, fuel_type, sort_by);
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
