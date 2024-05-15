import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useDepartmentModal } from "@/stores/departmentModalStore";
import { useState } from "react";
import DepartmentMenu from "./departmentMenu";
import GameSetting from "@/components/gameSetting";
import PauseGame from "@/components/pauseGame";

const navigation = [
  { name: "Play", heading: "MOI city Tour", href: "#", current: true },
  {
    name: "E-Service",
    heading: "Mission Selection",
    href: "#",
    current: false,
  },
  { name: "Settings", heading: "Game Settings", href: "#", current: false },
];

export function DepartmentMenuModal() {
  const { isOpen, setIsOpen } = useDepartmentModal();
  const [activeTab, setActiveTab] = useState(navigation[0]);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[1000px] w-full bg-background text-foreground p-8">
        <DialogHeader>
          <DialogTitle className="text-white text-5xl mb-10 uppercase">
            Main Menu
          </DialogTitle>
        </DialogHeader>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_5fr] gap-10">
          <ul className="flex flex-row lg:flex-col gap-5">
            {navigation.map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => setActiveTab(item)}
                  className={`min-w-[100px] lg:min-w-[150px] uppercase text-xl ${
                    activeTab.name === item.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground"
                  }`}
                >
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
          <div className="h-[500px] h-full overflow-y-scroll lg:overflow-y-hidden">
            <h1 className="text-4xl uppercase font-bold border-b-4 border-solid  border-primary max-w-max mb-5">
              {activeTab.heading}
            </h1>
            <div>
              {activeTab.name === "Play" ? (
                <PauseGame />
              ) : activeTab.name === "E-Service" ? (
                <DepartmentMenu />
              ) : (
                activeTab.name === "Settings" && <GameSetting />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
