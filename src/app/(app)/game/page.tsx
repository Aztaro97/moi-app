"use client";

import GameView from "@/components/game-view";
import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Home() {
  return <GameView />;
}
