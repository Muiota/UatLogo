"use strict";

var scene = new THREE.Scene();
var fieldOfView = 75,
    aspectRatio = window.innerWidth / window.innerHeight,
    near = 0.1,
    far = 400;
var camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);
camera.position.z = 300;
var light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 0, 1).normalize();
scene.add(light); // jupiter
// ---------

var jupiterRadius = 140,
    jupiterWidthSegments = 50,
    jupiterHeightSegments = 50;
var jupiterMaterial = new THREE.MeshPhongMaterial({});
var loader = new THREE.ImageLoader();
loader.load("assets/img/jupitermap_w.jpg", function (image) {
  var texture = new THREE.Texture();
  texture.image = image;
  texture.needsUpdate = true;
  jupiterMaterial.map = texture;
  jupiterMaterial.needsUpdate = true;
});
var jupiterGeometry = new THREE.SphereGeometry(jupiterRadius, jupiterWidthSegments, jupiterHeightSegments);
var jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial); // earth
// ---------

var earthRadius = 12,
    earthWidthSegments = 10,
    earthHeightSegments = 10;
var earthMaterial = new THREE.MeshPhongMaterial({});
var loader2 = new THREE.ImageLoader();
loader2.load("https://raw.githubusercontent.com/afonsopacifer/cdn/master/earthmap1k.jpg", function (image) {
  var texture = new THREE.Texture();
  texture.image = image;
  texture.needsUpdate = true;
  earthMaterial.map = texture;
  earthMaterial.needsUpdate = true;
});
var earthGeometry = new THREE.SphereGeometry(earthRadius, earthWidthSegments, earthHeightSegments);
var earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(jupiter, earth);
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


 var starGeo = new THREE.Geometry();
      for(let i=0;i<6000;i++) {
      var   star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 600
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star);
      }

      let sprite = new THREE.TextureLoader().load( 'assets/img/star.png' );
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
      });

    var   stars = new THREE.Points(starGeo,starMaterial);
      scene.add(stars);

var render = function render() {
  earth.position.set(-230, 0, 0);
  requestAnimationFrame(render);
  jupiter.rotation.y += 0.002;
  earth.rotation.y += 0.025;
  renderer.render(scene, camera);
};

render();