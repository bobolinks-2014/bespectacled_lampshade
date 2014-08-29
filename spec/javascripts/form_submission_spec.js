describe ("parseAddress", function(){
  it ("should return a parsed address", function(){
    expect(parseAddress('chicago, IL')).toEqual("chicago,+IL");
  });
});
