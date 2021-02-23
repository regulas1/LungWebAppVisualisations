import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 'purple' });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  // rotate cube so it is no longer displayed as a square
  cube.rotation.set(-0.5, -0.1, 0.8);

  // convert 30 degrees to radians per second so that the cube can be scaled to rotate
  // 30 degrees per second at any FPS
  const radiansPerSecond = MathUtils.degToRad(30);

  // this .tick method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    // scale radiansPerSecond by delta every frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };