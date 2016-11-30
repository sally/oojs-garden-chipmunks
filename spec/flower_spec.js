describe("a flower", function() {
  var flower;

  beforeEach(function() {
    flower = new Flower("daffodil", "yellow");
  });

  it("has a name", function(){
    expect(flower.name).toEqual('daffodil');
  });
  it("has a color", function(){
    expect(flower.color).toEqual('yellow');
    // this is also a good test:  expect(flower.color).toEqual(jasmine.any(String));
  });
});
