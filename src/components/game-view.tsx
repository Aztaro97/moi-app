"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { cluster, renderScene } from "@/scenes/main-ceans";
import { useDepartmentModal } from "@/store/departmentModalStore";
import * as TWEEN from "@tweenjs/tween.js";

const GameView = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [controls, setControls] = useState<OrbitControls | null>(null);

  const { clusterSelected } = useDepartmentModal();

  // Function to calculate the optimal camera position and smoothly transition
  const updateCameraPosition = useCallback(
    (position: any) => {
      if (!camera || !controls) return;

      const newPosition = new THREE.Vector3(
        position.x * 60,
        100,
        position.z * 60 + 100
      );
      const newTarget = new THREE.Vector3(position.x * 60, 0, position.z * 60);

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
      animate(2000);
    },
    [camera, controls]
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
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    newCamera.position.set(80, 140, 80);
    newCamera.position.y = 200;

    const newControls = new OrbitControls(newCamera, canvasRef.current);
    newControls.enableDamping = true; // Optional, but this gives a nice
    newControls.dampingFactor = 0.05; // smooth effect to the camera movement
    newControls.enableZoom = true;
    newControls.zoomSpeed = 1;
    newControls.zoomToCursor = false;
    newControls.enableRotate = true;
    newControls.autoRotate = false;
    newControls.rotateSpeed = 1;
    newControls.autoRotateSpeed = -10;
    newControls.enablePan = true;
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
      new GLTFLoader()
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

  return <canvas ref={canvasRef} id="c" style={{ display: "block" }} />;
};

export default GameView;
