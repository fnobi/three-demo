const THREE = require('three');

const WIDTH = 2545;
const HEIGHT = 1389;


const scene = new THREE.Scene();

const camera = new THREE.OrthographicCamera(0, window.innerWidth, 0, window.innerHeight, 0.001, 10000);

(function () {
    const texture = THREE.ImageUtils.loadTexture('img/kayac-corporate.png');

    const material = new THREE.SpriteMaterial({
        map: texture,
        color: 0xffffff
    });

    const sprite = new THREE.Sprite(material);
    sprite.position.set(WIDTH * 0.5, HEIGHT * 0.5, -1);
    sprite.scale.set(-WIDTH, HEIGHT, 1);
    scene.add(sprite);
})();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


(function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
})();
