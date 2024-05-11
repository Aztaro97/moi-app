"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { renderScene } from "@/scenes/main-ceans";

const GameView = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [controls, setControls] = useState<OrbitControls | null>(null);

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

  return <canvas ref={canvasRef} id="c" style={{ display: "block" }} />;
};

export default GameView;
