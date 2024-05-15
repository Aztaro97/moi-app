import { useDepartmentServicesModal } from "@/store/departmentServicesModalStore";
import React from "react";
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

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import HassantukIcon from "@/icons/hassantukIcon";
import CertificateIcon from "@/icons/certificateIcon";
import HassantukBuildingIcon from "@/icons/hassantukBuildingIcon";
import LicenceSafetyIcon from "@/icons/licenceSafetyIcon";
import LicenseRenewIcon from "@/icons/licenseRenewIcon";
import InssuanceIcon from "@/icons/inssuanceIcon";
import { Search as SearchIcon } from "lucide-react";

interface TService {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

export const services: TService[] = [
  {
    title: "",
    icon: <HassantukIcon />,
    description: "Hassantuk For Homes",
    link: "/game/Hassantuk",
  },
  {
    title: "",
    icon: <CertificateIcon />,
    description:
      "Issue a certificate of conformity with preventive safety requirements for low risk buildings and facilities A",
    link: "/game/Hassantuk",
  },
  {
    title: "",
    icon: <HassantukBuildingIcon />,
    description: "Hassantuk for Buildings",
    link: "/game/Hassantuk",
  },
  {
    title: "",
    icon: <LicenceSafetyIcon />,
    description:
      "Licensing a Distributor in the field of preventive fire safety",
    link: "/game/Hassantuk",
  },
  {
    title: "",
    icon: <LicenseRenewIcon />,
    description:
      "Licensing a Distributor in the field of preventive fire safety",
    link: "/game/Hassantuk",
  },
  {
    title: "",
    icon: <InssuanceIcon />,
    description: `Issuance of "To Whom It May Concern" Certificate - Civil Defense`,
    link: "/game/Hassantuk",
  },
];

export default function DepartmentServicesModal() {
  const { isOpen, setIsOpen } = useDepartmentServicesModal();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[1000px] w-full bg-background text-foreground p-8">
        <DialogHeader>
          <DialogTitle className="text-white text-5xl mb-10 uppercase">
            <span className="text-primary">Civil defense</span> services
          </DialogTitle>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              className="rounded-lg"
              placeholder="Search for services"
              type="search"
            />
            <Button className="rounded-lg" type="submit">
              <SearchIcon />
            </Button>
          </div>
        </DialogHeader>
        <div className=" h-full  w-full">
          <HoverEffect items={services} />
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </DialogContent>
    </Dialog>
  );
}
