let { GWE } = require('gwe');
let { MovingObject } = require('./moving_object');

class Controller extends MovingObject {
  constructor() {
    super();
  }

  getHandPosition() {
    let moveDir = this.getMoveDir();
    let center = this.getCenter();
    return GWE.Utils.VEC3_ADD(center, GWE.Utils.VEC3_SCALE(moveDir, this.radius + 0.5));
  }
}

module.exports.Controller = Controller;
