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

interface IDepartmentData {
  name: string;
  x: number;
  z: number;
  direction: number;
}
const departmentData: IDepartmentData[] = [
  {
    name: "house2",
    x: 2,
    z: 2,
    direction: 2,
  },
  {
    name: "shoparea",
    x: 2,
    z: 1,
    direction: 2,
  },
  {
    name: "apartments",
    x: 2,
    z: 0,
    direction: 2,
  },
];

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDepartmentModal } from "@/store/departmentModalStore";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DepartmentMenuModal() {
  const { isOpen, setIsOpen } = useDepartmentModal();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[200px] bg-[#0a0a0a85] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-white">Choose a department</DialogTitle>
        </DialogHeader>
        <div
          className="grid !grid-cols-2 gap-4"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "700px",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {departmentData.map((department, index) => (
            <CardItem key={index} {...department} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const CardItem = ({ name }: IDepartmentData) => {
  const { setClusterSelected, setIsOpen } = useDepartmentModal();

  const handleSelect = () => {
    setClusterSelected(name);
    setIsOpen(false);
  };

  return (
    <div
      onClick={handleSelect}
      className="relative h-full w-full group rounded-lg max-w-[400px]"
    >
      <Image
        alt={name}
        className="h-[200px] w-full group-hover:scale-105 transition-transform duration-300"
        height={300}
        width={300}
        src="/images/driving.jpeg"
        priority
      />
      <div
        className="absolute w-full h-full flex items-center justify-center bg-black/60 rounded-lg group-hover:bg-black/80 transition-all duration-300"
        style={{
          top: 0,
          left: 0,
        }}
      >
        <h3 className="text-white text-xl font-semibold text-center">{name}</h3>
      </div>
    </div>
  );
};
