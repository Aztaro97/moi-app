import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useDepartmentModal } from "@/stores/departmentModalStore";

export default function PauseGame() {
  const router = useRouter();
  const { setIsOpen } = useDepartmentModal();
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-16">
      <Button
        variant={"default"}
        className="w-full max-w-lg mx-auto h-fit py-6 text-5xl"
        onClick={() => setIsOpen(false)}
      >
        Continue
      </Button>
      <Button
        variant={"destructive"}
        className="w-full max-w-lg mx-auto h-fit py-6 text-5xl"
        onClick={() => router.push("/")}
      >
        Exit Game
      </Button>
    </div>
  );
}
