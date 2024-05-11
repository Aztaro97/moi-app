"use client";
import { Menu as MenuIcon} from "lucide-react";


import GameView from "@/components/game-view";
import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Button } from "@/components/ui/button";
import { DepartmentMenuModal } from "@/modules/departmentMenuDialog";

export default function Home() {
  return (
	<div className="relative w-full">
		<GameView />
		<DepartmentMenuModal />
	</div>
  )
}
