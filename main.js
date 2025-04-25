import * as THREE from 'three';

// CREATE THE SCENE

/* To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera. */

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// CREATE A CUBE

const textureLoader = new THREE.TextureLoader();
//const texture = textureLoader.load('/assets/images/tntcrate.jpg')
const texture = new THREE.TextureLoader().load('/Floating_TNT_Crate_ThreeJS/assets/images/tntcrate.jpg');

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = [
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }), // top of cube
    new THREE.MeshBasicMaterial({ map: texture }), // bottom of cube
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture })
];

const cube = new THREE.Mesh( geometry, material );

scene.add(cube);

camera.position.z = 5;

// RENDERING THE SCENE

function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

