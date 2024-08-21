import * as THREE from 'three';

// CREATE THE SCENE

/* To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera. */

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
