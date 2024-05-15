import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDepartmentModal } from "@/stores/departmentModalStore";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IDepartmentData {
  name: string;
  cluster: string;
  x: number;
  z: number;
  direction: number;
  bgImgUrl: string;
}
const departmentData: IDepartmentData[] = [
  {
    name: "crime security",
    cluster: "crime-security",
    x: -4,
    z: 0,
    direction: 2,
    bgImgUrl: "/images/gun.jpeg",
  },

  {
    name: "civil defense",
    cluster: "civil-defense",
    x: 0,
    z: 0,
    direction: 2,
    bgImgUrl: "/images/fire.jpeg",
  },
  {
    name: "Policing General Head Quarter",
    cluster: "Policing",
    x: -1,
    z: -1,
    direction: 2,
    bgImgUrl: "/images/police.jpeg",
  },
  {
    name: "Punitive and Reformatory",
    cluster: "PUNITIVE",
    x: 0,
    z: -1,
    direction: 2,
    bgImgUrl: "/images/jail.jpeg",
  },
  {
    name: "Traffic & Licensing",
    cluster: "traffic",
    x: 1,
    z: -1,
    direction: 2,
    bgImgUrl: "/images/traffic.jpeg",
  },
  {
    name: "Other Services",
    cluster: "traffic",
    x: 1,
    z: 0,
    direction: 2,
    bgImgUrl: "/images/others.jpeg",
  },
];

export default function DepartmentMenu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
      {departmentData.map((department, index) => (
        <CardItem key={index} {...department} />
      ))}
    </div>
  );
}

const CardItem = ({ name, cluster, bgImgUrl }: IDepartmentData) => {
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
        className="h-[200px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
        height={300}
        width={300}
        src={bgImgUrl}
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 rounded-lg group-hover:bg-black/80 transition-all duration-300">
        <h3 className="text-white text-xl font-semibold text-center uppercase">
          {name}
        </h3>
      </div>
    </div>
  );
};
