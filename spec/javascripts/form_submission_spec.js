describe ("UserInput class", function(){
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
  describe ("parseAddress", function(){
    it ("should return a parsed address", function(){
      expect(fakeUserInput.parseAddress('chicago, IL')).toEqual("chicago,+IL");
    });
  });

  describe ("averageGasPrice",function(){
    stations = [{reg_price: "1"}, {reg_price: "2"}, {reg_price: "3"}, {reg_price: "4"}]
    it ("should return the average of the input array", function(){
      expect(fakeUserInput.averageGasPrice(stations)).toEqual(2.5);
    });
  });

  describe ("getGasPrices", function(){
    beforeEach(function(){
      spyOn(fakeUserInput, 'getGasPrices');
      fakeUserInput.getGasPrices(coords, distance, fuel_type, sort_by);
    });
    it("should accept a request with the correct format", function(){
      expect(fakeUserInput.getGasPrices).toHaveBeenCalledWith(coords, distance, fuel_type, sort_by);
    });
  });

  describe ("getCoords", function(){
    beforeEach(function(){
      spyOn(fakeUserInput, 'getCoords');
      fakeUserInput.getCoords(fakeUserInput.starting_point);
    });
    it("should accept a request with the correct format", function(){
      expect(fakeUserInput.getCoords).toHaveBeenCalledWith(fakeUserInput.starting_point);
    });
  });
});
