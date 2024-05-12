"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { cluster, renderScene } from "@/scenes/main-ceans";
import { useDepartmentModal } from "@/store/departmentModalStore";

const GameView = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [controls, setControls] = useState<OrbitControls | null>(null);

  const { clusterSelected } = useDepartmentModal();

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
      //   const cluster = scene.getObjectByName(clusterSelected);
      //   if (cluster) {
      //     const box = new THREE.Box3().setFromObject(cluster);
      //     const boxCenter = box.getCenter(new THREE.Vector3());
      //     const boxSize = box.getSize(new THREE.Vector3()).length();
      //     const boxSizeFactor = boxSize / 2;
      //     const cameraPosition = new THREE.Vector3();
      //     cameraPosition.copy(boxCenter);
      //     cameraPosition.y += boxSizeFactor;
      //     cameraPosition.z += boxSizeFactor;
      //     cameraPosition.x += boxSizeFactor;
      //     camera.position.copy(cameraPosition);
      //     controls.target.copy(boxCenter);
      //     controls.update();
      //   }
      const position = cluster.find((c) => c.cluster === clusterSelected);
      if (!position) {
        console.error("Cluster position not found:", clusterSelected);
        return;
      }

      // Adjust these values based on your scene's scale and desired camera positioning
      camera.position.set(position.x * 60, 20, position.z * 60);
      controls.target.set(position.x, 0, position.z);
      controls.update();
    }
  }, [clusterSelected, scene, camera, controls]);

  return <canvas ref={canvasRef} id="c" style={{ display: "block" }} />;
};

export default GameView;
