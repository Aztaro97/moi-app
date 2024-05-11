// @ts-nocheck

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MapControls } from "three/examples/jsm/controls/MapControls.js";


const SOUTH = 2;
const LEAP = 240;

let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let carList = [];
let isPlaying = true;

const clusterNames = [
	"factory",
	"house2",
	"shoparea",
	"house",
	"apartments",
	"shops",
	"fastfood",
	"house3",
	"stadium",
	"gas",
	"supermarket",
	"coffeeshop",
	"residence",
	"bus",
	"park",
	"supermarket",
];

const cluster = [
	{ x: 1, z: 0, cluster: "road" },

	{ x: 2, z: 2, cluster: clusterNames[0], direction: SOUTH },
	{ x: 2, z: 1, cluster: clusterNames[1], direction: SOUTH },
	{ x: 2, z: 0, cluster: clusterNames[2], direction: SOUTH },
	{ x: 2, z: -1, cluster: clusterNames[3], direction: SOUTH },
	{ x: 2, z: -2, cluster: clusterNames[0], direction: SOUTH },
	{ x: 2, z: -3, cluster: clusterNames[1], direction: SOUTH },
	{ x: 2, z: -4, cluster: clusterNames[2], direction: SOUTH },
	{ x: 2, z: -5, cluster: clusterNames[3], direction: SOUTH },

	{ x: 1, z: 2, cluster: clusterNames[4], direction: SOUTH },
	{ x: 1, z: 1, cluster: clusterNames[7], direction: SOUTH },
	{ x: 1, z: 0, cluster: clusterNames[8], direction: SOUTH },
	{ x: 1, z: -1, cluster: clusterNames[9], direction: SOUTH },
	{ x: 1, z: -2, cluster: clusterNames[4], direction: SOUTH },
	{ x: 1, z: -3, cluster: clusterNames[7], direction: SOUTH },
	{ x: 1, z: -4, cluster: clusterNames[8], direction: SOUTH },
	{ x: 1, z: -5, cluster: clusterNames[9], direction: SOUTH },

	{ x: 0, z: 2, cluster: clusterNames[5], direction: SOUTH },
	{ x: 0, z: 1, cluster: clusterNames[10], direction: SOUTH },
	{ x: 0, z: 0, cluster: clusterNames[12], direction: SOUTH },
	{ x: 0, z: -1, cluster: clusterNames[13], direction: SOUTH },
	{ x: 0, z: -2, cluster: clusterNames[5], direction: SOUTH },
	{ x: 0, z: -3, cluster: clusterNames[10], direction: SOUTH },
	{ x: 0, z: -4, cluster: clusterNames[12], direction: SOUTH },
	{ x: 0, z: -5, cluster: clusterNames[13], direction: SOUTH },

	{ x: -1, z: 2, cluster: clusterNames[6], direction: SOUTH },
	{ x: -1, z: 1, cluster: clusterNames[11], direction: SOUTH },
	{ x: -1, z: 0, cluster: clusterNames[14], direction: SOUTH },
	{ x: -1, z: -1, cluster: clusterNames[15], direction: SOUTH },
	{ x: -1, z: -2, cluster: clusterNames[6], direction: SOUTH },
	{ x: -1, z: -3, cluster: clusterNames[11], direction: SOUTH },
	{ x: -1, z: -4, cluster: clusterNames[14], direction: SOUTH },
	{ x: -1, z: -5, cluster: clusterNames[15], direction: SOUTH },

	{ x: -2, z: 2, cluster: clusterNames[0], direction: SOUTH },
	{ x: -2, z: 1, cluster: clusterNames[1], direction: SOUTH },
	{ x: -2, z: 0, cluster: clusterNames[2], direction: SOUTH },
	{ x: -2, z: -1, cluster: clusterNames[3], direction: SOUTH },
	{ x: -2, z: -2, cluster: clusterNames[0], direction: SOUTH },
	{ x: -2, z: -3, cluster: clusterNames[1], direction: SOUTH },
	{ x: -2, z: -4, cluster: clusterNames[2], direction: SOUTH },
	{ x: -2, z: -5, cluster: clusterNames[3], direction: SOUTH },

	{ x: -3, z: 2, cluster: clusterNames[4], direction: SOUTH },
	{ x: -3, z: 1, cluster: clusterNames[7], direction: SOUTH },
	{ x: -3, z: 0, cluster: clusterNames[8], direction: SOUTH },
	{ x: -3, z: -1, cluster: clusterNames[9], direction: SOUTH },
	{ x: -3, z: -2, cluster: clusterNames[4], direction: SOUTH },
	{ x: -3, z: -3, cluster: clusterNames[7], direction: SOUTH },
	{ x: -3, z: -4, cluster: clusterNames[8], direction: SOUTH },
	{ x: -3, z: -5, cluster: clusterNames[9], direction: SOUTH },

	{ x: -4, z: 2, cluster: clusterNames[5], direction: SOUTH },
	{ x: -4, z: 1, cluster: clusterNames[10], direction: SOUTH },
	{ x: -4, z: 0, cluster: clusterNames[12], direction: SOUTH },
	{ x: -4, z: -1, cluster: clusterNames[13], direction: SOUTH },
	{ x: -4, z: -2, cluster: clusterNames[5], direction: SOUTH },
	{ x: -4, z: -3, cluster: clusterNames[10], direction: SOUTH },
	{ x: -4, z: -4, cluster: clusterNames[12], direction: SOUTH },
	{ x: -4, z: -5, cluster: clusterNames[13], direction: SOUTH },

	{ x: -5, z: 2, cluster: clusterNames[6], direction: SOUTH },
	{ x: -5, z: 1, cluster: clusterNames[11], direction: SOUTH },
	{ x: -5, z: 0, cluster: clusterNames[14], direction: SOUTH },
	{ x: -5, z: -1, cluster: clusterNames[15], direction: SOUTH },
	{ x: -5, z: -2, cluster: clusterNames[6], direction: SOUTH },
	{ x: -5, z: -3, cluster: clusterNames[11], direction: SOUTH },
	{ x: -5, z: -4, cluster: clusterNames[14], direction: SOUTH },
	{ x: -5, z: -5, cluster: clusterNames[8], direction: SOUTH },
];


