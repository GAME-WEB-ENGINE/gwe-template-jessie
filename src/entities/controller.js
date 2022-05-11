let { GWE } = require('gwe');
let { DIRECTION } = require('../core/enums');

class Controller extends GWE.GfxJAS {
  constructor() {
    super();
    this.moving = false;
    this.direction = DIRECTION.FORWARD;
    this.radius = 0;
    this.speed = 3;
  }

  isMoving() {
    return this.moving;
  }

  setMoving(moving) {
    this.moving = moving;
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

  getCenter() {
    return this.getWorldBoundingBox().getCenter();
  }

  getMoveDir() {
    if (this.direction == DIRECTION.FORWARD) {
      return GWE.Utils.VEC3_FORWARD;
    }
    else if (this.direction == DIRECTION.BACKWARD) {
      return GWE.Utils.VEC3_BACKWARD;
    }
    else if (this.direction == DIRECTION.LEFT) {
      return GWE.Utils.VEC3_LEFT;
    }
    else if (this.direction == DIRECTION.RIGHT) {
      return GWE.Utils.VEC3_RIGHT;
    }
    else {
      return GWE.Utils.VEC3_ZERO;
    }
  }

  getHandPosition() {
    let moveDir = this.getMoveDir();
    let center = this.getCenter();
    return GWE.Utils.VEC3_ADD(center, GWE.Utils.VEC3_SCALE(moveDir, this.radius + 0.5));
  }
}

module.exports.Controller = Controller;
