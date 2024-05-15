"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { cluster, renderScene } from "@/scenes/main-ceans";
import { useDepartmentModal } from "@/store/departmentModalStore";
import * as TWEEN from "@tweenjs/tween.js";
import { useDepartmentServicesModal } from "@/store/departmentServicesModalStore";

const GameView = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [controls, setControls] = useState<OrbitControls | null>(null);
  const [interactiveObjects, setInteractiveObjects] = useState([]);

  const { clusterSelected } = useDepartmentModal();
  const { setIsOpen: setIsOpenService } = useDepartmentServicesModal();

  // Function to calculate the optimal camera position and smoothly transition
  const updateCameraPosition = useCallback(
    (position: any) => {
      if (!camera || !controls) return;

      const newPosition = new THREE.Vector3(
        position.x * 1,
        100,
        position.z * 1 + 100
      );
      const newTarget = new THREE.Vector3(position.x * 60, 60, position.z * 60);

      // Use Tween.js or similar library for smooth transitions, or implement a simple lerp function:
      // Tween the camera position
      new TWEEN.Tween(camera.position)
        .to({ x: newPosition.x, y: 60, z: newPosition.z }, 1000)
        .easing(TWEEN.Easing.Cubic.Out)
        .onUpdate(() => controls.update())
        .start();

      // Tween the controls target
      new TWEEN.Tween(controls.target)
        .to({ x: newTarget.x, y: 20, z: newTarget.z }, 1000)
        .easing(TWEEN.Easing.Cubic.Out)
        .onUpdate(() => controls.update())
        .start();

      // Start the tween update loop
      function animate(time: number) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      animate(200);
    },
    [camera, controls]
  );

  const onDocumentMouseClick = useCallback(
    (event: any) => {
      event.preventDefault();
      if (!camera || !controls || !scene) return;

      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      controls?.update();
      raycaster.setFromCamera(mouse, camera);

      //   const intersects = raycaster.intersectObjects(interactiveObjects);
      const intersects = raycaster.intersectObjects(scene?.children, true);

      if (intersects.length > 0) {
        const object = intersects[0].object;
        console.log("Cluster ID:", object.userData);
        if (object.userData.name === "Building_House_03_color01_Cylinder.000") {
          setIsOpenService(true);
        }
        // Trigger your onClick logic here
        // onClickCluster(object.userData.clusterId);
      }
    },
    [camera, scene, controls, interactiveObjects]
  );

  const handleHover = useCallback(
    (event: any) => {
      if (!camera || !controls || !scene) return;

      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      controls?.update();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const object = intersects[0].object;

        // console.log("Cluster ID:", object.userData);
        // Update cursor or show tooltip if hovering over a sign
        if (object.parent && object.parent.userData.details) {
          document.body.style.cursor = "pointer";
        } else {
          document.body.style.cursor = "default";
        }
      } else {
        document.body.style.cursor = "default";
      }
    },
    [camera, interactiveObjects]
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    const newRenderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    newRenderer.setSize(window.innerWidth, window.innerHeight);

    const newScene = new THREE.Scene();
    newScene.background = new THREE.Color("#9FE3FA");

    const newCamera = new THREE.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    newCamera.position.set(80, 140, 80);
    // newCamera.position.y = 200;

    const newControls = new OrbitControls(newCamera, canvasRef.current);
    newControls.enableDamping = true; // Optional, but this gives a nice
    newControls.dampingFactor = 0.05; // smooth effect to the camera movement
    newControls.enableZoom = false;
    newControls.zoomSpeed = 1;
    newControls.zoomToCursor = false;
    newControls.enableRotate = true;
    newControls.autoRotate = false;
    newControls.rotateSpeed = 1;
    newControls.autoRotateSpeed = -10;
    newControls.enablePan = false;
    newControls.screenSpacePanning = true;
    newControls.maxPolarAngle = Math.PI / 2;

    setRenderer(newRenderer);
    setScene(newScene);
    setCamera(newCamera);
    setControls(newControls);
	

    renderScene(
      newScene,
      newCamera,
      newRenderer,
      newControls,
      new GLTFLoader(),
      setInteractiveObjects
    );

    const handleResize = () => {
      if (newCamera && newRenderer) {
        newCamera.aspect = window.innerWidth / window.innerHeight;
        newCamera.updateProjectionMatrix();
        newRenderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      newRenderer.dispose(); // Dispose resources when the component unmounts
    };
  }, []);

  //   Change the camera position based on the selected cluster
  useEffect(() => {
    if (scene && camera && controls) {
      const position = cluster.find((c) => c.cluster === clusterSelected);
      if (!position) {
        console.error("Cluster position not found:", clusterSelected);
        return;
      }

      // Call the camera update function
      updateCameraPosition(position);
    }
  }, [clusterSelected, updateCameraPosition]);

  useEffect(() => {
    document.addEventListener("click", onDocumentMouseClick);
    document.addEventListener("mousemove", handleHover);

    return () => {
      document.removeEventListener("click", onDocumentMouseClick);
      document.removeEventListener("mousemove", handleHover);
    };
  }, [onDocumentMouseClick, handleHover]);

  return <canvas ref={canvasRef} id="c" style={{ display: "block" }} />;
};

export default GameView;
