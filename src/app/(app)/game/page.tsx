"use client";
import { Menu as MenuIcon } from "lucide-react";

import GameView from "@/components/game-view";
import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Button } from "@/components/ui/button";
import { DepartmentMenuModal } from "@/modules/departmentMenuDialog";
import { useDepartmentModal } from "@/store/departmentModalStore";
import DepartmentServicesModal from "@/modules/departmentServicesModal";

export default function Home() {
  const { setIsOpen } = useDepartmentModal();
  return (
    <div className="relative">
      <GameView />
      <Button
        className="absolute bottom-2 right-2 rounded-sm"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </Button>
      <DepartmentMenuModal />
      <DepartmentServicesModal />
    </div>
  );
}
