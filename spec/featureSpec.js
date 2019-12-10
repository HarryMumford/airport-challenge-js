'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  it('planes can be instructed to land at an airport', function(){
    plane = new Plane();
    airport = new Airport();
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});

