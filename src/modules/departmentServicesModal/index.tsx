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

export default function DepartmentServicesModal() {
  const { isOpen, setIsOpen } = useDepartmentServicesModal();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[1000px] w-full bg-background text-foreground p-8">
        <DialogHeader>
          <DialogTitle className="text-white text-5xl mb-10 uppercase">
            Civil defense services
          </DialogTitle>
        </DialogHeader>
        <div className=" h-full grid grid-cols-[1fr_5fr] gap-10">
          <h1>Service Modal</h1>
        </div>
      </DialogContent>
    </Dialog>
  );
}
