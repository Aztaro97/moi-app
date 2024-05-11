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
    const newCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    newCamera.position.set(0, 20, 100);

    const newControls = new OrbitControls(newCamera, canvasRef.current);
    newControls.enableDamping = true; // Optional, but this gives a nice damping effect during camera manipulation

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
