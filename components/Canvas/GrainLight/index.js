import * as THREE from 'three'

// once everything is loaded, we run our Three.js stuff.
export default function () {

  // create a scene, that will hold all our elements such as objects, cameras and lights.
  var scene = new THREE.Scene();

  // create a camera, which defines where we're looking at.
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  // create a render and set the size
  var webGLRenderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  webGLRenderer.setClearColor(new THREE.Color(0xffffff, 0.0));
  webGLRenderer.setClearAlpha(0);
  webGLRenderer.setSize(window.innerWidth/4, window.innerHeight/4);
  webGLRenderer.shadowMapEnabled = true;


  // position and point the camera to the center of the scene
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 50;
  camera.lookAt(new THREE.Vector3(10, 0, 0));

  // add the output of the renderer to the html element
  document.querySelector("#WebGL-output").append(webGLRenderer.domElement);

  // call the render function
  var step = 0;

  var knot;

  // setup the control gui
  var controls = new function () {
    // we need the first child, since it's a multimaterial
    this.radius = 40;
    this.tube = 28.2;
    this.radialSegments = 300;
    this.tubularSegments = 12;
    this.p = 5;
    this.q = 4;
    this.heightScale = 4;
    this.asParticles = true;
    this.rotate = true;

    this.redraw = function () {
      // remove the old plane
      if (knot) scene.remove(knot);
      // create a new one
      var geom = new THREE.TorusKnotGeometry(controls.radius, controls.tube, Math.round(controls.radialSegments), Math.round(controls.tubularSegments), Math.round(controls.p), Math.round(controls.q), controls.heightScale);

      if (controls.asParticles) {
        knot = createParticleSystem(geom);
      } else {
        knot = createMesh(geom);
      }

      // add it to the scene.
      scene.add(knot);
    };

  }

  controls.redraw();

  render();

  // from THREE.js examples
  function generateSprite() {

    var canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;

    var context = canvas.getContext('2d');
    var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
    gradient.addColorStop(0.045, '#fff')
    gradient.addColorStop(0.1, 'rgba(255, 255, 255, .65)')
    gradient.addColorStop(0.25, 'rgba(40, 40, 40, .5)')
    gradient.addColorStop(1, 'transparent')
    // gradient.addColorStop(0, 'rgba(255,255,255,1)');
    // gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
    // gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
    // gradient.addColorStop(1, 'rgba(0,0,0,1)');

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;

  }

  function createParticleSystem(geom) {
    var material = new THREE.ParticleBasicMaterial({
      color: 0xffffff,
      size: 3,
      transparent: true,
      blending: THREE.AdditiveBlending,
      map: generateSprite()
    });

    var system = new THREE.ParticleSystem(geom, material);
    system.sortParticles = true;
    return system;
  }

  function createMesh(geom) {

    // assign two materials
    var meshMaterial = new THREE.MeshNormalMaterial({});
    meshMaterial.side = THREE.DoubleSide;

    // create a multimaterial
    var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

    return mesh;
  }

  function render() {
    if (controls.rotate) {
      knot.rotation.y = step += 0.01;
    }

    // render using requestAnimationFrame
    requestAnimationFrame(render);
    webGLRenderer.render(scene, camera);
  }
}
