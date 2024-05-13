import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// export const departmentData = [
//   "house2",
//   "shoparea",
//   "house",
//   "apartments",
//   "shops",
//   "fastfood",
//   "house3",
//   "supermarket",
//   "coffeeshop",
//   "residence",
//   "supermarket",
// ];

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDepartmentModal } from "@/store/departmentModalStore";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DepartmentMenu from "./departmentMenu";

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
          <DialogTitle className="text-white text-5xl mb-10">
            Main Menu
          </DialogTitle>
        </DialogHeader>
        <div className=" !w-[1000px] h-full grid grid-cols-[1fr_5fr] gap-10">
          <div className="">
            <ul className="flex flex-col gap-y-5">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Button
                    onClick={() => setActiveTab(item)}
                    className={`min-w-[150px] uppercase text-xl ${
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
          </div>
          <div className="min-h-[600px]">
            <h1 className="text-4xl uppercase font-bold border-b-4 border-solid  border-primary max-w-max mb-5">
              {activeTab.heading}
            </h1>
            <div>
              {activeTab.name === "Play" ? (
                <div>Hello word</div>
              ) : activeTab.name === "E-Service" ? (
                <DepartmentMenu />
              ) : (
                <div>Hello word</div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
