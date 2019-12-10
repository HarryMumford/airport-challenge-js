'use strict';

describe('Airport', function(){
  var airport;
  beforeEach(funciton(){
    airport = new airport();
  });
  it('has no planes by default',function() {
    expect(airport.planes()).toEqual([]);
  });
});