function loadClusters({ x, z, cluster, direction }, scene, camera, controls, gltfLoader) {
	gltfLoader.load(`/assets/gltf/${cluster}.gltf`, (gltf) => {
		const box = new THREE.Box3().setFromObject(gltf.scene);
		const boxSize = box.getSize(new THREE.Vector3()).length();
		const boxCenter = box.getCenter(new THREE.Vector3());

		controls.maxDistance = boxSize * 5;
		camera.position.copy(boxCenter);
		camera.position.x += boxSize / 8.0;
		camera.position.y += boxSize / 10.0;
		camera.position.z += boxSize / 5.0;
		camera.lookAt(boxCenter);
		camera.near = boxSize / 100;
		camera.far = boxSize * 200;
		camera.updateProjectionMatrix();
		scene.add(camera);

		controls.target.copy(boxCenter);
		controls.update();

		gltf.scene.traverse((child) => {
			if (child.isMesh) {
				child.receiveShadow = true;
				child.castShadow = true;
				child.material.depthWrite = !child.material.transparent;

				if (child.name.includes("apartment")) {
					child.userData.details = { /* details */ };
				}
			}
		});

		gltf.scene.position.set(x * 60, 0, z * 60);
		if (direction) gltf.scene.rotation.y = Math.PI * direction;

		scene.add(gltf.scene);
	});
}

