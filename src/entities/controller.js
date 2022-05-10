let { GWE } = require('gwe');
let { DIRECTION } = require('../core/enums');

class Controller extends GWE.GfxJAS {
  constructor() {
    super();
    this.direction = DIRECTION.FORWARD;
    this.radius = 0;
    this.speed = 3;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getSpeed() {
    return this.speed;
  }

  setSpeed(speed) {
    this.speed = speed;
  }
}

module.exports.Controller = Controller;