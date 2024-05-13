import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDepartmentModal } from "@/store/departmentModalStore";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IDepartmentData {
  name: string;
  cluster: string;
  x: number;
  z: number;
  direction: number;
}
const departmentData: IDepartmentData[] = [
  {
    name: "House",
    cluster: "house2",
    x: 2,
    z: 2,
    direction: 2,
  },
  {
    name: "Shop Area",
    cluster: "shoparea",
    x: 2,
    z: 1,
    direction: 2,
  },
  {
    name: "Apartments",
    cluster: "apartments",
    x: 2,
    z: 0,
    direction: 2,
  },
  {
    name: "Super Market",
    cluster: "supermarket",
    x: 0,
    z: -3,
    direction: 2,
  },
];

export default function DepartmentMenu() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {departmentData.map((department, index) => (
        <CardItem key={index} {...department} />
      ))}
    </div>
  );
}

const CardItem = ({ name, cluster }: IDepartmentData) => {
  const { setClusterSelected, setIsOpen } = useDepartmentModal();

  const handleSelect = () => {
    setClusterSelected(cluster);
    setIsOpen(false);
  };

  return (
    <div
      onClick={handleSelect}
      className="relative h-full w-full group rounded-lg max-w-[400px] cursor-pointer overflow-hidden"
    >
      <Image
        alt={name}
        className="h-[200px] w-full group-hover:scale-105 transition-transform duration-300"
        height={300}
        width={300}
        src="/images/driving.jpeg"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 rounded-lg group-hover:bg-black/80 transition-all duration-300">
        <h3 className="text-white text-xl font-semibold text-center">{name}</h3>
      </div>
    </div>
  );
};