export function renderScene(scene, camera, renderer, controls, gltfLoader) {
	renderer.shadowMap.enabled = true;
	renderer.gammaInput = renderer.gammaOutput = true;
	renderer.gammaFactor = 2.0;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.setClearColor(0xcccccc);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	setupLighting(scene, renderer);

	cluster.forEach((cl) => loadClusters(cl, scene, camera, controls, gltfLoader));
	loadCars({ x: 1, z: 0, cluster: "cars" }, scene, camera, controls, gltfLoader);

	function render() {
		if (!isPlaying) return;
		controls.update();

		handleCameraPosition(camera, controls);
		handleCarMovement(camera);

		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);
}

function handleCameraPosition(camera, controls) {
	if (camera.position.x > 130) {
		controls.target.x -= LEAP;
		camera.position.x -= LEAP;
		carList.forEach((car) => (car.position.x -= LEAP));
	} else if (camera.position.x < -120) {
		controls.target.x += LEAP;
		camera.position.x += LEAP;
		carList.forEach((car) => (car.position.x += LEAP));
	}
	if (camera.position.z > 130) {
		controls.target.z -= LEAP;
		camera.position.z -= LEAP;
		carList.forEach((car) => (car.position.z -= LEAP));
	} else if (camera.position.z < -120) {
		controls.target.z += LEAP;
		camera.position.z += LEAP;
		carList.forEach((car) => (car.position.z += LEAP));
	}
}

function handleCarMovement(camera) {
	raycaster.setFromCamera(mouse, camera);

	carList.forEach((car) => {
		car.r.set(
			new THREE.Vector3(car.position.x + 58, 1, car.position.z),
			new THREE.Vector3(car.userData.x, 0, car.userData.z)
		);
		let _NT = car.r.intersectObjects(carList, true);
		if (_NT.length > 0) {
			car.speed = 0;
			return;
		} else {
			car.speed = car.speed < car.maxSpeed ? car.speed + 0.002 : car.speed;

			if (car.position.x < -380) car.position.x += LEAP * 2;
			else if (car.position.x > 100) car.position.x -= LEAP * 2;
			if (car.position.z < -320) car.position.x += LEAP * 2;
			else if (car.position.z > 160) car.position.x -= LEAP * 2;

			car.position.x += car.userData.x * car.speed;
			car.position.z += car.userData.z * car.speed;
		}
	});
}

function setupLighting(scene, renderer) {
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	const light = new THREE.DirectionalLight(16774618, 1.5);
	light.position.set(-300, 750, -300);
	light.castShadow = true;
	light.shadow.mapSize.width = light.shadow.mapSize.height = 4096;
	light.shadow.camera.near = 1;
	light.shadow.camera.far = 1000;
	light.shadow.camera.left = light.shadow.camera.bottom = -200;
	light.shadow.camera.right = light.shadow.camera.top = 200;
	light.shadow.mapSize.width = 2048;
	light.shadow.mapSize.height = 2048;
	scene.add(light);
	scene.add(light.target);
	scene.add(new THREE.HemisphereLight(0xefefef, 0xffffff, 1));
}


function requestAnimationFrame(callback) {
	window.requestAnimationFrame(callback);
}


function loadCars({ x, z, cluster, direction }, scene, camera, controls, gltfLoader) {
	gltfLoader.load(`assets/gltf/${cluster}.gltf`, (gltf) => {
		controls.update();

		gltf.scene.traverse((child) => {
			if (child.isMesh) {
				child.receiveShadow = true;
				child.castShadow = true;
				child.material.depthWrite = !child.material.transparent;
			}
		});

		gltf.scene.position.set(x * 60, 0, z * 60);
		if (direction) gltf.scene.rotation.y = Math.PI * direction;

		scene.add(gltf.scene);

		gltf.scene.children.forEach((car) => {
			car.distance = 0;
			car.maxSpeed = 0.3;
			car.speed = car.maxSpeed;
			car.r = new THREE.Raycaster(
				new THREE.Vector3(car.position.x, 2, car.position.z),
				new THREE.Vector3(car.userData.x, 0, car.userData.z),
				5,
				15
			);
			carList.push(car);
		});
	});
}

