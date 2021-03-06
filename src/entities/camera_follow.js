let { GWE } = require('gwe');

let ORTHO_SIZE = 8.4;
let ORTHO_DEPTH = 100;
let MATRIX = [0.7071, 0.0000,  0.7071, 0.0000, 0.3546, 0.8652, -0.3546, 0.0000, -0.6118, 0.5015,  0.6118, 0.0000, -7.3046, 4.9583,  5.6356, 1.0000];
let PIXELS_PER_UNIT = 48;
let BILLBOARD_ROTATION = [0.52, 0.78, 0];

class CameraFollow {
  constructor() {
    this.targetDrawable = null;
    this.minClipOffset = [0, 0];
    this.maxClipOffset = [0, 0];
    this.pixelsPerUnit = PIXELS_PER_UNIT;
    this.billboardRotation = BILLBOARD_ROTATION;
    this.view = GWE.gfxManager.getView(0);

    this.view.setProjectionMode(GWE.ProjectionModeEnum.ORTHOGRAPHIC);
    this.view.setOrthographicSize(ORTHO_SIZE);
    this.view.setOrthographicDepth(ORTHO_DEPTH);
    this.view.setCameraMatrix(MATRIX);
    GWE.gfxManager.setShowDebug(true);
  }

  getTargetDrawable() {
    return this.targetDrawable;
  }

  setTargetDrawable(targetDrawable) {
    this.targetDrawable = targetDrawable;
  }

  setMinClipOffset(minClipOffsetX, minClipOffsetY) {
    this.minClipOffset[0] = minClipOffsetX;
    this.minClipOffset[1] = minClipOffsetY;
  }

  setMaxClipOffset(maxClipOffsetX, maxClipOffsetY) {
    this.maxClipOffset[0] = maxClipOffsetX;
    this.maxClipOffset[1] = maxClipOffsetY;
  }

  getPixelsPerUnit() {
    return this.pixelsPerUnit;
  }

  getBillboardRotation() {
    return this.billboardRotation;
  }

  update(ts) {
    if (!this.targetDrawable) {
      return;
    }

    let clipOffset = this.view.getClipOffset();
    let worldPosition = this.targetDrawable.getPosition();
    let screenPosition = GWE.gfxManager.getScreenPosition(0, worldPosition[0], worldPosition[1], worldPosition[2]);

    this.view.setClipOffset([
      GWE.Utils.CLAMP(screenPosition[0] + clipOffset[0], this.minClipOffset[0], this.maxClipOffset[0]),
      GWE.Utils.CLAMP(screenPosition[1] + clipOffset[1], this.minClipOffset[1], this.maxClipOffset[1])
    ]);
  }
}

module.exports.CameraFollow = CameraFollow;