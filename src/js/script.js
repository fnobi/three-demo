const THREE = require("three");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 1000;

const geometry = new THREE.BoxGeometry(200, 200, 200);
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: {
            type: 'f',
            value: 0.0
        }
    },
    vertexShader: document.getElementById('sample-vshader').textContent,
    fragmentShader: document.getElementById('sample-fshader').textContent
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(-30, 150, 30);
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const startTime = Date.now();

(function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

    material.uniforms.time.value = (Date.now() - startTime) / 1000;

    renderer.render(scene, camera);
})();

renderer.domElement.addEventListener('click', () => {
    material.wireframe = !material.wireframe;
});
