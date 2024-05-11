"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// import { OrbitControls } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { renderScene } from "@/scenes/main-ceans";
import { Menu as MenuIcon} from "lucide-react";
import { Button } from "./ui/button";

const GameView = () => {
  const canvasRef = useRef(null);
  const [renderer, setRenderer] = useState<any>(null);
  const [scene, setScene] = useState<any>(null);
  const [camera, setCamera] = useState<any>(null);
  const [controls, setControls] = useState<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    // Initialize Three.js scene, camera, renderer, and controls
    const canvas = canvasRef.current;
    const newRenderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    const newScene = new THREE.Scene();
    const newCamera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    const newControls = new OrbitControls(newCamera, canvas);

    setRenderer(newRenderer);
    setScene(newScene);
    setCamera(newCamera);
    setControls(newControls);

    renderScene();

    // Clean up on unmount
    return () => {
      // Dispose of resources, e.g., geometries, materials, textures
    };
  }, []);

  useEffect(() => {
    if (renderer && camera) {
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [renderer, camera]);

  return <canvas ref={canvasRef} id="c" />
};

export default GameView;
